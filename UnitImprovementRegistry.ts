import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import Unit from '@civ-clone/core-unit/Unit';
import UnitImprovement from './UnitImprovement';

export interface IUnitImprovementRegistry
  extends IEntityRegistry<UnitImprovement> {
  getByUnit(unit: Unit): UnitImprovement[];
}

export class UnitImprovementRegistry
  extends EntityRegistry<UnitImprovement>
  implements IUnitImprovementRegistry {
  constructor() {
    super(UnitImprovement);
  }

  getByUnit(unit: Unit): UnitImprovement[] {
    return this.getBy('unit', unit);
  }
}

export const instance: UnitImprovementRegistry = new UnitImprovementRegistry();

export default UnitImprovementRegistry;
