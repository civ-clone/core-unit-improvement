import {
  UnitImprovementRegistry,
  instance as unitImprovementRegistryInstance,
} from '../UnitImprovementRegistry';
import AdditionalData from '@civ-clone/core-data-object/AdditionalData';
import Unit from '@civ-clone/core-unit/Unit';

export const getAdditionalData = (
  unitImprovementRegistry: UnitImprovementRegistry = unitImprovementRegistryInstance
) => [
  new AdditionalData(Unit, 'improvements', (unit: Unit) =>
    unitImprovementRegistry.getByUnit(unit)
  ),
];

export default getAdditionalData;
