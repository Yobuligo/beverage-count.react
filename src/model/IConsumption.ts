import { IHaveId } from "../types/IHaveId";

export interface IConsumption extends IHaveId {
  createAt: string;
  volumeId: string;
}
