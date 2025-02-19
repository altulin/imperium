import { FC } from "react";

import {
  IPressBtn,
  IPressLink,
  TPressComponent,
  // IPressHashLink,
} from "../model/types";
import clsx from "clsx";
import style from "./PressElement.module.scss";

const PressComponent: FC<typeof TPressComponent> = ({ ...props }) => {
  const { label, icon = null, icon_pos = "left" } = props;

  return (
    <span
      className={clsx(style.label, icon_pos && style[`label--${icon_pos}`])}
    >
      {icon && <span className={clsx(style.label__icon)}>{icon}</span>}
      <span className={clsx(style.label__text)}>{label}</span>
    </span>
  );
};

export const PressBtn: FC<IPressBtn> = ({ ...props }) => {
  const { icon, icon_pos, label, modifier, ...buttonProps } = props;
  const componentProps = { icon, icon_pos, label };

  return (
    <button
      type={buttonProps.type || "button"}
      className={clsx(
        style.press,
        props.modifier && style[`press--${modifier}`],
        buttonProps.class_name,
      )}
      {...buttonProps}
    >
      <PressComponent {...componentProps} />
    </button>
  );
};

export const PressLink: FC<IPressLink> = ({ ...props }) => {
  const { class_name } = props;
  return (
    <a className={clsx(style.press, class_name)} {...props}>
      <PressComponent {...props} />
    </a>
  );
};

// export const PressHashLink: FC<IPressHashLink> = ({ ...props }) => {
//   const { class_name } = props;

//   return (
//     <HashLink className={clsx(style.press, class_name)} {...props}>
//       <PressComponent {...props} />
//     </HashLink>
//   );
// };
