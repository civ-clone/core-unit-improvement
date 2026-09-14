import {
  ConstructorRegistry,
  IConstructorRegistry,
} from '@civ-clone/core-registry/ConstructorRegistry';
import UnitImprovement from './UnitImprovement';
export interface IAvailableUnitImprovementRegistry
  extends IConstructorRegistry<UnitImprovement> {}
/**
 * The unit improvement *classes* a ruleset offers — `Fortified`, `Veteran` —
 * as `AvailableTileImprovementRegistry` does for tile improvements.
 *
 * `UnitImprovementRegistry` holds the ones a unit has *acquired*: instances,
 * per unit. The classes were reachable only through the rules that grant them,
 * so nothing could enumerate them, and a save recording `Fortified` by name had
 * no way to resolve it.
 */
export declare class AvailableUnitImprovementRegistry
  extends ConstructorRegistry<UnitImprovement>
  implements IAvailableUnitImprovementRegistry
{
  constructor();
}
export declare const instance: AvailableUnitImprovementRegistry;
export default AvailableUnitImprovementRegistry;
