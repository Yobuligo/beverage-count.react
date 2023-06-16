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
  }, [context.beverages.dataObjects]);

  const sum = () => {
    let sum: number = 0;
    context.consumptions.dataObjects.forEach((consumption) => {
      const volume = volumes.find(
        (element) => element.id === consumption.volumeId
      );
      if (!volume) {
        throw new Error();
      }
      sum = sum + volume.size;
    });
    return sum;
  };
  return <>{sum()} ml</>;
};
