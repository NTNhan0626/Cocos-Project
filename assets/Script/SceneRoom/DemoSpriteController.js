cc.Class({
    extends: cc.Component,
    properties: {
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
