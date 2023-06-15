import { VolumeCard } from "../card/VolumeCard";
import { IVolumeCardListProps } from "./IVolumeCardListProps";

export const VolumeCardList: React.FC<IVolumeCardListProps> = (props) => {
  const items = props.volumes.map((volume) => <VolumeCard volume={volume} />);
  return <>{items}</>;
};
