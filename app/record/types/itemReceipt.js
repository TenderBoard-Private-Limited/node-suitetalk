"use strict";

const Record = require("./common/record");

class ItemReceipt extends Record {

    constructor() {
        super();
        this._type = "tranPurch";
        this._name = "ItemReceipt";
    }
}

module.exports = ItemReceipt;
