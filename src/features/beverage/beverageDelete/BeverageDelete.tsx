import { useContext, useId, useMemo, useRef } from "react";
import { Icon } from "../../../components/icon/Icon";
import { AppContext } from "../../../context/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { IconType } from "../../../types/IconType";
import styles from "./BeverageDelete.module.css";
import { IBeverageDeleteProps } from "./IBeverageDeleteProps";

export const BeverageDelete: React.FC<IBeverageDeleteProps> = (props) => {
  const selectId = useId();
  const select = useRef<HTMLSelectElement>(null);
  const { t } = useTranslation();
  const context = useContext(AppContext);

  const options = useMemo(() => {
    return (
      <>
        <option key={props.beverage.id} id={props.beverage.id}>
          {props.beverage.title}
        </option>
        {context.volumes
          .findByFilter((volume) => volume.beverageId === props.beverage.id)
          .map((volume) => (
            <option
              key={volume.id}
              id={volume.id}
            >{`${volume.size} ${t.beverageUnitMl}`}</option>
          ))}
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.beverage.id,
    props.beverage.title,
    context.volumes.dataObjects.length,
    t.beverageUnitMl,
  ]);

  const onDelete = () => {
    const option = select.current?.selectedOptions[0];
    if (option) {
      props.onDelete?.(option.id);
    }
  };

  return (
    <div className={styles.beverageDelete}>
      <select name={selectId} id={selectId} ref={select}>
        {options}
      </select>
      <Icon iconType={IconType.DELETE} onClick={onDelete} />
    </div>
  );
};
