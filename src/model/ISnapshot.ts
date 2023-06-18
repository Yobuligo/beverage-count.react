import { IHaveId } from "../types/IHaveId";
import { IBeverage } from "./IBeverage";
import { IConsumption } from "./IConsumption";

export interface ISnapshot extends IHaveId {
  createdAt: string;
  beverages: IBeverage[];
  consumptions: IConsumption[];
}
