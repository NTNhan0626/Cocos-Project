
cc.Class({
    extends: cc.Component,

    properties: {
        progressLoading:{
            type:cc.ProgressBar,
            default:null
        }
    },
    onLoad(){
        this.switchScene("Lobby");
    },
    switchScene(sceneName){
        cc.director.preloadScene(sceneName,(completedCount, totalCount)=>{
            let progress = completedCount/totalCount;
            this.progressLoading.progress = progress;


            console.log(completedCount/totalCount);
        },(onLoaded)=>{
            cc.director.loadScene(sceneName);
            console.log(onLoaded);
        })
    }
});
