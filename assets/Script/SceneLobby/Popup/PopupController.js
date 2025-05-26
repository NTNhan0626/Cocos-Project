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
    },
    showPopupSetting(){
        this.popupSetting.show();
    },
    showPopupRank(){
        this.popupRank.show();
    },
    hidePopupSetting(){
        this.popupSetting.hide();
    },
    hidePopupRank(){
        this.popupRank.hide();
    }
});
