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
    showPopupSetting() {
        this.popupSetting.show();
    },
    showPopupRank() {
        this.scrollView.scrollToTop(0);
        this.popupRank.show();
    },
    hidePopupSetting() {
        this.popupSetting.hide();
    },
    hidePopupRank() {
        this.popupRank.hide();
    }
});
