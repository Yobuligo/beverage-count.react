import { useTranslation } from "../../hooks/useTranslation";
import { ISummaryItemProps } from "./ISummaryItemProps";

export const SummaryItem: React.FC<ISummaryItemProps> = (props) => {
  const { t } = useTranslation();
  return (
    <div>{`${props.date} - ${props.consumption} ${t.beverageUnitMl}`}</div>
  );
};
