import { Icon } from "../../components/icon/Icon";
import { IconType } from "../../types/IconType";
import { IUndoButtonProps } from "./IUndoButtonProps";

export const UndoButton: React.FC<IUndoButtonProps> = (props) => {
  return (
    <>
      <Icon iconType={IconType.UNDO} onClick={props.onUndo} />
    </>
  );
};
