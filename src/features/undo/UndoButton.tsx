import { Icon } from "../../components/icon/Icon";
import { useTranslation } from "../../hooks/useTranslation";
import { IconType } from "../../types/IconType";
import { IUndoButtonProps } from "./IUndoButtonProps";

export const UndoButton: React.FC<IUndoButtonProps> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <Icon iconType={IconType.UNDO} onClick={props.onUndo} />
      {props.showLoadingSpinner && <>{t.undoing}</>}
    </>
  );
};
