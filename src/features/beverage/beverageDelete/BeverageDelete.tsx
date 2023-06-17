import { useId, useMemo, useRef } from "react";
import { Icon } from "../../../components/icon/Icon";
import { useTranslation } from "../../../hooks/useTranslation";
import { IconType } from "../../../types/IconType";
import { IBeverageDeleteProps } from "./IBeverageDeleteProps";

export const BeverageDelete: React.FC<IBeverageDeleteProps> = (props) => {
  const selectId = useId();
  const select = useRef<HTMLSelectElement>(null);
  const { t } = useTranslation();

  const options = useMemo(() => {
    return (
      <>
        <option key={props.beverage.id} id={props.beverage.id}>
          {t.beverage}
        </option>
        {props.beverage.volumes.map((volume) => (
          <option key={volume.id} id={volume.id}>
            {volume.size}
          </option>
        ))}
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.beverage.id,
    props.beverage.volumes.length,
    props.beverage.volumes,
    t.beverage,
  ]);

  return (
    <>
      <select name={selectId} id={selectId} ref={select}>
        {options}
      </select>
      <Icon
        iconType={IconType.DELETE}
        onClick={() => {
          const option = select.current?.selectedOptions[0];
          if (option) {
            props.onDelete?.(option.id);
          }
        }}
      />
    </>
  );
};
