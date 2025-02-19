import { HeaderLinks } from "@/shared/appTypes";

interface ILink {
  label: string;
  link: HeaderLinks;
  isAnchor: boolean;
}

export const links: ILink[] = [
  {
    label: "Пассивный заработок",
    link: HeaderLinks.PASSIVE,
    isAnchor: true,
  },
  {
    label: "Публичный трейдинг",
    link: HeaderLinks.PUBLIC,
    isAnchor: true,
  },
  {
    label: "Доходы и безопасность",
    link: HeaderLinks.INCOME,
    isAnchor: false,
  },
  {
    label: "Обратная связь",
    link: HeaderLinks.FEEDBACK,
    isAnchor: false,
  },
];
