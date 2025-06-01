
cc.Class({
    extends: cc.Component,

    properties: {
        progressLoading: {
            type: cc.ProgressBar,
            default: null
        },
        lable: {
            type: cc.Label,
            default: null
        }
    },
    onLoad() {
        let nextScene = cc.sys.localStorage.getItem('nextScene') || 'Lobby';
        this.switchScene(nextScene);
        this.loadingLable();
    },
    loadingLable() {
        let dotCount = 0;
        this.schedule(() => {
            dotCount = (dotCount + 1) % 4;
            let dots = ' . '.repeat(dotCount);
            this.lable.string = 'Loading ' + dots;
        }, 0.3)
    },
    switchScene(sceneName) {
        let oldProgress = 0;
        cc.director.preloadScene(sceneName, (completedCount, totalCount) => {
            let progress = completedCount / totalCount;

            progress = progress >= oldProgress ? progress : oldProgress;

            oldProgress = progress;
            this.progressLoading.progress = progress;
            console.log(completedCount / totalCount);
        }, (error) => {
            if (!error) {
                this.unscheduleAllCallbacks();
                cc.director.loadScene(sceneName);
                console.log("load ok", sceneName);
                cc.sys.localStorage.removeItem("nextScene");

            } else {
                cc.log(error);
            }
        })
    }
});
