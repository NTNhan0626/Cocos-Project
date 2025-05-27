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
            { top: 1,name: "Nhan", power: 9999999999 },
            { top: 2,name: "Dai", power: 8888888888 },
            { top: 3,name: "Bob", power: 7777777777 },
            { top: 4,name: "Eve", power: 6666666666 },
            { top: 5,name: "Kai", power: 5555555555 },
            { top: 6,name: "Luna", power: 4444444444 },
            { top: 7,name: "Nhan", power: 9999999999 },
            { top: 8,name: "Dai", power: 8888888888 },
            { top: 9,name: "Bob", power: 7777777777 },
            { top: 10,name: "Eve", power: 6666666666 },
            { top: 11,name: "Kai", power: 5555555555 },
            { top: 12,name: "Luna", power: 4444444444 },
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
