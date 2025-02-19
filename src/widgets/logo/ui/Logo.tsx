import { MainPageNames } from "@/shared/appTypes/mainPage/names";
import { SpriteSVG } from "@/shared/ui";
import { FC } from "react";
import { Link } from "react-scroll";
import IconLogo from "@/shared/images/sprite/logo.svg";
import clsx from "clsx";
import style from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <Link
      className={clsx(style.logo)}
      to={MainPageNames.BODY}
      href="/"
      smooth={true}
      duration={500}
      aria-label="Логотип"
    >
      <SpriteSVG icon={IconLogo} />
    </Link>
  );
};
export default Logo;
