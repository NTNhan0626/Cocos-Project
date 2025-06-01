const Emitter = require('Emitter');
const EventCode = require('EventCode');

cc.Class({
    extends: cc.Component,

    properties: {
        popupSetting: {
            type: require('PopupItem'),
            default: null
        },
        popupRank: {
            type: require('PopupItem'),
            default: null
        },
        scrollView: cc.ScrollView,
    },
    onLoad() {
        this.init();
        this.registerEvents();
    },
    init() {
        this._onShowPopupSetting = this.showPopupSetting.bind(this);
        this._onShowPopupRank = this.showPopupRank.bind(this);
    },
    registerEvents() {
        Emitter.instance.registerEvent(EventCode.SHOW_SETTING, this._onShowPopupSetting);
        Emitter.instance.registerEvent(EventCode.SHOW_RANK, this._onShowPopupRank);
    },
    showPopupSetting() {
        this.popupSetting.show();
        this.hidePopupRank();
    },
    showPopupRank() {
        this.scrollView.scrollToTop(0);
        this.popupRank.show();
        this.hidePopupSetting();
    },
    hidePopupSetting() {
        this.popupSetting.hide();
    },
    hidePopupRank() {
        this.popupRank.hide();
    },
    onDestroy() {
        Emitter.instance.removeEvent(EventCode.SHOW_SETTING, this._onShowPopupSetting);
        Emitter.instance.removeEvent(EventCode.SHOW_RANK, this._onShowPopupRank);
    }
});
