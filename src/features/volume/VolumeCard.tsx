import { IVolumeCardProps } from "./IVolumeCardProps";

export const VolumeCard: React.FC<IVolumeCardProps> = (props) => {
  return (
    <>
      <button>{props.volume.size} ml</button>
    </>
  );
};
