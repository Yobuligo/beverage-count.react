import { IConsumption } from "../model/IConsumption";
import { LocalStorageDAO } from "./LocalStorageDAO";

class ConsumptionDAODefault extends LocalStorageDAO<IConsumption> {}
export const ConsumptionDAO = new ConsumptionDAODefault();
