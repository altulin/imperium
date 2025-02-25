import { HeaderLinks } from "@/shared/appTypes";
import { HeaderLinkNames } from "@/shared/appTypes/header/links";

interface ILink {
  label: string;
  link: HeaderLinks;
  isAnchor: boolean;
}

export const links: ILink[] = [
  {
    label: HeaderLinkNames.PASSIVE,
    link: HeaderLinks.PASSIVE,
    isAnchor: true,
  },
  {
    label: HeaderLinkNames.PUBLIC,
    link: HeaderLinks.PUBLIC,
    isAnchor: true,
  },
  {
    label: HeaderLinkNames.INCOME,
    link: HeaderLinks.INCOME,
    isAnchor: false,
  },
  {
    label: HeaderLinkNames.FEEDBACK,
    link: HeaderLinks.FEEDBACK,
    isAnchor: false,
  },
];
