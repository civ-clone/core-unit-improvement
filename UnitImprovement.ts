import Unit from '@civ-clone/core-unit/Unit';
import DataObject, {
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';

export interface IUnitImprovement extends IDataObject {
  unit(): Unit;
}

export class UnitImprovement extends DataObject implements IUnitImprovement {
  #unit: Unit;

  constructor(unit: Unit) {
    super();

    this.#unit = unit;
  }

  unit(): Unit {
    return this.#unit;
  }
}

export default UnitImprovement;
