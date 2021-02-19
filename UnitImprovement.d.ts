import Unit from '@civ-clone/core-unit/Unit';
import DataObject, {
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
export interface IUnitImprovement extends IDataObject {
  unit(): Unit;
}
export declare class UnitImprovement
  extends DataObject
  implements IUnitImprovement {
  #private;
  constructor(unit: Unit);
  unit(): Unit;
}
export default UnitImprovement;
