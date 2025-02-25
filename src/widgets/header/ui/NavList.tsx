import { FC } from "react";
import { links } from "../model";
import { Link } from "react-scroll";
import style from "./Header.module.scss";
import clsx from "clsx";

const NavList: FC = () => {
  return (
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
  );
};
export default NavList;
