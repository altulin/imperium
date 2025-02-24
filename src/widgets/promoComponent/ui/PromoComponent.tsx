import clsx from "clsx";
import { FC } from "react";
import style from "./PromoComponent.module.scss";
import { IPromoComponent } from "../api/types";
import { Title } from "@/widgets/title";
import Info from "./Info";
import SubTitle from "./SubTitle";
import CardHow from "./CardHow";
import { SpriteSVG } from "@/shared/ui";
import arrow from "@/shared/images/sprite/arrow.svg";

const PromoComponent: FC<IPromoComponent> = (props) => {
  const {
    className: class_name,
    title,
    id,
    info,
    subtitle,
    how: { cardList },
    instruction: { title: instructionTitle },
  } = props;

  return (
    <section
      id={id}
      className={clsx(style.component, class_name && class_name)}
    >
      <div className={clsx(style.component__inner, "container")}>
        <div className={clsx(style.component__block)}>
          <Title
            label={title.label}
            text={title.text}
            className={clsx(style.component__title)}
          />

          <ul className={clsx(style.component__list)}>
            {info &&
              info.map((item, index) => (
                <Info
                  key={index}
                  {...item}
                  className={
                    (index + 1) % 2 === 0 ? style["component__item--right"] : ""
                  }
                />
              ))}
          </ul>

          <div className={clsx(style.how)}>
            <SubTitle label={subtitle} />

            <ul className={clsx(style.how__list)}>
              {cardList &&
                cardList.map((item, index) => {
                  return item.isArrow ? (
                    <SpriteSVG
                      icon={arrow}
                      className={clsx(style.how__arrow)}
                      key={`${index}_1`}
                    />
                  ) : (
                    <CardHow key={index} {...item} />
                  );
                })}
            </ul>
          </div>

          <div className={clsx(style.instruction)}>
            <SubTitle label={instructionTitle} />
            <iframe
              src="https://vk.com/video_ext.php?oid=61404916&id=456239859&hd=2&autoplay=0"
              width="853"
              height="480"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
              style={{ borderRadius: "1.25rem", border: "none", width: "100%" }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PromoComponent;
