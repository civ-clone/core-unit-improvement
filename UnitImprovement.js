"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _unit;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitImprovement = void 0;
class UnitImprovement {
    constructor(unit) {
        _unit.set(this, void 0);
        __classPrivateFieldSet(this, _unit, unit);
    }
    unit() {
        return __classPrivateFieldGet(this, _unit);
    }
}
exports.UnitImprovement = UnitImprovement;
_unit = new WeakMap();
exports.default = UnitImprovement;
//# sourceMappingURL=UnitImprovement.js.map