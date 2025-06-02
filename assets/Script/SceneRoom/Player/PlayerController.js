const Emitter = require('Emitter');
const EventCode = require('EventCode');
cc.Class({
    extends: cc.Component,

    properties: {
        bullets: {
            type: cc.Node,
            default: null
        },
        bulletPrefab: {
            type: cc.Prefab,
            default: null
        },

        timeSpawn: {
            type: cc.Float,
            default: 0.5
        },
        spine: {
            type: cc.Node,
            default: null
        }
    },
    onLoad() {
        this._onChangePosition = this.changePosition.bind(this);
        this.registerEvents();
        this._spawnCallback = this.spawnBullet.bind(this);

        this.spawnBullet();
    },

    spawnBullet() {
        if (this._spawnCallback) {
            this.unschedule(this._spawnCallback);
        }
        this._spawnCallback = () => {
            let bullet = cc.instantiate(this.bulletPrefab);
            this.bullets.addChild(bullet);

            let spinePosition = this.spine.getPosition();
            let convertPostion = new cc.Vec2(350, spinePosition.y + 80);
            Emitter.instance.emit(EventCode.CREATE_BULLET, convertPostion);
            Emitter.instance.emit(EventCode.SHORT);
        };

        this.schedule(this._spawnCallback, this.timeSpawn);
    },

    changePosition() {
        this.spawnBullet();
    },

    registerEvents() {
        Emitter.instance.registerEvent(EventCode.CHANGE_POSITION, this._onChangePosition);
    },

    onDestroy() {
        this.unschedule(this._spawnCallback); 
        Emitter.instance.removeEvent(EventCode.CHANGE_POSITION, this._onChangePosition);
    }
});
