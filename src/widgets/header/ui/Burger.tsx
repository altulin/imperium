import clsx from "clsx";
import { FC } from "react";
import style from "./Header.module.scss";
import { SpriteSVG } from "@/shared/ui";
import IconBurger from "@/shared/images/sprite/burger.svg";
import { useIsSmallDevice } from "@/shared/service";

interface BurgerProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

const Burger: FC<BurgerProps> = ({ ...props }) => {
  const isTablet = useIsSmallDevice();

  if (!isTablet) return null;

  return (
    <button
      onClick={() => props.setOpen(!props.isOpen)}
      className={clsx(style.burger)}
    >
      <SpriteSVG icon={IconBurger} />
    </button>
  );
};
export default Burger;
