"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdditionalData = void 0;
const UnitImprovementRegistry_1 = require("../UnitImprovementRegistry");
const AdditionalData_1 = require("@civ-clone/core-data-object/AdditionalData");
const Unit_1 = require("@civ-clone/core-unit/Unit");
const getAdditionalData = (unitImprovementRegistry = UnitImprovementRegistry_1.instance) => [
    new AdditionalData_1.default(Unit_1.default, 'improvements', (unit) => unitImprovementRegistry.getByUnit(unit)),
];
exports.getAdditionalData = getAdditionalData;
exports.default = exports.getAdditionalData;
//# sourceMappingURL=improvements.js.map