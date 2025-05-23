cc.Class({
    extends: cc.Component,
    properties: {
        soundClick: {
            type: cc.AudioClip,
            default: null
        },
    },

    onLoad () {
        this.playBGM();
    },

    playSoundClick(){
        console.log("play after click");
        cc.audioEngine.play(this.soundClick, false, true);
    }
});
