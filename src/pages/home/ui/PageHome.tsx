import { FC } from "react";
import Promo from "./promo/Promo";
import Passive from "./passive/Passive";
import Public from "./public/ui/Public";
import clsx from "clsx";
import style from "./PageHome.module.scss";

const PageHome: FC = () => {
  return (
    <>
      <Promo />;
      <div className={clsx(style.content)}>
        <Passive />
        <Public />
      </div>
    </>
  );
};
export default PageHome;
