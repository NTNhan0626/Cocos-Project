const Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    start() {
        this.onHello();
    },
    onHello() {
        console.log("ban");
        Emitter.instance.emit('HELLO', "hellooooooo");
    },
    onWelcome() {
        Emitter.instance.emit('HELLO', "Welcomeeeee");
    },
});