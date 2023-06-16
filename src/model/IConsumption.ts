import { IHaveId } from "../types/IHaveId";

export interface IConsumption extends IHaveId {
  createAt: Date;
  volumeId: string;
}
