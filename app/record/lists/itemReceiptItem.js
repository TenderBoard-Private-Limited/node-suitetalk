"use strict";

const Line = require("./common/line");

class ItemReceiptItem extends Line {

    constructor() {
        super();
        this._type = "tranPurch";
        this._name = "ItemReceiptItem";
        this._listName = "item";
    }
}

module.exports = ItemReceiptItem;
