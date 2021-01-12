import Unit from '@civ-clone/core-unit/Unit';

export interface IUnitImprovement {
  unit(): Unit;
}

export class UnitImprovement implements IUnitImprovement {
  #unit: Unit;

  constructor(unit: Unit) {
    this.#unit = unit;
  }

  unit(): Unit {
    return this.#unit;
  }
}

export default UnitImprovement;
