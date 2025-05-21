

cc.Class({
    extends: cc.Component,

    properties: {
        soundBGM: {
            type: cc.AudioClip,
            default: null
        },
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

    playBGM(){
        console.log("play BGM");
        //this.current = cc.audioEngine.play(this.soundBGM, false, 0.2);
    },
    playSoundClick(){
        console.log("play after click");
        cc.audioEngine.play(this.soundClick, false, 1);
    }

    // update (dt) {},
});
