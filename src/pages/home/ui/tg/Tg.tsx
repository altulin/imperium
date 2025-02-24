import clsx from "clsx";
import { FC } from "react";
import style from "./TgTrading.module.scss";
import { Title } from "@/widgets/title";
import img from "@/shared/images/tg/tg.png";
import imgWebp from "@/shared/images/tg/tg.webp";
import { PressBtn } from "@/widgets/button";
import { listTg } from "./model";
import CardHow from "@/widgets/promoComponent/ui/CardHow";
import { HeaderLinks } from "@/shared/appTypes";

const TgTrading: FC = () => {
  return (
    <section className={clsx(style.component)}>
      <div className={clsx(style.component__inner, "container")}>
        <Title
          className={clsx(style.component__title)}
          label="Telegram трейдинг уже в прошлом"
          text={[
            "Мы не смогли изложить здесь даже половину всех преимуществ нашей платформы,",
            "поэтому просто предлагаем самостоятельно окунуться в будущее трейдинга и пассивного заработка",
          ]}
        />

        <div className={clsx(style.content)}>
          <figure className={clsx(style.content__figure)}>
            <picture>
              <source type="image/webp" srcSet={imgWebp} />
              <img
                className={clsx(style.bg__img)}
                src={img}
                alt="location"
                width="440"
                height="577"
              />
            </picture>
          </figure>

          <div className={clsx(style.content__right)}>
            <ul className={clsx(style.content__list)}>
              {listTg.map((item, i) => (
                <CardHow {...item} id={HeaderLinks.TG} key={i} />
              ))}
            </ul>

            <PressBtn
              label="Зарегистрироваться"
              modifier="default"
              class_name={clsx(style.content__btn)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TgTrading;
