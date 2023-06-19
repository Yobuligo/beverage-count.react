import { IHaveId } from "./IHaveId";

export interface IDataAccessObject<T extends IHaveId> {
  readonly dataObjects: T[];
  findByFilter(predicate: (dataObject: T) => boolean): T[];
  findById(id: string): T;
  findByIdOrNull(id: string): T | undefined;
  onAdd(dataObject: T): void;
  onDelete(dataObject: T): void;
  onUpdate(dataObject: T): void;
  setDataObjects(dataObjects: T[]): void;
}
