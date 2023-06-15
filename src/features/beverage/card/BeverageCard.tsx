import { useContext } from "react";
import { Card } from "../../../components/card/Card";
import { InputButton } from "../../../components/inputButton/InputButton";
import { AppContext } from "../../../context/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { VolumeCard } from "../../volume/VolumeCard";
import { IBeverageCardProps } from "./IBeverageCardProps";

export const BeverageCard: React.FC<IBeverageCardProps> = (props) => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  const items = props.beverage.volumes.map((volume) => (
    <VolumeCard volume={volume} />
  ));

  const onAddVolume = (size: number): void => {
    props.beverage.volumes.push({
      id: crypto.randomUUID(),
      size,
      consumptions: [],
    });
    context.beverages.onUpdate(props.beverage);
  };

  return (
    <Card>
      <div>{props.beverage.title}</div>
      <div>{items}</div>
      <InputButton
        caption="+"
        initialValue={0}
        placeholder={t.beverageVolume}
        onClick={onAddVolume}
      />
    </Card>
  );
};
