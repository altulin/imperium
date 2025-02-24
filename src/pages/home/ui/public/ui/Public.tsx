import { FC } from "react";
import { PromoComponent } from "@/widgets/promoComponent";
import { propsPublic } from "../model";
import clsx from "clsx";
import style from "./Public.module.scss";

const Public: FC = () => {
  return <PromoComponent {...propsPublic} className={clsx(style.public)} />;
};
export default Public;
