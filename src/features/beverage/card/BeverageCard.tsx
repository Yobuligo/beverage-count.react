import { InputButton } from "../../../components/inputButton/InputButton";
import { useTranslation } from "../../../hooks/useTranslation";
import { IBeverageCardProps } from "./IBeverageCardProps";

export const BeverageCard: React.FC<IBeverageCardProps> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      {props.beverage.title}
      <InputButton
        caption="+"
        initialValue={0}
        placeholder={t.beverageVolume}
      />
    </>
  );
};
