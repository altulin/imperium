import { FC } from "react";
import { ICardHow } from "../api/types";
import clsx from "clsx";
import style from "./PromoComponent.module.scss";
import { SpriteSVG } from "@/shared/ui";
const CardHow: FC<ICardHow> = ({ title, text, idSvg }) => {
  return (
    <div className={clsx(style.card)}>
      <figure
        className={clsx(
          style.card__figure,

          <SpriteSVG icon={`${idSvg}`} />,
        )}
      ></figure>

      <h4 className={clsx(style.card__title)}>{title}</h4>
      <p className={clsx(style.card__text)}>{text}</p>
    </div>
  );
};
export default CardHow;
