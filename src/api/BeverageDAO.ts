import { IBeverage } from "../model/IBeverage";
import { LocalStorageDAO } from "./LocalStorageDAO";

class BeverageDAODefault extends LocalStorageDAO<IBeverage> {}
export const BeverageDAO = new BeverageDAODefault(true);
