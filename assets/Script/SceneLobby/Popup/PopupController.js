const Emitter = require('Emitter');
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
    onLoad(){
        this.registerEvents();
    },
    registerEvents(){
        Emitter.instance.registerEvent("showSetting",()=>{
            this.showPopupSetting();
            this.hidePopupRank();
        });
        Emitter.instance.registerEvent("showRank",()=>{
            this.showPopupRank();
            this.hidePopupSetting();
        });
    },
    showPopupSetting(){
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
