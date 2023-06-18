import { ISnapshot } from "../model/ISnapshot";
import { BeverageDAO } from "./BeverageDAO";
import { ConsumptionDAO } from "./ConsumptionDAO";
import { LocalStorageDAO } from "./LocalStorageDAO";

class SnapshotDefaultDAO extends LocalStorageDAO<ISnapshot> {
  createSnapshot(): Promise<boolean> {
    return new Promise(async (resolve) => {
      const data = await Promise.all([
        BeverageDAO.findAll(),
        ConsumptionDAO.findAll(),
      ]);

      const snapshot = SnapshotDAO.create({
        beverages: data[0],
        consumptions: data[1],
        createdAt: new Date().toISOString(),
      });
      const result = await SnapshotDAO.add(snapshot);
      resolve(result);
    });
  }
}
export const SnapshotDAO = new SnapshotDefaultDAO(false);
