cc.Class({
    extends: cc.Component,

    properties: {
       popupController:{
        type:require('PopupController'),
        default:null
       },

      

    },
    onLoad(){
        
    },
   
    showSetting(){
        this.popupController.showPopupSetting();
    },
    showRank(){
        this.popupController.showPopupRank();
    }


});
