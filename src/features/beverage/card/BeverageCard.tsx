import { useContext } from "react";
import { BeverageDAO } from "../../../api/BeverageDAO";
import { ConsumptionDAO } from "../../../api/ConsumptionDAO";
import { VolumeDAO } from "../../../api/VolumeDAO";
import { Card } from "../../../components/card/Card";
import { InputButton } from "../../../components/inputButton/InputButton";
import { AppContext } from "../../../context/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { IVolume } from "../../../model/IVolume";
import { Id } from "../../../types/EntityTypes";
import { VolumeCardList } from "../../volume/list/VolumeCardList";
import { BeverageDelete } from "../beverageDelete/BeverageDelete";
import styles from "./BeverageCard.module.css";
import { IBeverageCardProps } from "./IBeverageCardProps";

export const BeverageCard: React.FC<IBeverageCardProps> = (props) => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  const findVolumeBySize = (size: number): IVolume | undefined => {
    return context.volumes.dataObjects.find(
      (volume) =>
        volume.beverageId === props.beverage.id && volume.size === size
    );
  };

  const onAddVolume = (size: number): void => {
    let volume = findVolumeBySize(size);
    if (!volume) {
      volume = VolumeDAO.create({
        beverageId: props.beverage.id,
        size,
      });
      context.volumes.onAdd(volume);
      VolumeDAO.add(volume);
    }

    const consumption = ConsumptionDAO.create({
      createAt: new Date().toISOString().split("T")[0],
      volumeId: volume.id,
    });
    context.consumptions.onAdd(consumption);
    ConsumptionDAO.add(consumption);
  };

  const onDelete = (id: Id) => {
    if (id === props.beverage.id) {
      // Delete beverages incl. volumes?
      context.beverages.onDelete(props.beverage);
      BeverageDAO.delete(props.beverage);
      VolumeDAO.deleteByBeverageId(props.beverage.id);
    } else {
      // Delete volume of beverage
      const volume = context.volumes.findByIdOrNull(id);
      if (volume) {
        context.volumes.onDelete(volume);
        VolumeDAO.delete(volume);
      }
    }
  };

  const volumes = context.volumes.findByFilter(
    (volume) => volume.beverageId === props.beverage.id
  );

  return (
    <Card className={styles.beverageCard}>
      <h3 className={styles.beverageCardTitle}>{props.beverage.title}</h3>
      <div>
        <VolumeCardList volumes={volumes} />
      </div>
      <div className={styles.beverageCardFooter}>
        <InputButton
          caption="+"
          className={styles.beverageCardInputButton}
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
