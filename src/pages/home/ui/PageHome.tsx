import { FC } from "react";
import Promo from "./promo/Promo";
import Passive from "./passive/Passive";
import Public from "./public/ui/Public";
import clsx from "clsx";
import style from "./PageHome.module.scss";
import TgTrading from "./tg/Tg";

const PageHome: FC = () => {
  return (
    <>
      <Promo />;
      <div className={clsx(style.content)}>
        <Passive />
        <Public />
      </div>
      <TgTrading />
    </>
  );
};
export default PageHome;
