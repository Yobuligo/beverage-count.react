import { IBeverage } from "../model/IBeverage";
import { readLocalStorage } from "../utils/localStorage/readLocalStorage";
import { writeLocalStorage } from "../utils/localStorage/writeLocalStorage";

export class BeverageDAO {
  static addBeverage(beverage: IBeverage): Promise<boolean> {
    return new Promise((resolve) => {
      const items = readLocalStorage<IBeverage[]>("beverages") ?? [];
      items.push(beverage);
      writeLocalStorage("beverages", JSON.stringify(items));
      resolve(true);
    });
  }
}
