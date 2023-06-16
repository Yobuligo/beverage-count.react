import { useCallback, useState } from "react";
import { IDataAccessObject } from "../types/IDataAccessObject";
import { IHaveId } from "../types/IHaveId";

export const useDataAccessObject = <T extends IHaveId>(
  initialDataObjects?: T[]
): IDataAccessObject<T> => {
  const [dataObjects, setDataObjects] = useState(initialDataObjects ?? []);

  const onAdd = useCallback((dataObject: T) => {
    setDataObjects((previous) => [...previous, dataObject]);
  }, []);

  const findById = useCallback(
    (id: string) => {
      return dataObjects.find((element) => element.id === id);
    },
    [dataObjects]
  );

  const onDelete = useCallback((dataObject: T) => {
    setDataObjects((previous) => {
      const index = previous.findIndex((element) => element === dataObject);
      previous.splice(index, 1);
      return [...previous];
    });
  }, []);

  const onUpdate = useCallback((dataObject: T) => {
    setDataObjects((previous) => {
      const index = previous.findIndex((element) => element === dataObject);
      previous.splice(index, 1, dataObject);
      return [...previous];
    });
  }, []);

  return { dataObjects, findById, onAdd, onDelete, onUpdate };
};
