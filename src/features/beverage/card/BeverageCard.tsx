import { useContext } from "react";
import { BeverageDAO } from "../../../api/BeverageDAO";
import { ConsumptionDAO } from "../../../api/ConsumptionDAO";
import { Card } from "../../../components/card/Card";
import { InputButton } from "../../../components/inputButton/InputButton";
import { AppContext } from "../../../context/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { IVolume } from "../../../model/IVolume";
import { VolumeCardList } from "../../volume/list/VolumeCardList";
import { BeverageDelete } from "../beverageDelete/BeverageDelete";
import styles from "./BeverageCard.module.css";
import { IBeverageCardProps } from "./IBeverageCardProps";

export const BeverageCard: React.FC<IBeverageCardProps> = (props) => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  const onAddVolume = (size: number): void => {
    let volume = findVolumeBySize(size);
    if (!volume) {
      volume = {
        id: crypto.randomUUID(),
        size,
      };
      props.beverage.volumes.push(volume);
      context.beverages.onUpdate(props.beverage);
      BeverageDAO.update(props.beverage);
    }

    const consumption = ConsumptionDAO.create({
      createAt: new Date().toISOString().split("T")[0],
      volumeId: volume.id,
    });
    context.consumptions.onAdd(consumption);
    ConsumptionDAO.add(consumption);
  };

  const findVolumeBySize = (size: number): IVolume | undefined => {
    for (let i = 0; i < context.beverages.dataObjects.length; i++) {
      for (
        let j = 0;
        j < context.beverages.dataObjects[i].volumes.length;
        j++
      ) {
        if (context.beverages.dataObjects[i].volumes[j].size === size) {
          return context.beverages.dataObjects[i].volumes[j];
        }
      }
    }
    return undefined;
  };

  const onDelete = (id: string) => {
    if (id === props.beverage.id) {
      context.beverages.onDelete(props.beverage);
      BeverageDAO.delete(props.beverage);
    } else {
      const index = props.beverage.volumes.findIndex(
        (element) => element.id === id
      );
      if (index >= 0) {
        props.beverage.volumes.splice(index, 1);
        context.beverages.onUpdate(props.beverage);
        BeverageDAO.update(props.beverage);
      }
    }
  };

  return (
    <Card>
      <h3 className={styles.beverageCardTitle}>{props.beverage.title}</h3>
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
          width={"5rem"}
        />
        <BeverageDelete beverage={props.beverage} onDelete={onDelete} />
      </div>
    </Card>
  );
};
