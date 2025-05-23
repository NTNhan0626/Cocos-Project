cc.Class({
    extends: cc.Component,
    properties: {
        label:{
            default:null,
            type:cc.Label
        },
        boldFont: {
            default: null,
            type: cc.Font
        }
    },

    onLoad () {
        this.label.string="Trong Nhan"
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
});
