import { useContext } from "react";
import { SnapshotDAO } from "../api/SnapshotDAO";
import { AppContext } from "../context/AppContext";

export const useRestoreSnapshot = () => {
  const context = useContext(AppContext);

  const restoreSnapshot = async () => {
    const data = await SnapshotDAO.restoreSnapshot();
    context.beverages.setDataObjects(data[0]);
    context.consumptions.setDataObjects(data[1]);
  };

  return restoreSnapshot;
};
