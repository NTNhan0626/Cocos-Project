// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        demoLabel:{
            default:null,
            type: cc.Node
        },
        demoSprite:{
            default:null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    }
    ,
    init(){
        this.demoLabel.active = false;
        this.demoSprite.active = false;
        this.demoAudio.active = false;
    },

    start () {
        this.init();
    },

    // update (dt) {},
    onButtonClick(event,data){
        console.log(data);
        console.log(event.target.name)
        if(data==="lable"){
            this.node.active = false;
            this.demoLabel.active=true;
        }else if(data === "sprite"){
            this.node.active = false;
            this.demoSprite.active = true;
        }else{
            this.node.active = false;
            this.demoAudio.active = true;
        }
    }
    
});
