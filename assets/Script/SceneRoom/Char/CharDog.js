
const Emitter = require('Emitter');
const EventCode = require('EventCode');
const StateMachine = require('javascript-state-machine');

cc.Class({
    extends: require('CharItem'),

    properties: {

    },
    // onLoad() {
    //     this._onCreateEnemi = this.init.bind(this);
    //     this.registerEvents();
    // },
    // registerEvents() {
    //     Emitter.instance.registerEvent(EventCode.CREATE_ENEMI, this._onCreateEnemi);
    // },
    // onDestroy(){
    //     Emitter.instance.removeEvent(EventCode.CREATE_ENEMI, this._onCreateEnemi);
    // }

});
