import React from "react";
import { SideNavItems } from "../../molecules/sideNavItems";
import { List } from "./list";

export const SideNav: React.FC = () => {
  return (
    <div className="w-1/4 bg-slate-500 h-full">
      <SideNavItems buttonList={List} />
    </div>
  );
};
