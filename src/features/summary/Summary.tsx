import { ReactNode, useContext, useMemo } from "react";
import { AppContext } from "../../context/AppContext";
import { IVolume } from "../../model/IVolume";
import { formatDate } from "../../utils/formatDate";
import { SummaryItem } from "./SummaryItem";

export const Summary: React.FC = () => {
  const context = useContext(AppContext);

  const volumes = useMemo(() => {
    const volumes: IVolume[] = [];
    context.beverages.dataObjects.map((beverage) =>
      volumes.push(...beverage.volumes)
    );
    return volumes;
  }, [context.beverages.dataObjects]);

  const consumptions = useMemo(() => {
    const consumptions = new Map<string, number>();
    context.consumptions.dataObjects.forEach((consumption) => {
      const volume = volumes.find(
        (element) => element.id === consumption.volumeId
      );
      if (volume) {
        const current =
          consumptions.get(formatDate(consumption.createAt.toString())) ?? 0;
        consumptions.set(
          formatDate(consumption.createAt.toString()),
          current + volume.size
        );
      }
    });
    return consumptions;
  }, [context.consumptions.dataObjects, volumes.length]);

  const items = () => {
    let items: ReactNode[] = [];
    consumptions.forEach((consumption, date) => {
      items.push(
        <SummaryItem
          key={date.toString()}
          date={date}
          consumption={consumption}
        />
      );
    });
    return items;
  };

  return <>{items()}</>;
};
