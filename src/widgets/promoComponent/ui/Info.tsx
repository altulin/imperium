import clsx from "clsx";
import { FC } from "react";
import style from "./PromoComponent.module.scss";
import { IInfo } from "../api/types";
import Line from "./Line";

const Info: FC<IInfo> = (props) => {
  const { title, text, img, className } = props;
  return (
    <li className={clsx(style.component__item, className && className)}>
      <figure className={clsx(style.component__figure)}>
        <img src={img} alt="img" width={320} height={320} />
      </figure>

      <div className={clsx(style.component__info)}>
        <h3 className={clsx(style.component__subtitle)}>{title}</h3>
        <Line />
        <p className={clsx(style.component__text)}>{text}</p>
      </div>
    </li>
  );
};
export default Info;
