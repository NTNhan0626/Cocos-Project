const Emitter = require('Emitter');
const EventCode = require('EventCode');
cc.Class({
    extends: cc.Component,

    properties: {
        speed: {
            type: cc.Integer,
            default: 300
        },
        dame:{
            type: cc.Integer,
            default: 100
        }
    },

    onLoad() {
        this._onCreateBullet = this.init.bind(this);
        this.registerEvents();
    },
    registerEvents() {
        Emitter.instance.registerEvent(EventCode.CREATE_BULLET, this._onCreateBullet);
    },
    start() {
        Emitter.instance.removeEvent(EventCode.CREATE_BULLET, this._onCreateBullet);
    },
    init(startPosition) {
       
        const sceneSize = cc.winSize;
        this.node.position = startPosition;

        let targetX = sceneSize.width - startPosition.x + this.node.width / 2;
        let targetY = startPosition.y;
        let targetPosition = new cc.Vec2(targetX, targetY);

        this.onMove(targetPosition);
    },
    onMove(targetPosition) {
        const deltaX = targetPosition.x;
        const time = Math.abs(deltaX / this.speed);

        cc.tween(this.node)
            .by(time, { x: deltaX })
            .call(() => { this.node.destroy() })
            .start();
    },

    onCollisionEnter: function (other, self) {
        console.log('on collision enter');
        let wordPosition = self.world.aabb.center;
        console.log(wordPosition);
        Emitter.instance.emit(EventCode.PLAYEFFECT,wordPosition)
        self.node.destroy();
        let gold = 0;
        if (other.node.group === "Dog") {
            gold = 1;
            let id = other.node.getComponent("CharDog").id;
            Emitter.instance.emit(EventCode.HIT_ENEMI,id,this.dame);
        } else if (other.node.group === "Wolf") {
            gold = 2;
            let id = other.node.getComponent("CharWolf").id;
            Emitter.instance.emit(EventCode.HIT_ENEMI,id,this.dame);
        }
    },
    onCollisionStay: function (other, self) {
        console.log('dang cham quai');
    },
    onCollisionExit: function (other, self) {
        console.log('cam xuyen qua ');
    },

    onDestroy() {
        
       
    }

});
