import { IIconProps } from "./IIconProps";

export const Icon: React.FC<IIconProps> = (props) => {
  return <span className="material-symbols-outlined">{props.iconType}</span>;
};
