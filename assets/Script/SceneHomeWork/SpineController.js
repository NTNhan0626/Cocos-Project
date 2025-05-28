cc.Class({
    extends: cc.Component,

    properties: {
        spine: {
            type: sp.Skeleton,
            default: null
        },
        buttonGrid: {
            type: require('ButtonGridController'),
            default: null
        }
    },

    onLoad() {
        this.init();
    },
    init() {
        this.listAnimation = this.spine.skeletonData._skeletonCache.animations;
        this.listAnimationName = this.listAnimation.map(animation => animation.name);
        this.buttonGrid.setButtonGridData(this.listAnimationName);
        this.buttonGrid.show(this.listAnimationName);
        this.enable = false;
    },
    playAnimation(event,data) {
        const [track,animationName] = data.split(",");
        console.log(track);
        this.spine.setAnimation(0, animationName, true);
    },
    
});
