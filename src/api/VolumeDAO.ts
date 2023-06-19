import { IVolume } from "../model/IVolume";
import { Id } from "../types/EntityTypes";
import { LocalStorageDAO } from "./LocalStorageDAO";

class VolumeDefaultDAO extends LocalStorageDAO<IVolume> {
  findByBeverageId(beverageId: Id): Promise<IVolume[]> {
    return new Promise((resolve) => {
      resolve(
        this.findByFilter((dataObject) => dataObject.beverageId === beverageId)
      );
    });
  }

  deleteByBeverageId(beverageId: Id): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(
        this.deleteByFilter(
          (dataObject) => dataObject.beverageId === beverageId
        )
      );
    });
  }
}
export const VolumeDAO = new VolumeDefaultDAO();
