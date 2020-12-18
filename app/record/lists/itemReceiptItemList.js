"use strict";

const List = require("./common/list");

class ItemReceiptItemList extends List {

    constructor() {
        super();
        this._type = "tranPurch";
        this._name = "ItemReceiptItemList";
        this._listName = "itemList";
    }
}

module.exports = ItemReceiptItemList;
