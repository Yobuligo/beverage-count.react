import { useContext, useMemo } from "react";
import { AppContext } from "../../context/AppContext";
import { IVolume } from "../../model/IVolume";

export const Summary: React.FC = () => {
  const context = useContext(AppContext);

  const volumes = useMemo(() => {
    const volumes: IVolume[] = [];
    context.beverages.dataObjects.map((beverage) =>
      volumes.push(...beverage.volumes)
    );
    return volumes;
  }, []);

  context.consumptions.dataObjects.forEach((consumption) => {
    const volume = volumes.find((element) => element.id === consumption.volumeId);
  });
  return <>ml</>;
};
