import clsx from "clsx";
import { FC } from "react";
import style from "./Footer.module.scss";
import Logo from "../logo/ui/Logo";
import NavList from "../header/ui/NavList";

const Footer: FC = () => {
  return (
    <footer className={clsx(style.footer)}>
      <div className={clsx(style.footer__inner, "container")}>
        <div className={clsx(style.footer__logo)}>
          <Logo />
          <p className={clsx(style.footer__text)}>
            криптовалютная платформа для управления инвестициями
          </p>
        </div>

        <div className={clsx(style.footer__nav)}>
          <NavList />
          <a href="#" className={clsx(style.footer__policy)}>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
