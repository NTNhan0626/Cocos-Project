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
        this.sumGold = 0;
        this.sumDog = 0;
        this.gold.string = "0";
        this.dogCount.string = "0";
    },
    regristerEvent() {
        Emitter.instance.registerEvent(EventCode.UPDATEPOINT, this.updatePoint.bind(this));
    },
    updatePoint(gold) {
        this.sumGold += gold;
        this.gold.string = String(this.sumGold);
        this.sumDog++;
        this.dogCount.string = String(this.sumDog);
    },
    onDestroy() {
        Emitter.instance.removeEvent(EventCode.UPDATEPOINT, this.updatePoint.bind(this));
    }
});
