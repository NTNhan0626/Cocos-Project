
const Emitter = require('Emitter');
const EventCode = require('EventCode');

cc.Class({
    extends: cc.Component,

    properties: {
        positionStartY: {
            type: [cc.Integer],
            default: []
        },

    },
    onLoad(){
        this.init();
        this.registerEvents();
    },
    init() {
        this._onChangePosition = this.changePosition.bind(this);
        this._onShort = this.short.bind(this);
        this.positionStartY = [50,240,430];
        this.node.y = this.positionStartY[1];
        this.anim = this.node.getComponent(sp.Skeleton);
        this.anim.setAnimation(0,"idle",true);

    },
    changePosition(event,data){
        let currentPosition = this.node.getPosition();
        let index = this.positionStartY.indexOf(Math.round(currentPosition.y));
        let length = this.positionStartY.length;
        let newPositionY = 0;
        if(data === "Up"){
            if(index === length-1){
                return;
            }else{
                index ++;
            }
        }else{
            if(index === 0){
                return;
            }else{
                index --;
            }
        }
        newPositionY = this.positionStartY[index];
        cc.tween(this.node)
            .to(0.1,{y:newPositionY},{easing:'sineInOut'})
            .call(()=>{
                Emitter.instance.emit(EventCode.CHANGE_POSITION)
            })
            .start()
    },
    short() {
        this.anim.setAnimation(1, "shoot", false);
    },
    registerEvents() {
        Emitter.instance.registerEvent(EventCode.CLICK_BUTTON, this._onChangePosition);
        Emitter.instance.registerEvent(EventCode.SHORT, this._onShort);

    },
    onDestroy() {
        Emitter.instance.removeEvent(EventCode.CLICK_BUTTON, this._onChangePosition);
        Emitter.instance.removeEvent(EventCode.SHORT, this._onShort);

    }


});
