const Emitter = require('Emitter');
const EventCode = require('EventCode');
cc.Class({
    extends: cc.Component,

    properties: {
        bullets:{
            type:cc.Node,
            default:null
        },
        bulletPrefab:{
            type:cc.Prefab,
            default:null
        },
       
        timeSpawn: {
            type:cc.Float,
            default: 0.5
        }
    },
    start() {
        this.spawnBullet();
    },
    spawnBullet(){
        this.schedule(()=>{
            let bullet = cc.instantiate(this.bulletPrefab);
            this.bullets.addChild(bullet);
            let testPostion = new cc.Vec2(100,320);
            Emitter.instance.emit(EventCode.CREATE_BULLET,testPostion);
        },this.timeSpawn);
    }
});
