import Unit from '@civ-clone/core-unit/Unit';
export interface IUnitImprovement {
  unit(): Unit;
}
export declare class UnitImprovement implements IUnitImprovement {
  #private;
  constructor(unit: Unit);
  unit(): Unit;
}
export default UnitImprovement;
