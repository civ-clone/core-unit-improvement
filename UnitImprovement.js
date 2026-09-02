"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UnitImprovement_unit;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitImprovement = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
class UnitImprovement extends DataObject_1.default {
    constructor(unit) {
        super();
        _UnitImprovement_unit.set(this, void 0);
        __classPrivateFieldSet(this, _UnitImprovement_unit, unit, "f");
    }
    unit() {
        return __classPrivateFieldGet(this, _UnitImprovement_unit, "f");
    }
}
exports.UnitImprovement = UnitImprovement;
_UnitImprovement_unit = new WeakMap();
exports.default = UnitImprovement;
//# sourceMappingURL=UnitImprovement.js.map