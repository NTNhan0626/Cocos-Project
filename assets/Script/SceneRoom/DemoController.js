
cc.Class({
    extends: cc.Component,

    properties: {

        demoLabel: {
            default: null,
            type: cc.Node
        },
        demoSprite: {
            default: null,
            type: cc.Node
        }
    },

    onLoad() {
    },

    init() {
        this.demoLabel.active = false;
        this.demoSprite.active = false;
        this.demoAudio.active = false;
    },

    start() {
        this.init();
    },

    onButtonClick(event, data) {
        console.log(data);
        console.log(event.target.name)
        if (data === "lable") {
            this.node.active = false;
            this.demoLabel.active = true;
        } else if (data === "sprite") {
            this.node.active = false;
            this.demoSprite.active = true;
        } else {
            this.node.active = false;
            this.demoAudio.active = true;
        }
    }

});
