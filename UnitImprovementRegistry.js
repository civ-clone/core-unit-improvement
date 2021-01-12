"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.UnitImprovementRegistry = void 0;
const EntityRegistry_1 = require("@civ-clone/core-registry/EntityRegistry");
const UnitImprovement_1 = require("./UnitImprovement");
class UnitImprovementRegistry extends EntityRegistry_1.EntityRegistry {
    constructor() {
        super(UnitImprovement_1.default);
    }
    getByUnit(unit) {
        return this.getBy('unit', unit);
    }
}
exports.UnitImprovementRegistry = UnitImprovementRegistry;
exports.instance = new UnitImprovementRegistry();
exports.default = UnitImprovementRegistry;
//# sourceMappingURL=UnitImprovementRegistry.js.map