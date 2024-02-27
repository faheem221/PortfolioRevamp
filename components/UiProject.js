"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../components/ui/layout-grid";

export default function UiProject() {
  return (
    <div className="h-[1500px] flex-col flex justify-center items-center py-18 w-full">
      <p className="w-full px-10 iphone:text-[2em] ipad-tablet:text-[9em] font-Satoshi tracking-tighter font-semibold">
        Ui Designs
      </p>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const cards = [
  {
    id: 1,
    content: "Lorem Ipsum one",
    className: "md:col-span-2",
    isImage: true,
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d1211599071129.5eea6c66a9df9.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  ",
  },

  {
    id: 2,
    content: "Lorem Ipsum two",
    isImage: true,
    className: "col-span-1",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/26f30099043947.5ee9fcbdae75c.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco v   ",
  },
  {
    id: 3,
    isImage: true,
    content: "Lorem Ipsum three",
    className: "col-span-1",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/213c8e116650229.6065f83f7f139.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  ",
  },
  {
    id: 4,
    isImage: true,
    content: "Lorem Ipsum four",
    className: "md:col-span-2",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4fe53699075805.5eea7fd3a4828.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
  },
  {
    id: 5,
    className: "col-span-2 row-span-2",
    videoUrl: "https://streamable.com/e/orlj54",
    isImage: false,
  },
  {
    id: 6,
    className: "col-span-1 row-span-2",
    videoUrl: "https://streamable.com/e/9l8ff5?quality=highest",
    isImage: false,
  },
];
