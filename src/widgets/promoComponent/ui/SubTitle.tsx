import clsx from "clsx";
import { FC } from "react";
import style from "./PromoComponent.module.scss";
import Line from "./Line";

const SubTitle: FC<{ label: string }> = ({ label }) => {
  return (
    <div className={clsx(style.subtitle)}>
      <h3 className={clsx(style.subtitle__label)}>{label}</h3>
      <Line />
    </div>
  );
};
export default SubTitle;
