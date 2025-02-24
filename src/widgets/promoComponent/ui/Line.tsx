import clsx from "clsx";
import { FC } from "react";
import style from "./PromoComponent.module.scss";

const Line: FC = () => {
  return <hr className={clsx(style.line)} />;
};
export default Line;
