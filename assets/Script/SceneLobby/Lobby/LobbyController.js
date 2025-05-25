cc.Class({
    extends: cc.Component,

    properties: {
       popupController:{
        type:require('PopupController'),
        default:null
       },
    },
    showSetting(){
        this.popupController.showPopupSetting();
        this.popupController.hidePopupRank();
    },
    showRank(){
        this.popupController.showPopupRank();
        this.popupController.hidePopupSetting();
    }
});
