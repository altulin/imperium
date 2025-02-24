import clsx from "clsx";
import { FC } from "react";
import style from "./Promo.module.scss";
import promoImg from "@/shared/images/promo/promo.png";
import promoImg2 from "@/shared/images/promo/promo@2.png";
import promoImgWebp from "@/shared/images/promo/promo.webp";
import promoImgWebp2 from "@/shared/images/promo/promo@2.webp";
import { Title, ITitle } from "@/widgets/title";
import { useIsSmallDevice } from "@/shared/service";
import { defaultText, label, mobileText } from "./model/title";
import { PressBtn } from "@/widgets/button";

const Promo: FC = () => {
  const isTablet = useIsSmallDevice();

  const TitleProps: ITitle = {
    label,
    text: isTablet ? mobileText : defaultText,
  };

  return (
    <section className={clsx(style.promo)}>
      <h1 className={clsx(style.promo__main_title)}>
        Инвестируй с лучшими крипто-трейдерами
      </h1>
      <div className={clsx(style.promo__inner, "container")}>
        <div className={clsx(style.info)}>
          <div className={clsx(style.info__inner)}>
            <Title {...TitleProps} />
            <PressBtn
              label="Создать аккаунт"
              modifier="default"
              class_name={clsx(style.info__btn)}
            />
          </div>
        </div>

        <div className={clsx(style.image)}>
          <figure className={clsx(style.image__figure)}>
            <picture>
              {/* <source
          media="(max-width: 768px)"
          type="image/png"
          srcSet="/img/location-768.png"
        /> */}
              <source
                type="image/webp"
                srcSet={`${promoImgWebp} 1x, ${promoImgWebp2} 2x`}
              />
              <source
                type="image/png"
                srcSet={`${promoImg} 1x, ${promoImg2} 2x`}
              />
              <img
                className={clsx(style.image__img)}
                src={promoImg}
                alt="img"
                width="985"
                height="830"
              />
            </picture>
          </figure>
        </div>
      </div>
    </section>
  );
};
export default Promo;
