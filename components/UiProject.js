"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../components/ui/layout-grid";

export default function UiProject() {
  return (
    <div className="h-[1500px] flex-col flex justify-center items-center py-18 w-full">
      <p className="w-full px-10 iphone:text-[3em] iphone:mt-14 ipad-tablet:mt-0 ipad-tablet:text-[9em] font-Satoshi tracking-tighter font-semibold">
        Ui Designs
      </p>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const cards = [
  {
    id: 1,
    content: "Track N Tell",
    className: "iphone:col-span-2 md:col-span-2",
    isImage: true,
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d1211599071129.5eea6c66a9df9.jpg",
    description:
      "Track and Tell offers an advanced car tracking system, seamlessly integrated with Android screens for vehicles. Elevate your driving experience with our premium website redesign, meticulously crafted to enhance functionality and provide a luxurious interface for seamless navigation",
  },

  {
    id: 2,
    content: "Low Sugar",
    isImage: true,
    className: "iphone:col-span-2 md:col-span-1",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/26f30099043947.5ee9fcbdae75c.jpg",
    description:
      "Introducing Low Sugar, your go-to brand for premium sugar pouches. As part of our rebranding effort, we've curated a website that celebrates nature's sweetness, perfectly complementing our product. Explore delightful dessert recipes and experience the essence of natural indulgence on our revamped platform",
  },
  {
    id: 3,
    isImage: true,
    content: "Bloom Cap",
    className: "iphone:col-span-2 col-span-2 ",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/213c8e116650229.6065f83f7f139.jpg",
    description:
      "Discover your potential with our interactive learning platform. From coding to creative writing, explore a vast array of courses designed to expand your skills and knowledge. Start your journey today and unlock endless possibilities for growth.",
  },
  {
    id: 4,
    isImage: true,
    content: "Creative Business",
    className: "iphone:col-span-2 md:col-span-1",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4fe53699075805.5eea7fd3a4828.jpg",
    description:
      "Experience excellence with our business website tailored to meet your needs. From seamless e-commerce solutions to expert consultancy services, we're here to elevate your brand. Join our community of success-driven entrepreneurs and take your business to new heights.",
  },
  {
    id: 5,
    className: "col-span-2 row-span-2 ",
    videoUrl: "https://streamable.com/e/orlj54",
    isImage: false,
  },
  {
    id: 6,
    className: "iphone:col-span-2 md:col-span-1 row-span-2 ",
    videoUrl: "https://streamable.com/e/9l8ff5",
    isImage: false,
  },
];
