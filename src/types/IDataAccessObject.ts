export interface IDataAccessObject<T> {
  readonly dataObjects: T[];
  onAdd(dataObject: T): void;
  onDelete(dataObject: T): void;
  onUpdate(dataObject: T): void;
}
