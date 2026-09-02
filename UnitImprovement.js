"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitImprovement = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
class UnitImprovement extends DataObject_1.default {
    constructor(unit) {
        super();
        this._unit = unit;
    }
    unit() {
        return this._unit;
    }
}
exports.UnitImprovement = UnitImprovement;
exports.default = UnitImprovement;
//# sourceMappingURL=UnitImprovement.js.map