"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Features_one = () => {
  const ref = useRef < HTMLDivElement > null;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.0", "0.33 0.0"],
  });

  return (
    <>
      <motion.div
        className=" px-8 mt-8 lg:gap-32 text-slate-200 font-bold  bg-slate-900 grid lg:grid-cols-2 grid-cols-1"
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
      >
        <div>
          <ul className="text-2xl">
            <li className="font-Kalnia text-6xl m-2">1</li>
            <li className="my-4">
              94 Sea Facing Rooms with a Panoramic View of the Arabian Sea
            </li>
            <li>
              Amazing view of Light House, Port, Harbor, Park, Beach & City from
              the rooms.
            </li>
          </ul>
        </div>
        <img
          src="https://qresorts.in/uploads/59991c866ece7_9R0A2324.jpg"
          className="mx-auto "
          alt="example"
        />
      </motion.div>
    </>
  );
};

export default Features_one;
