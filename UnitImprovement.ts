import Unit from '@civ-clone/core-unit/Unit';
import DataObject, {
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';

export interface IUnitImprovement extends IDataObject {
  unit(): Unit;
}

export class UnitImprovement extends DataObject implements IUnitImprovement {
  private _unit: Unit;

  constructor(unit: Unit) {
    super();

    this._unit = unit;
  }

  unit(): Unit {
    return this._unit;
  }
}

export default UnitImprovement;
