import { useContext } from "react";
import { BeverageDAO } from "../../../api/BeverageDAO";
import { Card } from "../../../components/card/Card";
import { InputButton } from "../../../components/inputButton/InputButton";
import { AppContext } from "../../../context/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { VolumeCardList } from "../../volume/list/VolumeCardList";
import { BeverageDelete } from "../beverageDelete/BeverageDelete";
import styles from "./BeverageCard.module.css";
import { IBeverageCardProps } from "./IBeverageCardProps";

export const BeverageCard: React.FC<IBeverageCardProps> = (props) => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  const onAddVolume = (size: number): void => {
    props.beverage.volumes.push({
      id: crypto.randomUUID(),
      size,
    });
    context.beverages.onUpdate(props.beverage);
    BeverageDAO.update(props.beverage);
  };

  return (
    <Card>
      <div>{props.beverage.title}</div>
      <div>
        <VolumeCardList volumes={props.beverage.volumes} />
      </div>
      <div className={styles.beverageCardFooter}>
        <InputButton
          caption="+"
          clearOnClick
          initialValue={0}
          placeholder={t.enterBeverageVolume}
          onSubmit={onAddVolume}
          submitIfEmpty={false}
          submitOnEnter
        />
        <BeverageDelete />
      </div>
    </Card>
  );
};
