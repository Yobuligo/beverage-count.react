import { IVolumeCardProps } from "./IVolumeCardProps";

export const VolumeCard: React.FC<IVolumeCardProps> = (props) => {
  const onAddConsumption = () =>
    props.onAddConsumption({
      id: crypto.randomUUID(),
      createAt: new Date(),
    });

  return (
    <>
      <button onClick={onAddConsumption}>{props.volume.size} ml</button>
    </>
  );
};
