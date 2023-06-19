import { Id } from "../types/EntityTypes";
import { IHaveId } from "../types/IHaveId";

export interface IVolume extends IHaveId {
  beverageId: Id,
  size: number;
}
