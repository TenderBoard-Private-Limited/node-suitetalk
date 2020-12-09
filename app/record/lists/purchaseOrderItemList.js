"use strict";

const List = require("./common/list");

class PurchaseOrderItemList extends List {

    constructor() {
        super();
        this._type = "tranPurch";
        this._name = "PurchaseOrderItemList";
        this._listName = "itemList";
    }
}

module.exports = PurchaseOrderItemList;
