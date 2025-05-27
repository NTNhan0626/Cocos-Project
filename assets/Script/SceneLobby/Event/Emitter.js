const EventEmitter = require('events');
class Emitter {
    constructor(){
        this.emitter = new EventEmitter();
        this.emitter.setMaxListeners(100);
    }
    emit(...args){
        this.emitter.emit(...args);
    }
    registerEvent(event,listener){
        this.emitter.on(event,listener);
    }
    registerOne(event,listener){
        this.emitter.once(event,listener);
    }
    removeEvent(event,listener){
        this.emitter.removeListener(event,listener);
    }
    destroy(){
        this.emitter.removeAllListeners();
        this.emitter = null;
        Emitter.instance = null;
    }    
}
Emitter.instance = new Emitter();
module.exports = Emitter;