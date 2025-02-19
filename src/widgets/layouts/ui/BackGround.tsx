import clsx from "clsx";
import { FC } from "react";
import style from "./BaseLayout.module.scss";
import bg from "@/shared/images/bg/bg.png";
import bgWebp from "@/shared/images/bg/bg.webp";

const BackGround: FC = () => {
  return (
    <div className={clsx(style.bg)}>
      <picture>
        {/* <source
          media="(max-width: 768px)"
          type="image/png"
          srcSet="/img/location-768.png"
        /> */}
        <source type="image/webp" srcSet={bgWebp} />
        <img
          className={clsx(style.bg__img)}
          src={bg}
          alt="location"
          width="1920"
          height="1452"
        />
      </picture>
    </div>
  );
};
export default BackGround;
