const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        buttonSetting:{
            type:cc.Button,
            default:null
        },
        buttonRank:{
            type:cc.Button,
            default:null
        },
        buttonSwitchScene:{
            type:cc.Button,
            default:null
        }
    },
    onLoad(){
        this.init();
    },
    init(){
        this.buttonSetting.node.on('click',this.showSetting,this);
        this.buttonRank.node.on('click',this.showRank,this);
    },
    showSetting(){
        Emitter.instance.emit("showSetting");
    },
    showRank(){
        Emitter.instance.emit("showRank");
    },
    switchScene(event,sceneName){
        cc.sys.localStorage.setItem('nextScene',sceneName);
        cc.director.loadScene("Loading");
        
    }
});
