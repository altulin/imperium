import clsx from "clsx";
import { FC } from "react";
import style from "./PromoComponent.module.scss";
import { IPromoComponent } from "../api/types";
import { Title } from "@/widgets/title";
import Info from "./Info";
import SubTitle from "./SubTitle";

const PromoComponent: FC<IPromoComponent> = (props) => {
  const { className, title, id, info, subtitle } = props;

  console.log(props);

  return (
    <section id={id} className={clsx(style.component, className && className)}>
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default PromoComponent;
