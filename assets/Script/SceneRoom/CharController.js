cc.Class({
    extends: cc.Component,

    properties: {
        charList: cc.Node,
        dod: cc.Prefab,
        wolf: cc.Prefab,
        firstTimeDelay: {
            type:cc.Float,
            default:3
        },
        numberEnemi: {
            type: cc.Integer,
            default: 20
        }
    },
    onLoad() {
        this.init();
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = false;
    },
    init(){
        this.spawnedCount = 0;
        this.scheduleOnce(()=>{
            this.spawnNextEnemy();
        },this.firstTimeDelay)
    },
    spawnNextEnemy() {
        if (this.spawnedCount >= this.numberEnemi) return;
        let prefab = Math.random() < 0.5 ? this.dod : this.wolf;
        let enemy = cc.instantiate(prefab);
        this.charList.addChild(enemy);

        this.spawnedCount++;
        let nextDelay = Math.random() * 2.5 + 0.5;

        this.scheduleOnce(() => {
            this.spawnNextEnemy();
        }, nextDelay);
    },
    killEnemi(){
        this.charList.getComponent("CharItem").onDie();
    }
});
