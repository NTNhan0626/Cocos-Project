const Emitter = require('Emitter');

cc.Class({
    extends: require('PopupItem'),
    properties: {
        volumeDefault: {
            type: cc.Float,
            default: 0.3
        },
        toggleBGM: {
            type: cc.Toggle,
            default: null
        },
        sliderSoundBGM: {
            type: cc.Slider,
            default: null
        },
        backGroundSliderBGM: {
            type: cc.Node,
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
        backGroundSliderVFX: {
            type: cc.Node,
            default: null
        }
    },
    onLoad() {
        this._super();
        this.init();
    },
    init() {
        Emitter.instance.emit("PlayBGM");
        this.sliderSoundBGM.progress = this.volumeDefault;
        this.toggleBGM.target.active = false;
        this.backGroundSliderBGM.width = this.volumeDefault * this.sliderSoundBGM.node.width;

        this.sliderSoundVFX.progress = this.volumeDefault;
        this.toggleVFX.target.active = false;
        this.backGroundSliderVFX.width = this.volumeDefault * this.sliderSoundVFX.node.width;
        const handleNode = this.sliderSoundVFX.handle;
        handleNode.node.on(cc.Node.EventType.TOUCH_END, this.onSliderVFXEnd, this);
        handleNode.node.on('touchcancel', this.onSliderVFXEnd, this);

    },
    onToggleBGMChanged() {
        if (this.toggleBGM.isChecked) {
            this.toggleBGM.target.active = false;
            this.toggleBGM.checkMark.node.active = true;

            Emitter.instance.emit("SetVolumeBGM", this.volumeDefault);
            Emitter.instance.emit("PlayBGM");
            this.backGroundSliderBGM.width = this.volumeDefault * this.sliderSoundBGM.node.width;
            this.sliderSoundBGM.progress = this.volumeDefault;
        } else {
            this.toggleBGM.target.active = true;
            this.toggleBGM.checkMark.node.active = false;

            Emitter.instance.emit("StopBGM");
            this.backGroundSliderBGM.width = 0;
            this.sliderSoundBGM.progress = 0;
        }
    },
    onSliderBGMChange() {
        let volume = this.sliderSoundBGM.progress;
        this.backGroundSliderBGM.width = volume * this.sliderSoundBGM.node.width;
        Emitter.instance.emit("SetVolumeBGM", volume);
        if (volume === 0) {
            this.toggleBGM.target.active = true;
            this.toggleBGM.checkMark.node.active = false;
            this.toggleBGM.isChecked = false;
        } else if (volume !== 0 && this.toggleBGM.target.active === true) {
            this.toggleBGM.target.active = false;
            this.toggleBGM.checkMark.node.active = true;
            this.toggleBGM.isChecked = true;
        }
    },
    onSliderVFXChange() {
        let volume = this.sliderSoundVFX.progress;
        this.backGroundSliderVFX.width = volume * this.sliderSoundVFX.node.width;
    },
    onSliderVFXEnd() {
        let volume = this.sliderSoundVFX.progress;

        Emitter.instance.emit("SetVolumeVFX", volume);
        Emitter.instance.emit("PlayVFX");
        if (volume === 0) {
            this.toggleVFX.target.active = true;
            this.toggleVFX.checkMark.node.active = false;
            this.toggleVFX.isChecked = false;
        } else {
            this.toggleVFX.target.active = false;
            this.toggleVFX.checkMark.node.active = true;
            this.toggleVFX.isChecked = true;
        }
    },
    onToggleVFXChanged() {
        if (this.toggleVFX.isChecked) {
            this.toggleVFX.target.active = false;
            this.toggleVFX.checkMark.node.active = true;

            Emitter.instance.emit("SetVolumeVFX", this.volumeDefault);
            Emitter.instance.emit("PlayVFX");
            this.backGroundSliderVFX.width = this.volumeDefault * this.sliderSoundVFX.node.width;
            this.sliderSoundVFX.progress = this.volumeDefault;
        } else {
            this.toggleVFX.target.active = true;
            this.toggleVFX.checkMark.node.active = false;
            Emitter.instance.emit("SetVolumeVFX", 0);
            this.backGroundSliderVFX.width = 0;
            this.sliderSoundVFX.progress = 0;
        }
    },
    show() {
        this._super();
    }
});
