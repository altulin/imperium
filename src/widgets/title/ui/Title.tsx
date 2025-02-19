import clsx from "clsx";
import { FC } from "react";
import style from "./Title.module.scss";

export interface ITitle {
  label: string | string[];
  className?: string;
  text?: string | string[];
}

const Title: FC<ITitle> = ({ label, className, text }) => {
  return (
    <div className={clsx(style.title)}>
      <h2 className={clsx(style.title__text, className)}>
        {Array.isArray(label)
          ? label.map((item, i: number) => <span key={i}>{item}</span>)
          : label}
      </h2>
      {text && (
        <p className={clsx(style.title__info)}>
          {Array.isArray(text)
            ? text.map((item, i: number) => <span key={i}>{item}</span>)
            : text}
        </p>
      )}
    </div>
  );
};
export default Title;
