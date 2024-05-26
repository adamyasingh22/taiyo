import React from "react";
import { SideButton } from "../../atoms/sideButton.jsx";

type ButtonItemProps = {
  text: String;
  url: String;
};
interface SideNavItemProps {
  buttonList: Array<ButtonItemProps>;
}

export const SideNavItems = (props: SideNavItemProps) => {
  const { buttonList } = props;

  return (
    <div>
      {buttonList.map((item, index) => {
        return <SideButton key={index} text={item.text} url={item.url}></SideButton>;
      })}
    </div>
  );
};
