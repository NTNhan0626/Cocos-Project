const Emitter = require('Emitter');
const EventCode = require('EventCode');

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
        this.init();
        this.registerEvents();
    },
    init() {
        this._enableBGM = this.enableBGM.bind(this);
        this._setVolumeBGM = this.setVolumeBGM.bind(this);
        this._setVolumeVFX = this.setVolumeVFX.bind(this);
        this._playSoundVFX = this.playSoundVFX.bind(this);
    },
    registerEvents() {
        Emitter.instance.registerEvent(EventCode.ENABLE_BGM, this._enableBGM);
        Emitter.instance.registerEvent(EventCode.SET_VOLUME_BGM, this._setVolumeBGM);
        Emitter.instance.registerEvent(EventCode.SET_VOLUME_VFX, this._setVolumeVFX);
        Emitter.instance.registerEvent(EventCode.PLAY_VFX, this._playSoundVFX);
    },
    enableBGM(isEnable) {
        if (isEnable) {
            cc.audioEngine.playMusic(this.soundBGM, true);
        } else {
            cc.audioEngine.stopMusic();
        }
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
    onDisable() {
        Emitter.instance.removeEvent(EventCode.ENABLE_BGM, this._enableBGM);
        Emitter.instance.removeEvent(EventCode.SET_VOLUME_BGM, this._setVolumeBGM);
        Emitter.instance.removeEvent(EventCode.SET_VOLUME_VFX, this._setVolumeVFX);
        Emitter.instance.removeEvent(EventCode.PLAY_VFX, this._playSoundVFX);
    }
});
