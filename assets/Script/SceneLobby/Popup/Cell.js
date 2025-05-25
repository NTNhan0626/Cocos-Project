cc.Class({
    extends: cc.Component,

    properties: {
       username:{
        type:cc.Label,
        default:null
       },
       power:{
        type:cc.Label,
        default:null
       }
    },

    init(data){
        this.username.string = data.name;
        this.power.string = data.power.toString();
    }
});
