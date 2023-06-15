import { IBeverage } from "../model/IBeverage";
import { IDataAccessObject } from "../types/IDataAccessObject";

export interface IAppContext {
  beverages: IDataAccessObject<IBeverage[]>;
}
