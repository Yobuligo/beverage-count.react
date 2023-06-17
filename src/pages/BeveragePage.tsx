import { useContext } from "react";
import { BeverageDAO } from "../api/BeverageDAO";
import { AppContext } from "../context/AppContext";
import { BeverageCardList } from "../features/beverage/list/BeverageCardList";
import { useInitialize } from "../hooks/useInitialize";

export const BeveragePage: React.FC = () => {
  const context = useContext(AppContext);

  useInitialize(async () => {
    const beverages = await BeverageDAO.findAll();
    context.beverages.setDataObjects(beverages);
  });

  return <BeverageCardList />;
};
