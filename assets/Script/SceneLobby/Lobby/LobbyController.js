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
    },
    showRank(){
        this.popupController.showPopupRank();
    }


});
