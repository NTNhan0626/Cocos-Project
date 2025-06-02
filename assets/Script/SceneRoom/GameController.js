const Emitter = require('Emitter');
const EventCode = require('EventCode');

cc.Class({
    extends: cc.Component,
    properties: {
        gold: {
            type: cc.Label,
            default: null
        },
        dogCount: {
            type: cc.Label,
            default: null
        }
    },
    onLoad() {
        this.init();
        this.regristerEvent();
    },
    init() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = false;
        this.sumGold = 0;
        this.sumDog = 0;
        this.gold.string = "0";
        this.dogCount.string = "0";

    },
    regristerEvent() {
        Emitter.instance.registerEvent(EventCode.UPDATE_GOLD, this.updateGold.bind(this));
    },
    updateGold(gold) {
        this.sumGold += gold;
        this.gold.string = String(this.sumGold);
        this.sumDog++;
        this.dogCount.string = String(this.sumDog);
    },
    onButtonClick(event,data){
        Emitter.instance.emit(EventCode.CLICK_BUTTON,data);
    },
    onDestroy() {
        Emitter.instance.removeEvent(EventCode.UPDATE_GOLD, this.updateGold.bind(this));
    }
    
});
