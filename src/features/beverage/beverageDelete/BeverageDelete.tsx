import { Icon } from "../../../components/icon/Icon";
import { IconType } from "../../../types/IconType";
import { IBeverageDeleteProps } from "./IBeverageDeleteProps";

export const BeverageDelete: React.FC<IBeverageDeleteProps> = (props) => {
  return <Icon iconType={IconType.DELETE} />;
};
