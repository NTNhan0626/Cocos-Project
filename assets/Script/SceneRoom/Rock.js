
cc.Class({
    extends: cc.Component,
    properties: {

    },
    onCollisionEnter: function (other, self) {
        console.log('on collision enter');
        let gold = 0;
        if (other.node.group === "Dog") {
            gold = 1;
            other.node.getComponent("CharDog").onDie(gold);
        } else if (other.node.group === "Wolf") {
            gold = 2;
            other.node.getComponent("CharWolf").onDie(gold);
        }
    },
    onCollisionStay: function (other, self) {
        console.log('on collision stay');
    },
    onCollisionExit: function (other, self) {
        console.log('on collision exit');
    }
});
