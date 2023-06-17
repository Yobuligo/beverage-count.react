import { useContext } from "react";
import { BeverageDAO } from "../api/BeverageDAO";
import { ConsumptionDAO } from "../api/ConsumptionDAO";
import { AppContext } from "../context/AppContext";
import { BeverageCardList } from "../features/beverage/list/BeverageCardList";
import { useInitialize } from "../hooks/useInitialize";

export const BeveragePage: React.FC = () => {
  const context = useContext(AppContext);

  useInitialize(async () => {
    const data = await Promise.all([
      BeverageDAO.findAll(),
      ConsumptionDAO.findAll(),
    ]);
    context.beverages.setDataObjects(data[0]);
    context.consumptions.setDataObjects(data[1]);
  });

  return <BeverageCardList />;
};
