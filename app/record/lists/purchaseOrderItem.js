"use strict";

const Line = require("./common/line");

class PurchaseOrderItem extends Line {

    constructor() {
        super();
        this._type = "tranPurch";
        this._name = "PurchaseOrderItem";
        this._listName = "item";
    }
}

module.exports = PurchaseOrderItem;
