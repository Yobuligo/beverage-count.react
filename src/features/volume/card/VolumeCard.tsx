import { useContext } from "react";
import { ConsumptionDAO } from "../../../api/ConsumptionDAO";
import { AppContext } from "../../../context/AppContext";
import { IVolumeCardProps } from "./IVolumeCardProps";

export const VolumeCard: React.FC<IVolumeCardProps> = (props) => {
  const context = useContext(AppContext);

  const onAddConsumption = () => {
    const consumption = ConsumptionDAO.create({
      createAt: new Date().toISOString().split("T")[0],
      volumeId: props.volume.id,
    });
    context.consumptions.onAdd(consumption);
    ConsumptionDAO.add(consumption);
  };

  return (
    <>
      <button onClick={onAddConsumption}>{props.volume.size} ml</button>
    </>
  );
};
