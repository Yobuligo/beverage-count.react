import { IConsumption } from "../model/IConsumption";
import { LocalStorageDAO } from "./LocalStorageDAO";
import { SnapshotDAO } from "./SnapshotDAO";

class ConsumptionDAODefault extends LocalStorageDAO<IConsumption> {}
export const ConsumptionDAO = new ConsumptionDAODefault(async () => {
  SnapshotDAO.createSnapshot();
});
