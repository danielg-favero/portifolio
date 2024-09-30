"use client";

import React, { Children, ReactElement, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { ITabProps } from "./types";

export * from "./types";

import "swiper/css";

export const Tab: React.FC<ITabProps> = ({ children, tabs }) => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const childrenArray = Children.toArray(
    children as ReactElement
  ) as Array<ReactElement>;

  const handleTabClick = (tabIndex: number) => {
    setCurrentTab(tabIndex);
  };

  return (
    <div>
      <div className="flex w-full border-b border-b-primary-70">
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
      <Swiper slidesPerView={1} loop>
        {childrenArray.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
