import React, { useEffect, useState, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Features_two = () => {
  const ref = useRef < HTMLDivElement > null;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.33", "0.66 0.33"],
  });

  return (
    <>
      <motion.div
        className=" px-8  lg:gap-32 text-slate-200 font-bold  bg-slate-900 grid lg:grid-cols-2 grid-cols-1 "
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
      >
        <img
          src="https://qresorts.in/uploads/59991bef0dd59_04-03.jpg"
          className="mx-auto invisible lg:visible"
          alt="example"
        />
        <div>
          <ul className="text-3xl mt-12 ">
            <li className="font-Kalnia text-6xl m-2"> 2</li>
            <li className="my-4">
              Black Gold Café’ - Pool Side Multi Cuisine Restaurant
            </li>
            <li className="my-4">Marcopolo - Executive Bar</li>
          </ul>
        </div>
        <img
          src="https://qresorts.in/uploads/59991bef0dd59_04-03.jpg"
          className="mx-auto lg:hidden "
          alt="example"
        />
      </motion.div>
    </>
  );
};

export default Features_two;
