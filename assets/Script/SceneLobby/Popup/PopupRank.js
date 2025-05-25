cc.Class({
    extends: require('PopupItem'),

    properties: {
        cell: {
            type: cc.Prefab,
            default: null,
        },
        table: {
            type: cc.Node,
            default: null,
        },
    },
    onLoad() {
        this._super(); 

        this.fakeData = [
            { name: "Nhan", power: 9999999999 },
            { name: "Dai", power: 8888888888 },
            { name: "Bob", power: 7777777777 },
            { name: "Eve", power: 6666666666 },
            { name: "Kai", power: 5555555555 },
            { name: "Luna", power: 4444444444 },
        ];
        this.generateTable(this.fakeData);
    },
    generateTable(dataList) {
        this.table.removeAllChildren();
        dataList.forEach(data => {
            let cell = cc.instantiate(this.cell);
            let cellComponent = cell.getComponent("Cell"); 
            cellComponent.init(data); 
            this.table.addChild(cell);
        });
    },
});
