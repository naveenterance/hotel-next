import React, { useEffect, useState, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Features_three = () => {
  const ref = useRef < HTMLDivElement > null;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.99", "0.99 0.66"],
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
        <div>
          <ul className="text-3xl mt-12">
            <li className="font-Kalnia text-6xl m-2"> 3</li>
            <li className="my-4">Q-Ayurveda - Ayurveda Spa</li>
            <li className="my-4">Q-Shop - Ethnic & Organic Store</li>
          </ul>
        </div>
        <img
          src="https://qresorts.in/uploads/59991bab1ed21_IMG_1847.jpg"
          className="mx-auto "
          alt="example"
        />
      </motion.div>
    </>
  );
};

export default Features_three;
