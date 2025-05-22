

cc.Class({
    extends: cc.Component,

    properties: {
        
        soundClick: {
            type: cc.AudioClip,
            default: null
        },
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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.playBGM();
    },

    start () {
    
    },


    playSoundClick(){
        console.log("play after click");
        cc.audioEngine.play(this.soundClick, false, true);
    }

    // update (dt) {},
});
