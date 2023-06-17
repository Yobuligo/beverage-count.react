import { ISummaryItemProps } from "./ISummaryItemProps";

export const SummaryItem: React.FC<ISummaryItemProps> = (props) => {
  return <div>{`${props.date} - ${props.consumption}`}</div>;
};
