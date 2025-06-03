const Emitter = require('Emitter');
const EventCode = require('EventCode');
cc.Class({
    extends: cc.Component,

    properties: {
        charList: cc.Node,
        dod: cc.Prefab,
        wolf: cc.Prefab,
        firstTimeDelay: {
            type: cc.Float,
            default: 3
        },
        numberEnemi: {
            type: cc.Integer,
            default: 20
        }
    },
    onLoad() {
        this.init();
        this.registerEvents();
    },
    registerEvents() {
        Emitter.instance.registerEvent(EventCode.KILL_ENEMI, this._onkillEnemiById);
        Emitter.instance.registerEvent(EventCode.HIT_ENEMI, this._onHitEnemi);
        Emitter.instance.registerEvent(EventCode.DIE_ENEMI, this._onRemoveEnemiId);

    },
    init() {
        this.listIdEnemi = [];
        this.spawnedCount = 0;
        this._onkillEnemiById = this.killEnemiById.bind(this);
        this._onRemoveEnemiId = this.removeEnemiId.bind(this);
        this._onHitEnemi = this.hitEnemi.bind(this);
        this.scheduleOnce(() => {
            this.spawnNextEnemy();
        }, this.firstTimeDelay)
    },
    spawnNextEnemy() {
        if (this.spawnedCount >= this.numberEnemi) return;
        let prefab = Math.random() < 0.5 ? this.dod : this.wolf;
        let enemy = cc.instantiate(prefab);
        this.charList.addChild(enemy);

        let enemiComponent = enemy.getComponent("CharItem");
        enemiComponent.init();
        this.listIdEnemi.push(enemiComponent.id);

        this.spawnedCount++;
        let nextDelay = Math.random() * 2.5 + 0.5;
        this.scheduleOnce(() => {
            this.spawnNextEnemy();
        }, nextDelay);
    },
    hitEnemi(id,dame){
        let enemis = this.charList.children;
        let enemi = enemis.find(enemi => enemi.getComponent("CharItem").id === id);
        enemi.getComponent("CharItem").onHit(dame);
    },
    killEnemiById(id, gold) {
        let enemis = this.charList.children;
        let enemi = enemis.find(enemi => enemi.getComponent("CharItem").id === id);
        enemi.getComponent("CharItem").onDie(gold);
        this.removeEnemiId(id);
    },
    removeEnemiId(id){
        let index = this.listIdEnemi.indexOf(id);
        if (index !== -1) {
            this.listIdEnemi.splice(index, 1);
        }
        console.log(this.listIdEnemi);
    },
    onDestroy() {
        Emitter.instance.removeEvent(EventCode.KILL_ENEMI, this._onkillEnemiById);
        Emitter.instance.removeEvent(EventCode.HIT_ENEMI, this._onHitEnemi);
        Emitter.instance.removeEvent(EventCode.DIE_ENEMI, this._onRemoveEnemiId);
    }
});
