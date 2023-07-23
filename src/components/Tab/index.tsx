"use client";

import React, { Children, ReactElement, useState } from "react";
import { ITabProps } from "./types";

export * from "./types";

export const Tab: React.FC<ITabProps> = ({ children, tabs }) => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const childrenArray = Children.toArray(
    children as ReactElement
  ) as Array<ReactElement>;

  const handleTabClick = (tabIndex: number) => {
    setCurrentTab(tabIndex);
  };

  const currentChild = childrenArray[currentTab];

  return (
    <div>
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => handleTabClick(index)}
            className={`w-full lg:w-fit px-6 lg:px-8 lg:text-base lg:py-4 py-3 font-medium text-xs hover:bg-primary-60 transition-colors text-neutral-100 ${
              currentTab === index ? "bg-primary-50" : "bg-primary-70"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{currentChild}</div>
    </div>
  );
};
