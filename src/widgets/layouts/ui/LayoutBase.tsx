import { Header } from "@/widgets/header";
import clsx from "clsx";
import { FC } from "react";
import { Outlet } from "react-router";
import style from "./BaseLayout.module.scss";
import BackGround from "./BackGround";

export const BaseLayout: FC = () => {
  return (
    <>
      <BackGround />
      <Header />
      <main className={clsx(style.main)}>
        <Outlet />
      </main>
    </>
  );
};
