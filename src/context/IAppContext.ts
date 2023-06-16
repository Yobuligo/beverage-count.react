import { IBeverage } from "../model/IBeverage";
import { IConsumption } from "../model/IConsumption";
import { IDataAccessObject } from "../types/IDataAccessObject";

export interface IAppContext {
  beverages: IDataAccessObject<IBeverage>;
  consumptions: IDataAccessObject<IConsumption>;
}
