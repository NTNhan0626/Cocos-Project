cc.Class({
    extends: cc.Component,

    properties: {
        spineController :{
            type:cc.Node,
            default:null
        },
        button: {
            type: cc.Prefab,
            default: null
        },
    },
    setButtonGridData(listAnimationName) {
        listAnimationName.forEach((animationName,index) => {
            let button = cc.instantiate(this.button);
            this.node.addChild(button);

            this.setClickEvent(button,index,animationName);
        });
    },
    show(listAnimationName) {
        let buttons = this.node.children;

        buttons.forEach((button, index) => {
            let animationName = listAnimationName[index]
            let background = button.getChildByName("Background");
            let label = background.getChildByName("Label");
            label.getComponent(cc.Label).string = animationName;
            
        });
    },
    setClickEvent(button, track,animationName) {
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.spineController;
        clickEventHandler.component = "SpineController";
        clickEventHandler.handler = "playAnimation"
        clickEventHandler.customEventData = track+","+animationName;
        button.getComponent(cc.Button).clickEvents.push(clickEventHandler);
    }


});
