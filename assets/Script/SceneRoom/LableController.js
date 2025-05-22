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
        label:{
            default:null,
            type:cc.Label
        },
        boldFont: {
            default: null,
            type: cc.Font
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.label.string="Trong Nhan"
    },

    start () {

    },
    resizeLabel(event,data){
        
        console.log(data);
        this.label.fontSize += Number(data);

    },

    toggleBoldFont() {
        if (this.label.font === this.boldFont) {
            this.label.font = null;
            console.log("Đã chuyển về font mặc định");
        } else {
            this.label.font = this.boldFont;
            console.log("Đã chuyển sang font in đậm");
        }
    },
    changeColor(event,color){
        console.log(color);
        if(color === "red"){
            console.log("change to red")
            this.label.node.color = cc.Color.RED;
        }else if(color ==="blue"){
            this.label.node.color = cc.Color.BLUE;
        }else{
            this.label.node.color = cc.Color.GREEN;
        }
    },
    

    backToDemo(){
        const demoLabel = cc.find("Canvas/RoomLayer/DemoLabel")
        demoLabel.active = false;
        const demoController = cc.find("Canvas/RoomLayer/DemoController")
        demoController.active = true;
    }
    // update (dt) {},
});
