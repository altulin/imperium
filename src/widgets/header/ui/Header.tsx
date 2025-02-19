import clsx from "clsx";
import { FC } from "react";
import style from "./Header.module.scss";
import Logo from "@/widgets/logo/ui/Logo";
import NavBar from "./Navbar";
import { PressBtn } from "@/widgets/button";
import IconUser from "@/shared/images/sprite/user.svg";
import { SpriteSVG } from "@/shared/ui";

export const Header: FC = () => {
  return (
    <header className={clsx(style.header)}>
      <div className={clsx(style.header__inner, "container")}>
        <Logo />
        <NavBar />
        <PressBtn
          icon={<SpriteSVG icon={IconUser} />}
          label="Вход"
          icon_pos="left"
          modifier="exit"
        />
      </div>
    </header>
  );
};
