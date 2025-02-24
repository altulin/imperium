import { HeaderLinks } from "@/shared/appTypes";
import { ITitle } from "@/widgets/title";

export interface IPromoComponent {
  id: HeaderLinks;
  className?: string;
  title: ITitle;
  info: IInfo[];
  subtitle: string;
  how: { cardList: ICardHow[] };
  instruction: {
    title: string;
  };
}

export interface IInfo {
  title: string;
  text: string;
  img: string;
  className?: string;
}

export interface ICardHow {
  title?: string;
  text?: string;
  svg?: string;
  id?: HeaderLinks;
  isArrow?: boolean;
}
