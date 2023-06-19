import { IBeverage } from "../model/IBeverage";
import { IConsumption } from "../model/IConsumption";
import { IVolume } from "../model/IVolume";
import { IDataAccessObject } from "../types/IDataAccessObject";

export interface IAppContext {
  beverages: IDataAccessObject<IBeverage>;
  consumptions: IDataAccessObject<IConsumption>;
  volumes: IDataAccessObject<IVolume>;
}
