import { FC, useState } from "react";
import style from "./Header.module.scss";
import clsx from "clsx";
import { links } from "../model";
import { Link } from "react-scroll";
import Burger from "./Burger";
import { useIsSmallDevice } from "@/shared/service";
import CloseBtn from "./CloseBtn";

const NavBar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isTablet = useIsSmallDevice();

  return (
    <div className={clsx(style.nav)}>
      <Burger isOpen={isMenuOpen} setOpen={setIsMenuOpen} />

      <nav
        className={clsx(
          style.nav__inner,
          isTablet && isMenuOpen && style["nav__inner--open"],
        )}
      >
        <CloseBtn setOpen={setIsMenuOpen} />
        <ul className={clsx(style.nav__list)}>
          {links.map((item, i: number) => (
            <li className={clsx(style.nav__item)} key={i}>
              <Link
                to={item.link}
                href={`/${item.link}`}
                className={clsx(style.nav__link)}
                aria-label={item.label}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
