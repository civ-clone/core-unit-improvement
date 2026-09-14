"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.AvailableUnitImprovementRegistry = void 0;
const ConstructorRegistry_1 = require("@civ-clone/core-registry/ConstructorRegistry");
const UnitImprovement_1 = require("./UnitImprovement");
/**
 * The unit improvement *classes* a ruleset offers — `Fortified`, `Veteran` —
 * as `AvailableTileImprovementRegistry` does for tile improvements.
 *
 * `UnitImprovementRegistry` holds the ones a unit has *acquired*: instances,
 * per unit. The classes were reachable only through the rules that grant them,
 * so nothing could enumerate them, and a save recording `Fortified` by name had
 * no way to resolve it.
 */
class AvailableUnitImprovementRegistry extends ConstructorRegistry_1.ConstructorRegistry {
    constructor() {
        super(UnitImprovement_1.default);
    }
}
exports.AvailableUnitImprovementRegistry = AvailableUnitImprovementRegistry;
exports.instance = new AvailableUnitImprovementRegistry();
exports.default = AvailableUnitImprovementRegistry;
//# sourceMappingURL=AvailableUnitImprovementRegistry.js.map