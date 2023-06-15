import { InputButton } from "../../../components/InputButton";
import { useTranslation } from "../../../hooks/useTranslation";

export const BeverageCardList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <InputButton
        caption="+"
        initialValue={""}
        placeholder={t.beverageTitle}
      />
    </>
  );
};
