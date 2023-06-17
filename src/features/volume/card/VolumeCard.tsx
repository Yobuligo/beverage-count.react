import { useContext } from "react";
import { ConsumptionDAO } from "../../../api/ConsumptionDAO";
import { AppContext } from "../../../context/AppContext";
import { IConsumption } from "../../../model/IConsumption";
import { IVolumeCardProps } from "./IVolumeCardProps";

export const VolumeCard: React.FC<IVolumeCardProps> = (props) => {
  const context = useContext(AppContext);

  const onAddConsumption = () => {
    const consumption: IConsumption = {
      createAt: new Date(),
      id: crypto.randomUUID(),
      volumeId: props.volume.id,
    };
    context.consumptions.onAdd(consumption);
    ConsumptionDAO.add(consumption);
  };

  return (
    <>
      <button onClick={onAddConsumption}>{props.volume.size} ml</button>
    </>
  );
};
