
const Emitter = require('Emitter');
const EventCode = require('EventCode');
cc.Class({
    extends: require('CharItem'),

    properties: {

    },
    onLoad() {
        this._onCreateEnemi = this.init.bind(this);
        this.registerEvents();
    },
    registerEvents() {
        Emitter.instance.registerEvent(EventCode.CREATE_ENEMI, this._onCreateEnemi);
    },
    onDestroy(){
        Emitter.instance.removeEvent(EventCode.CREATE_ENEMI, this._onCreateEnemi);
    }

});
