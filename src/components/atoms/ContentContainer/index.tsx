import React from "react";
import { SideNav } from "../../organisms/sideNav";
import { AppRoutes } from "../../../navigators/Routes";
import { Header } from "../../organisms/header";

export const ContentContainer = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-row h-full">
        <SideNav />
        <AppRoutes />
      </div>
    </div>
  );
};
