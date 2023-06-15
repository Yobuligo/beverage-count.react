import { IHaveId } from "../types/IHaveId";
import { IConsumption } from "./IConsumption";

export interface IVolume extends IHaveId {
  consumptions: IConsumption[];
  size: number;
}
