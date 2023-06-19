import { IVolume } from "../model/IVolume";
import { LocalStorageDAO } from "./LocalStorageDAO";
import { SnapshotDAO } from "./SnapshotDAO";

class VolumeDefaultDAO extends LocalStorageDAO<IVolume> {}
export const VolumeDAO = new VolumeDefaultDAO(async () => {
  SnapshotDAO.createSnapshot();
});
