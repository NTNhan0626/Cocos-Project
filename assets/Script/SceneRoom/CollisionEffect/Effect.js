
const Emitter = require('Emitter');
const EventCode = require('EventCode');
cc.Class({
    extends: cc.Component,

    properties: {

    },
    onLoad() {
        this.init();
        this.registerEvents();
    },
    init() {
        this._onPlayEffect = this.playEffect.bind(this);
        this.node.active = false;
    },
    registerEvents() {
        Emitter.instance.registerEvent(EventCode.PLAYEFFECT, this._onPlayEffect);
    },
    playEffect(woldPosition) {
        this.node.active = true;
        this.node.scale = 0.1;
        this.node.opacity = 255;
        console.log("nhân đc thong tin",woldPosition);
        let localPosition = this.node.parent.convertToNodeSpaceAR(woldPosition);
        console.log("chuyen doi thong tin",localPosition);
        this.node.position = localPosition;
        cc.tween(this.node)
            .to(0.15, { scale: 1.2 })  
            .to(0.1, { scale: 1.4, opacity: 0 }) 
            .call(() => {
                this.node.active = false; 
            })
            .start();
    },
    onDestroy(){
        Emitter.instance.removeEvent(EventCode.PLAYEFFECT, this._onPlayEffect);
    }

});
