cc.Class({
    extends: cc.Component,

    properties: {
        username: {
            type: cc.Label,
            default: null
        },
        power: {
            type: cc.Label,
            default: null
        },
        iconTop1: {
            type: cc.SpriteFrame,
            default: null
        },
        iconTop2: {
            type: cc.SpriteFrame,
            default: null
        },
        iconTop3: {
            type: cc.SpriteFrame,
            default: null
        },
        iconRemainTop: {
            type: cc.SpriteFrame,
            default: null
        },
    },

    init(data) {
        let topRank = this.node.getChildByName("Toprank");
        const sprite = topRank.getComponent(cc.Sprite);
        if (data.top === 1) {
            sprite.spriteFrame = this.iconTop1;
        } else if (data.top === 2) {
            sprite.spriteFrame = this.iconTop2;
        } else if (data.top === 3) {
            sprite.spriteFrame = this.iconTop3;
        } else {
            sprite.spriteFrame = this.iconRemainTop;
        }
        const label = topRank.getChildByName("Label");
        label.getComponent(cc.Label).string = data.top.toString();

        this.username.string = data.name;
        this.power.string = data.power.toString();
    }
});
