import React from "react";

export const NoContactView = () => {
  return (
    <div id="alert" className="flex justify-center">
      <div className="border-solid border-2 min-[500px]:flex justify-center min-[500px]:items-center p-4">
        <div id="error" className="w-[45px]">
          <img className="" src="/images/cross.png" />
        </div>
        <div id="alert text" className="text-center p-2">
          No Contact found Please add contact from create contact button
        </div>
      </div>
    </div>
  );
};
