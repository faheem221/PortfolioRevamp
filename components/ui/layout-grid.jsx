"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/components/utils/cn";
import { CgClose } from "react-icons/cg";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative group border cursor-pointer border-slate-700 overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg overflow-y-auto cursor-default absolute inset-0 h-screen w-[90%] m-auto z-50 flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white  rounded-xl h-full w-full"
                : " rounded-xl h-full w-full"
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
            {selected
              ? ""
              : card.content && (
                  <div className="absolute transition-all duration-300 group-hover:bottom-0 bottom-[-90px] flex flex-col p-3  h-1/2 w-full bg-gradient-to-t from-black/80 to-black/5">
                    <p className="text-slate-50 text-[1.8em] font-Rubik font-[500]">
                      {card.content}
                    </p>
                    <p className="text-slate-50 text-[1em] font-satoshi">{card.description}</p>
                  </div>
                )}
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute object-cover object-top h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.1 : 0 }}
      ></motion.div>
    
    </div>
  );
};

const BlurImage = ({ card, selected }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="w-full absolute h-full  transition duration-200  ">
      {card.isImage ? (
        <img
          src={card.thumbnail}
          onLoad={() => setLoaded(true)}
          className={cn("inset-0 w-full", loaded ? "blur-none" : "blur-none")}
          alt="thumbnail"
        />
      ) : (
        <div className="flex justify-center bg-black w-full h-full border border-slate-900 items-center">
          <iframe
            allowFullScreen
            src={card.videoUrl}
            width={"100%"}
            height={"90%"}
          />
        </div>
      )}
    </div>
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl absolute z-[990]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
      ></motion.div>
    </div>
  );
};
