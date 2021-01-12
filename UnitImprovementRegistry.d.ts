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
export declare class UnitImprovementRegistry
  extends EntityRegistry<UnitImprovement>
  implements IUnitImprovementRegistry {
  constructor();
  getByUnit(unit: Unit): UnitImprovement[];
}
export declare const instance: UnitImprovementRegistry;
export default UnitImprovementRegistry;
