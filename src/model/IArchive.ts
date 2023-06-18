import { IHaveId } from "../types/IHaveId";
import { IBeverage } from "./IBeverage";
import { IConsumption } from "./IConsumption";

export interface IArchive extends IHaveId {
  createdAt: Date;
  beverages: IBeverage[];
  consumptions: IConsumption[];
}
