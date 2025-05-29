const Emitter = require('Emitter');
const EventCode = require('EventCode');

cc.Class({
    extends: cc.Component,

    properties: {
        speed: {
            type: cc.Integer,
            default: 200
        }
    },
    init() {
        const canvas = cc.director.getScene().getChildByName('Canvas');
        let startX = canvas.width / 2 + this.node.width / 2 + 50;
        let startY = Math.floor(Math.random() * 221) - 220;
        this.startPosition = new cc.Vec2(startX, startY);
        this.node.position = this.startPosition;

        let targetX = -(canvas.width / 2 + this.node.width / 2);
        let targetY = startY;
        this.targetPosition = new cc.Vec2(targetX, targetY);
        console.log(this.targetPosition);
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
    onDie(point) {
        cc.tween(this.node)
            .by(0.2, { scale: 0.2 })
            .call(() => {
                this.node.color = cc.Color.RED;
                this.scheduleOnce(() => {
                    Emitter.instance.emit(EventCode.UPDATEPOINT, point)
                    this.node.destroy();
                }, 0.2);

            })
            .start();
    },
    onDestroy() {

    }
});
