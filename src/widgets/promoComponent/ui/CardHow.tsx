import { FC } from "react";
import { ICardHow } from "../api/types";
import clsx from "clsx";
import style from "./PromoComponent.module.scss";
// import { HeaderLinks } from "@/shared/appTypes";
import { SpriteSVG } from "@/shared/ui";
import { HeaderLinks } from "@/shared/appTypes";

const CardHow: FC<ICardHow> = ({ title, text, svg, id }) => {
  const isTg = id === HeaderLinks.TG;

  return (
    <li className={clsx(style.card, isTg && style["card--tg"])}>
      <figure
        className={clsx(style.card__figure, isTg && style["card__figure--tg"])}
      >
        <span
          className={clsx(
            style.card__circle,
            style["card__circle--blue"],
            isTg && style["card__circle--blue-tg"],
          )}
        ></span>
        <span
          className={clsx(style.card__circle, style["card__circle--red"])}
        ></span>

        <div className={clsx(style.card__icon)}>
          {svg && <SpriteSVG icon={svg} />}
        </div>
      </figure>

      <h4 className={clsx(style.card__title, isTg && style["card__title--tg"])}>
        {title}
      </h4>

      <p className={clsx(style.card__text, isTg && style["card__text--tg"])}>
        {text}
      </p>
    </li>
  );
};
export default CardHow;
