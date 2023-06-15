import { IConsumption } from "../../../model/IConsumption";
import { IVolume } from "../../../model/IVolume";

export interface IVolumeCardListProps {
  volumes: IVolume[];
  onAddConsumption: (volume: IVolume, consumption: IConsumption) => void;
}
