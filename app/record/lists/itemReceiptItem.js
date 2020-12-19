"use strict";

const Line = require("./common/line");

class ItemReceiptItem extends Line {

    constructor() {
        super();
        this._type = "tranPurch";
        this._name = "ItemReceiptItem";
        this._listName = "item";
    }

    getNode() {

        const attributes = this._getAttributes();
        const type = this._getSoapType();

        if (!type) {
            throw new Error(`Invalid SOAP type ${type}`);
        }

        const node = {};

        node[type] = {};

        if (attributes) {
            node[type]["$attributes"] = attributes;
        }

        const xml = [];

        this.list.forEach((el) => {
            if (!el._type) {
                el._type = this._type;
            }

            const t = el._getSoapType();
            const node = el.getNode();
            const obj = node[t];
            const a = obj["$attributes"];

            xml.push(`<${t} xsi:type="${a["xsi:type"]}">`);

            for (let name in obj) {
                if (name === "$attributes") {
                    continue;
                }

                const child = obj[name];
                xml.push(`<${name}>${child['$value']}</${name}>`)
            }

            xml.push(`</${t}>`);
        });

        node[type]["$xml"] = xml.join("");

        return node;
    }
}

module.exports = ItemReceiptItem;
