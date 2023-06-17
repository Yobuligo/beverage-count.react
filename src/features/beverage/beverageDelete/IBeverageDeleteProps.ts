import { IBeverage } from "../../../model/IBeverage";

export interface IBeverageDeleteProps {
  beverage: IBeverage;
  onDelete?: (id: string) => void;
}
