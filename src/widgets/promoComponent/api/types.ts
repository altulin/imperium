import { HeaderLinks } from "@/shared/appTypes";
import { ITitle } from "@/widgets/title";

export interface IPromoComponent {
  id: HeaderLinks;
  className?: string;
  title: ITitle;
  info: IInfo[];
  subtitle: string;
  how: ICardHow[];
}

export interface IInfo {
  title: string;
  text: string;
  img: string;
  className?: string;
}

export interface ICardHow {
  title: string;
  text: string;
  id: HeaderLinks;
  idSvg?: number;
}
