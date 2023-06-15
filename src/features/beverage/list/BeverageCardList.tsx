import { useContext } from "react";
import { InputButton } from "../../../components/inputButton/InputButton";
import { AppContext } from "../../../context/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { BeverageCard } from "../card/BeverageCard";

export const BeverageCardList: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  const items = context.beverages.dataObjects.map((beverage) => (
    <BeverageCard key={beverage.id} beverage={beverage} />
  ));

  const onAdd = (title: string): void =>
    context.beverages.onAdd({
      id: crypto.randomUUID(),
      title,
      volumes: [],
    });

  return (
    <>
      {items}
      <InputButton
        caption="+"
        initialValue={""}
        placeholder={t.beverageTitle}
        onClick={onAdd}
      />
    </>
  );
};
