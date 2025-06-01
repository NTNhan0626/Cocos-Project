const Emitter = require('Emitter');
const EventCode = require('EventCode');

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
        this.enableBGM = true;
        Emitter.instance.emit(EventCode.ENABLE_BGM,this.enableBGM);

        this.sliderSoundBGM.progress = this.volumeDefault;
        this.toggleBGM.target.active = false;
        this.backGroundSliderBGM.width = this.volumeDefault * this.sliderSoundBGM.node.width;

        this.sliderSoundVFX.progress = this.volumeDefault;
        this.toggleVFX.target.active = false;
        this.backGroundSliderVFX.width = this.volumeDefault * this.sliderSoundVFX.node.width;

        const handleNode = this.sliderSoundVFX.handle;
        handleNode.node.on(cc.Node.EventType.TOUCH_END, this.onSliderVFXEnd, this);
        handleNode.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onSliderVFXEnd, this);
    },

    onToggleBGMChanged() {
        if (this.toggleBGM.isChecked) {
            this.toggleBGM.target.active = false;
            this.toggleBGM.checkMark.node.active = true;

            Emitter.instance.emit(EventCode.SET_VOLUME_BGM, this.volumeDefault);
            Emitter.instance.emit(EventCode.ENABLE_BGM,this.enableBGM);
            this.backGroundSliderBGM.width = this.volumeDefault * this.sliderSoundBGM.node.width;
            this.sliderSoundBGM.progress = this.volumeDefault;
        } else {
            this.toggleBGM.target.active = true;
            this.toggleBGM.checkMark.node.active = false;

            Emitter.instance.emit(EventCode.ENABLE_BGM,!this.enableBGM);
            this.backGroundSliderBGM.width = 0;
            this.sliderSoundBGM.progress = 0;
        }
    },

    onSliderBGMChange() {
        let volume = this.sliderSoundBGM.progress;
        this.backGroundSliderBGM.width = volume * this.sliderSoundBGM.node.width;

        Emitter.instance.emit(EventCode.SET_VOLUME_BGM, volume);

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

        Emitter.instance.emit(EventCode.SET_VOLUME_VFX, volume);
        Emitter.instance.emit(EventCode.PLAY_VFX);

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

            Emitter.instance.emit(EventCode.SET_VOLUME_VFX, this.volumeDefault);
            Emitter.instance.emit(EventCode.PLAY_VFX);
            this.backGroundSliderVFX.width = this.volumeDefault * this.sliderSoundVFX.node.width;
            this.sliderSoundVFX.progress = this.volumeDefault;
        } else {
            this.toggleVFX.target.active = true;
            this.toggleVFX.checkMark.node.active = false;

            Emitter.instance.emit(EventCode.SET_VOLUME_VFX, 0);
            this.backGroundSliderVFX.width = 0;
            this.sliderSoundVFX.progress = 0;
        }
    },

    show() {
        this._super();
    }
});
