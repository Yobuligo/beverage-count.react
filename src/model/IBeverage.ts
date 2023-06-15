import { IHaveId } from "../types/IHaveId";
import { IVolume } from "./IVolume";

export interface IBeverage extends IHaveId {
  title: string;
  volumes: IVolume[];
}
