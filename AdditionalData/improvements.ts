import {
  UnitImprovementRegistry,
  instance as unitImprovementRegistryInstance,
} from '../UnitImprovementRegistry';
import AdditionalData from '@civ-clone/core-data-object/AdditionalData';
import Unit from '@civ-clone/core-unit/Unit';
import UnitImprovement from '../UnitImprovement';

export const getAdditionalData: (
  unitImprovementRegistry?: UnitImprovementRegistry
) => AdditionalData[] = (
  unitImprovementRegistry: UnitImprovementRegistry = unitImprovementRegistryInstance
): AdditionalData[] => [
  new AdditionalData(Unit, 'improvements', (unit: Unit): UnitImprovement[] =>
    unitImprovementRegistry.getByUnit(unit)
  ),
];

export default getAdditionalData;
