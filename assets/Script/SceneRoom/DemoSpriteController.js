// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        hero:{
            default: null,
            type:cc.Sprite
        },
        enemy:{
            default: null,
            type:cc.Sprite
        },
        speed:{
            default: Number(200),
            type:cc.Integer
        },
    
        soundBGM:{
            type:cc.AudioClip,
            default:null
        },
        soundClick: {
            type: cc.AudioClip,
            default: null
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.init();
        this.heroStartPosition = this.hero.node.getPosition();
        this.enemyStartPosition = this.enemy.node.getPosition();
        this.isAttack = false;
        this.isReturn = false;
        this.attackTargerPosition = null;
    },
    init(){
        this.hero.node.setPosition(cc.v2(-300, 0));
        this.enemy.node.setPosition(cc.v2(300, 0));
        this.playBGM();
    },
    playBGM(){
        console.log("play BGM");
        this.current = cc.audioEngine.play(this.soundBGM, false, 0.5);
    },
    playSoundClick(){
        console.log("play after click");
        cc.audioEngine.play(this.soundClick, false, 1);
    },
    
    start () {

    },
    
    update (dt) {
        if(this.isAttack){
            if(this.hero.node.x < (this.enemyStartPosition.x - 200)){
                this.hero.node.x += this.speed*dt;
            }else{
                this.isAttack = false;
                this.isReturn = true;
            }
        }else if(this.isReturn){
            if(this.hero.node.x > this.heroStartPosition.x){
                this.hero.node.x -= this.speed*dt;
            }else{
                this.isReturn = false;
            }
        }
    },
    attack(){
        if(!this.isAttack && !this.isReturn ){
            this.isAttack = true;
        }
        
    },
    killEnemy(){
        this.enemy.node.setScale(1.2);
        this.enemy.node.color = cc.Color.RED;
        this.scheduleOnce(()=>{
            this.enemy.node.opacity = 0;
        },1)
    },
    backToDemo(){
        const demoLabel = cc.find("Canvas/RoomLayer/DemoSprite")
        demoLabel.active = false;
        const demoController = cc.find("Canvas/RoomLayer/DemoController")
        demoController.active = true;
    }
});
