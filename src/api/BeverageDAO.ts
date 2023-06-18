import { IBeverage } from "../model/IBeverage";
import { LocalStorageDAO } from "./LocalStorageDAO";
import { SnapshotDAO } from "./SnapshotDAO";

class BeverageDAODefault extends LocalStorageDAO<IBeverage> {}
export const BeverageDAO = new BeverageDAODefault(async () => {
  SnapshotDAO.createSnapshot();
});
