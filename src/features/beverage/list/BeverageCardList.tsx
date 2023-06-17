import { useContext } from "react";
import { BeverageDAO } from "../../../api/BeverageDAO";
import { InputButton } from "../../../components/inputButton/InputButton";
import { AppContext } from "../../../context/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { IBeverage } from "../../../model/IBeverage";
import { Summary } from "../../summary/Summary";
import { BeverageCard } from "../card/BeverageCard";
import styles from "./BeverageCardList.module.css";

export const BeverageCardList: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  const items = context.beverages.dataObjects.map((beverage) => (
    <div key={beverage.id} className={styles.beverageCardListItem}>
      <BeverageCard key={beverage.id} beverage={beverage} />
    </div>
  ));

  const onAddBeverage = (title: string): void => {
    const beverage: IBeverage = {
      id: crypto.randomUUID(),
      title,
      volumes: [],
    };
    context.beverages.onAdd(beverage);
    BeverageDAO.add(beverage);
  };

  return (
    <div className={styles.beverageCardList}>
      <InputButton
        caption="+"
        clearOnClick
        initialValue={""}
        placeholder={t.enterBeverageTitle}
        onSubmit={onAddBeverage}
        submitIfEmpty={false}
        submitOnEnter
      />
      {items}
      <div className={styles.beverageCardListSummary}>
        <Summary />
      </div>
    </div>
  );
};
