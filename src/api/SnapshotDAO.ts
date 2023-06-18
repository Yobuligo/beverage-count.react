import { IBeverage } from "../model/IBeverage";
import { IConsumption } from "../model/IConsumption";
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

  findAllSorted(): Promise<ISnapshot[]> {
    return new Promise(async (resolve) => {
      const snapshots = await SnapshotDAO.findAll();
      snapshots.sort((left, right) => {
        if (left < right) {
          return -1;
        }

        if (left > right) {
          return 1;
        }

        return 0;
      });
      resolve(snapshots);
    });
  }

  restoreSnapshot(): Promise<[IBeverage[], IConsumption[]]> {
    return new Promise(async (resolve, reject) => {
      const snapshots = await this.findAllSorted();
      if (snapshots.length === 0) {
        reject("No snapshots found");
        return;
      }

      // restore snapshots, beverages and consumptions by deleting last
      const lastSnapshot = snapshots[0];
      snapshots.splice(0, 1);
      await Promise.all([
        this.restore(snapshots),
        BeverageDAO.restore(lastSnapshot.beverages),
        ConsumptionDAO.restore(lastSnapshot.consumptions),
      ]);

      // return data of last snapshot
      resolve([lastSnapshot.beverages, lastSnapshot.consumptions]);
    });
  }
}
export const SnapshotDAO = new SnapshotDefaultDAO(undefined);
