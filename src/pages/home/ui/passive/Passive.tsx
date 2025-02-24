import { FC } from "react";
import { PromoComponent } from "@/widgets/promoComponent";
import { propsPassive } from "./model";

const Passive: FC = () => {
  return <PromoComponent {...propsPassive} />;
};
export default Passive;
