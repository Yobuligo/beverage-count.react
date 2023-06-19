import { useContext, useMemo } from "react";
import { Card } from "../../components/card/Card";
import { AppContext } from "../../context/AppContext";
import { useTranslation } from "../../hooks/useTranslation";
import styles from "./Summary.module.css";
import { SummaryItem } from "./SummaryItem";

export const Summary: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  const consumptions = useMemo(() => {
    const consumptions = new Map<string, number>();
    context.consumptions.dataObjects.forEach((consumption) => {
      const volume = context.volumes.dataObjects.find(
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
  }, [context.consumptions.dataObjects.length, context.volumes.dataObjects.length]);

  const items = consumptions.map((value) => (
    <SummaryItem
      key={value.date}
      date={value.date}
      consumption={value.consumption}
    />
  ));

  return (
    <Card className={styles.summary}>
      <h3>{t.summary}</h3>
      {items}
    </Card>
  );
};
