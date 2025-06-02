const Emitter = require('Emitter');
const EventCode = require('EventCode');

cc.Class({
    extends: cc.Component,

    properties: {
        speed: {
            type: cc.Integer,
            default: 200
        },
        positionStartY:{
            type: [cc.Integer],
            default:[]
        }
        
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
        this.onMove(this.targetPosition);
    },
    onMove(targetPosition) {
        const deltaX = targetPosition.x - this.node.x;
        const time = Math.abs(deltaX / this.speed);

        cc.tween(this.node)
            .by(time, { x: deltaX })
            .call(() => { this.node.destroy() })
            .start();
        cc.tween(this.node)
            .sequence(
                cc.tween().by(0.2, { y: 10 }),
                cc.tween().by(0.2, { y: -10 })
            )
            .repeatForever()
            .start();
    },
    onDie(gold) {
        this.node.stopAllActions();
        cc.tween(this.node)
            .by(0.2, { scale: 0.2 }) 
            .call(() => {
                this.node.color = cc.Color.RED;
            })
            .delay(0.1) 
            .call(() => {
                Emitter.instance.emit(EventCode.UPDATE_GOLD, gold);
                this.node.destroy();
            })
            .start();
    }
});
