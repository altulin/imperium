/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from "react";
import { HelmetProviderFC } from "./app/providers/helmet";
import { StoreProvider } from "./app/providers/store";
import { RoutesProviderFC } from "./app/providers/routes";
import "normalize.css";
// @ts-ignore
import "@fontsource/roboto";
// @ts-ignore
import "@fontsource/montserrat";
import "@/app/styles/style.scss";
import { ModalManager } from "./widgets/modal";

const App: FC = () => {
  return (
    <HelmetProviderFC>
      <StoreProvider>
        <RoutesProviderFC />
        <ModalManager />
      </StoreProvider>
    </HelmetProviderFC>
  );
};

export default App;
