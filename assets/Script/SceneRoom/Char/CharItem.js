const Emitter = require('Emitter');
const EventCode = require('EventCode');
const StateMachine = require('javascript-state-machine');


cc.Class({
    extends: cc.Component,

    properties: {
        id: {
            type: cc.Integer,
            default: -1
        },
        speed: {
            type: cc.Integer,
            default: 200
        },
        hpMax: {
            type: cc.Integer,
            default: 100
        },
        positionStartY: {
            type: [cc.Integer],
            default: []
        },
        gold: {
            type: cc.Integer,
            default: 0
        },
        barHp: {
            type: cc.ProgressBar,
            default: null,
        }

    },
    onLoad() {
        this.fsm = new StateMachine({
            init: 'init',
            transitions: [
                { name: 'startMove', from: ['init', 'hiting'], to: 'moving' },
                { name: 'hit', from: 'moving', to: 'hiting' },
                { name: 'die', from: ['moving', 'hiting'], to: 'dead' }
            ],
            methods: {
                onStartMove: this.handleMove.bind(this),
                onHit: this.handleHit.bind(this),
                onDie: this.handleDie.bind(this)
            }

        })
    },
    init() {
        this.positionStartY = [130, 320, 510];
        const sceneSize = cc.winSize;
        let startX = this.node.width / 2 + 50;
        let startY = this.positionStartY[Math.floor(Math.random() * 3)];

        this.startPosition = new cc.Vec2(startX, startY);
        this.node.position = this.startPosition;

        let targetX = -(sceneSize.width + this.node.width / 2);
        let targetY = startY;
        this.targetPosition = new cc.Vec2(targetX, targetY);
        console.log(this.targetPosition);
        this.id = Math.random().toString(36).slice(2, 10);
        if (this.fsm.can('startMove')) {
            this.fsm.startMove();
        }
        console.log(this.fsm.state);

        this.barHp.progress = 1;
        this.hp = this.hpMax;
    },
    handleMove() {
        this.onMove(this.targetPosition);
        console.log("state Move", this.fsm.state);

    },
    onMove(targetPosition) {
        const deltaX = targetPosition.x - this.node.x;
        const time = Math.abs(deltaX / this.speed);

        cc.tween(this.node)
            .by(time, { x: deltaX })
            .call(() => {
                Emitter.instance.emit(EventCode.DIE_ENEMI, this.id);
                this.node.destroy()
            })
            .start();
        cc.tween(this.node)
            .sequence(
                cc.tween().by(0.2, { y: 10 }),
                cc.tween().by(0.2, { y: -10 })
            )
            .repeatForever()
            .start();
    },
    handleHit() {
        this.barHp.progress = this.hpProgress;

        this.scheduleOnce(() => {
            if (this.hp > 0) {
                this.fsm.startMove();
            } else {
                this.onDie();
            }
        }, 0);
    },
    onHit(dame = 50) {
        if (this.fsm.can('hit')) {
            this.hp = this.hp - dame < 0 ? 0 : this.hp - dame;
            this.hpProgress = this.hp / this.hpMax;
            this.fsm.hit();
        }
    },
    handleDie(lifecycle) {
        this.node.stopAllActions();
        console.log("lifecycle in handleDie", lifecycle);
        let gold = 1;
        cc.tween(this.node)
            .by(0.2, { scale: 0.2 })
            .call(() => {
                this.node.color = cc.Color.RED;
            })
            .delay(0.1)
            .call(() => {
                Emitter.instance.emit(EventCode.UPDATE_GOLD, this.gold);
                this.node.destroy();
            })
            .start();
        console.log("state Die", this.fsm.state);
    },
    onDie() {
        if (this.fsm.can('die')) {
            this.fsm.die();
        }
    }
});
