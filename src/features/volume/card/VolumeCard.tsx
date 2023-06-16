import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { IVolumeCardProps } from "./IVolumeCardProps";

export const VolumeCard: React.FC<IVolumeCardProps> = (props) => {
  const context = useContext(AppContext);

  const onAddConsumption = () =>
    context.consumptions.onAdd({
      createAt: new Date(),
      id: crypto.randomUUID(),
      volumeId: props.volume.id,
    });

  return (
    <>
      <button onClick={onAddConsumption}>{props.volume.size} ml</button>
    </>
  );
};
