import { VolumeCard } from "../card/VolumeCard";
import { IVolumeCardListProps } from "./IVolumeCardListProps";
import styles from "./VolumeCardList.module.css";

export const VolumeCardList: React.FC<IVolumeCardListProps> = (props) => {
  const items = props.volumes.map((volume) => (
    <div key={volume.id} className={styles.volumeCardListItem}>
      <VolumeCard volume={volume} />
    </div>
  ));
  return <div className={styles.volumeCardList}>{items}</div>;
};
