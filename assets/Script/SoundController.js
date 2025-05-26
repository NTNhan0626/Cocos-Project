cc.Class({
    extends: cc.Component,
    properties: {
        volumeDefault: {
            type: cc.Float,
            default: 0.3
        },
        soundBGM: {
            type: cc.AudioClip,
            default: null
        },
        toggleBGM: {
            type: cc.Toggle,
            default: null
        },
        sliderSoundBGM: {
            type: cc.Slider,
            default: null
        },
        soundVFX: {
            type: cc.AudioClip,
            default: null
        },
        toggleVFX: {
            type: cc.Toggle,
            default: null
        },
        sliderSoundVFX: {
            type: cc.Slider,
            default: null
        },
    },
    onLoad() {
        this.init();
        this.onSliderBGMChange();
        this.onSliderVFXChange();
        this.playBGM();
    },
    init() {
        this.sliderSoundBGM.progress = this.volumeDefault;
        this.backGroundSliderBGM = this.sliderSoundBGM.node.getChildByName("Background");
        this.toggleBGM.target.active = false;

        this.sliderSoundVFX.progress = this.volumeDefault;
        this.backGroundSliderVFX = this.sliderSoundVFX.node.getChildByName("Background");
        this.toggleVFX.target.active = false;
        const handleNode = this.sliderSoundVFX.handle; 
        handleNode.node.on('touchend', this.onSliderVFXEnd, this);
        handleNode.node.on('touchcancel', this.onSliderVFXEnd, this);

    },
    playBGM() {
        cc.audioEngine.playMusic(this.soundBGM, true);
    },
    onSliderBGMChange() {
        let volume = this.sliderSoundBGM.progress;
        this.backGroundSliderBGM.width = volume * this.sliderSoundBGM.node.width;
        cc.audioEngine.setMusicVolume(volume);

        if (volume === 0) {
            this.toggleBGM.target.active = true;
            this.toggleBGM.checkMark.node.active = false;
        } else if (volume !== 0 && this.toggleBGM.target.active === true) {
            this.toggleBGM.target.active = false;
            this.toggleBGM.checkMark.node.active = true;
        }
    },
    onToggleBGMChanged() {
        if (this.toggleBGM.isChecked) {
            this.toggleBGM.target.active = false;
            this.toggleBGM.checkMark.node.active = true;

            cc.audioEngine.setMusicVolume(this.volumeDefault);
            cc.audioEngine.playMusic(this.soundBGM, true);
            this.backGroundSliderBGM.width = this.volumeDefault * this.sliderSoundBGM.node.width;
            this.sliderSoundBGM.progress = this.volumeDefault;

        } else {
            this.toggleBGM.target.active = true;
            this.toggleBGM.checkMark.node.active = false;

            cc.audioEngine.stopMusic();
            this.backGroundSliderBGM.width = 0;
            this.sliderSoundBGM.progress = 0;
        }
    },
    playSoundVFX() {
        cc.audioEngine.playEffect(this.soundVFX, false);
    },
    onSliderVFXChange() {
        let volume = this.sliderSoundVFX.progress;
        this.backGroundSliderVFX.width = volume * this.sliderSoundVFX.node.width;
    },
    onSliderVFXEnd() {
        let volume = this.sliderSoundVFX.progress;
        cc.audioEngine.setEffectsVolume(volume);
        cc.audioEngine.playEffect(this.soundVFX, false);
        if (volume === 0) {
            this.toggleVFX.target.active = true;
            this.toggleVFX.checkMark.node.active = false;
        } else {
            this.toggleVFX.target.active = false;
            this.toggleVFX.checkMark.node.active = true;
        }
    },
    onToggleVFXChanged() {
        if (this.toggleVFX.isChecked) {
            this.toggleVFX.target.active = false;
            this.toggleVFX.checkMark.node.active = true;

            cc.audioEngine.setEffectsVolume(this.volumeDefault);
            cc.audioEngine.playEffect(this.soundVFX, false);
            this.backGroundSliderVFX.width = this.volumeDefault * this.sliderSoundVFX.node.width;
            this.sliderSoundVFX.progress = this.volumeDefault;
        } else {
            this.toggleVFX.target.active = true;
            this.toggleVFX.checkMark.node.active = false;

            this.backGroundSliderVFX.width = 0;
            this.sliderSoundVFX.progress = 0;
        }
    }
});
