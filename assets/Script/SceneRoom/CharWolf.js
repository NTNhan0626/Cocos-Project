
cc.Class({
    extends: require('CharItem'),

    properties: {

    },
    onLoad() {
        this.init();
        this.onMove(this.targetPosition);
    },
    init() {
        this._super();
    },
    onMove(targetPosition) {
        this._super(targetPosition);
    },
});
