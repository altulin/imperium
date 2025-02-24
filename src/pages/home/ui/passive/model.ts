import { IPromoComponent } from "@/widgets/promoComponent";
import { HeaderLinks } from "@/shared/appTypes";
import img1 from "@/shared/images/public/pig.png";
import img2 from "@/shared/images/public/graf.png";

import svg_0 from "@/shared/images/sprite/passive_0.svg";
import svg_1 from "@/shared/images/sprite/passive_1.svg";
import svg_2 from "@/shared/images/sprite/passive_2.svg";

export const propsPassive: IPromoComponent = {
  id: HeaderLinks.PASSIVE,

  title: {
    label: "Пассивный заработок",
    text: "Наш сервис позволяет моментально копировать сделки успешных трейдеров на вашем биржевом аккаунте",
  },

  info: [
    {
      img: img1,
      title:
        "Пассивный заработок еще никогда не был таким простым и прибыльным",
      text: "Вам не нужно даже знать, что такое трейдинг и криптовалюта. Вашим депозитом будет управлять один из лучших трейдеров мира",
    },
    {
      img: img2,
      title:
        "Мы собираем статистику трейдеров по всем их сделкам и выводим результаты на нашем сайте",
      text: "Вам остается лишь выбрать самого подходящего трейдера и подписаться на него. Все его сделки будут автоматически открываться и закрываться на вашем биржевом аккаунте. В любой момент вы можете отписаться от трейдера или вывести свою прибыль",
    },
  ],
  subtitle: "Как это работает",

  how: {
    cardList: [
      {
        title: "Зарегистрируйтесь",
        text: "на бирже Binance и на нашем сайте",
        svg: svg_0,
      },
      { isArrow: true },
      {
        title: "Пополните ваш депозит на Binance",
        text: "и подпишитесь на лучшего трейдера в нашем сервисе",
        svg: svg_1,
      },
      { isArrow: true },
      {
        title: "Займитесь чем-нибудь полезным",
        text: "пока профессиональные трейдеры зарабатывают вам деньги",
        svg: svg_2,
      },
    ],
  },

  instruction: {
    title: "Полная инструкция по публичному трейдингу",
  },
};
