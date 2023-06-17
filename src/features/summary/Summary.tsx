import { useContext, useMemo } from "react";
import { Card } from "../../components/card/Card";
import { AppContext } from "../../context/AppContext";
import { useTranslation } from "../../hooks/useTranslation";
import { IVolume } from "../../model/IVolume";
import { SummaryItem } from "./SummaryItem";

export const Summary: React.FC = () => {
  const { t } = useTranslation();
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

    const result: { date: string; consumption: number }[] = [];
    consumptions.forEach((consumption, date) => {
      result.push({ date, consumption });
    });
    result.sort((left, right) => {
      if (left.date > right.date) {
        return -1;
      }
      if (left.date < right.date) {
        return 1;
      }
      return 0;
    });
    return result;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.consumptions.dataObjects, volumes.length]);

  const items = consumptions.map((value) => (
    <SummaryItem
      key={value.date}
      date={value.date}
      consumption={value.consumption}
    />
  ));

  return (
    <Card>
      {t.summary}
      {items}
    </Card>
  );
};
