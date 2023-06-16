import { useContext } from "react";
import { InputButton } from "../../../components/inputButton/InputButton";
import { AppContext } from "../../../context/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { Summary } from "../../summary/Summary";
import { BeverageCard } from "../card/BeverageCard";
import styles from "./BeverageCardList.module.css";

export const BeverageCardList: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  const items = context.beverages.dataObjects.map((beverage) => (
    <div className={styles.beverageCardListItem}>
      <BeverageCard key={beverage.id} beverage={beverage} />
    </div>
  ));

  const onAdd = (title: string): void =>
    context.beverages.onAdd({
      id: crypto.randomUUID(),
      title,
      volumes: [],
    });

  return (
    <>
      <InputButton
        caption="+"
        clearOnClick
        initialValue={""}
        placeholder={t.enterBeverageTitle}
        onClick={onAdd}
        triggerOnClickOnEnter
      />
      <Summary />
      {items}
    </>
  );
};
