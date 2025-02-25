import { FC, useState } from "react";
import style from "./Header.module.scss";
import clsx from "clsx";
import Burger from "./Burger";
import { useIsSmallDevice } from "@/shared/service";
import CloseBtn from "./CloseBtn";
import NavList from "./NavList";

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

        <NavList />
      </nav>
    </div>
  );
};
export default NavBar;
