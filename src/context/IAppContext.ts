import { IBeverage } from "../model/IBeverage";
import { IDataAccessObject } from "../types/IDataAccessObject";
import { IValue } from "../types/IValue";

export interface IAppContext {
  beverages: IDataAccessObject<IBeverage>;
  totalConsumption: IValue<number>;
}
