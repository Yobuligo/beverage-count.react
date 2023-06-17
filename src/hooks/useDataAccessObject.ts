import { useCallback, useState } from "react";
import { IDataAccessObject } from "../types/IDataAccessObject";
import { IHaveId } from "../types/IHaveId";
import { error } from "../utils/error";

export const useDataAccessObject = <T extends IHaveId>(
  initialDataObjects?: T[]
): IDataAccessObject<T> => {
  const [dataObjects, setDataObjects] = useState(initialDataObjects ?? []);

  const onAdd = useCallback((dataObject: T) => {
    setDataObjects((previous) => [...previous, dataObject]);
  }, []);

  const findByIdOrNull = useCallback(
    (id: string) => {
      return dataObjects.find((element) => element.id === id);
    },
    [dataObjects]
  );

  const findById = useCallback(
    (id: string) => {
      return findByIdOrNull(id) ?? error();
    },
    [findByIdOrNull]
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

  return {
    dataObjects,
    findById,
    findByIdOrNull,
    onAdd,
    onDelete,
    onUpdate,
    setDataObjects,
  };
};
