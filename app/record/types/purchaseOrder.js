"use strict";

const Record = require("./common/record");

class PurchaseOrder extends Record {

    constructor() {
        super();
        this._type = "tranPurch";
        this._name = "PurchaseOrder";
    }
}

module.exports = PurchaseOrder;
