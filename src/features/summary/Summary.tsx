import { ReactNode, useContext, useMemo } from "react";
import { Card } from "../../components/card/Card";
import { AppContext } from "../../context/AppContext";
import { IVolume } from "../../model/IVolume";
import { SummaryItem } from "./SummaryItem";
import { useTranslation } from "../../hooks/useTranslation";

export const Summary: React.FC = () => {
  const { t } = useTranslation()
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
        const current = consumptions.get(consumption.createAt) ?? 0;
        consumptions.set(consumption.createAt, current + volume.size);
      }
    });
    return consumptions;
  }, [context.consumptions.dataObjects, volumes.length]);

  const items = () => {
    let items: ReactNode[] = [];
    consumptions.forEach((consumption, date) => {
      items.push(
        <SummaryItem key={date} date={date} consumption={consumption} />
      );
    });
    return items;
  };

  return <Card>{t.summary}{items()}</Card>;
};
