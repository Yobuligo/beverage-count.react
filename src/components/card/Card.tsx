import styles from "./Card.module.css";
import { ICardProps } from "./ICardProps";

export const Card: React.FC<ICardProps> = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};
