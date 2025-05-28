const Emitter = require('Emitter');

cc.Class({
    extends: cc.Component,
    properties: {

        soundBGM: {
            type: cc.AudioClip,
            default: null
        },
        soundVFX: {
            type: cc.AudioClip,
            default: null
        },
    },
    onLoad() {
        this.registerEvents();
    },
    registerEvents() {
        Emitter.instance.registerEvent("PlayBGM", this.playBGM.bind(this));
        Emitter.instance.registerEvent("StopBGM", this.stopBGM.bind(this));
        Emitter.instance.registerEvent("SetVolumeBGM", this.setVolumeBGM.bind(this));

        Emitter.instance.registerEvent("SetVolumeVFX", this.setVolumeVFX.bind(this));
        Emitter.instance.registerEvent("PlayVFX", this.playSoundVFX.bind(this));
    },
    playBGM() {
        cc.audioEngine.playMusic(this.soundBGM, true);
    },
    setVolumeBGM(volume) {
        cc.audioEngine.setMusicVolume(volume);
    },
    stopBGM() {
        cc.audioEngine.stopMusic();
    },
    setVolumeVFX(volume) {
        cc.audioEngine.setEffectsVolume(volume);
    },
    playSoundVFX() {
        cc.audioEngine.playEffect(this.soundVFX, false);
    },
});
