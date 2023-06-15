import { IConsumption } from "../../../model/IConsumption";
import { IVolume } from "../../../model/IVolume";

export interface IVolumeCardProps {
  volume: IVolume;
  onAddConsumption: (consumption: IConsumption) => void;
}
