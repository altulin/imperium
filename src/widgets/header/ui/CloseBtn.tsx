import clsx from "clsx";
import style from "./Header.module.scss";
import { FC } from "react";
import { SpriteSVG } from "@/shared/ui";
import IconClose from "@/shared/images/sprite/menuClose.svg";
import { useIsSmallDevice } from "@/shared/service";

interface IProps {
  setOpen: (open: boolean) => void;
}

const CloseBtn: FC<IProps> = ({ setOpen }) => {
  const isTablet = useIsSmallDevice();
  if (!isTablet) return null;
  return (
    <button
      onClick={() => setOpen(false)}
      type="button"
      className={clsx(style.close)}
    >
      <SpriteSVG icon={IconClose} />
    </button>
  );
};
export default CloseBtn;
