"use client";

import React from "react";
import { motion } from "framer-motion";

const Skeleton = ({ containers }: { containers: number }) => {
  return (
    <>
      {[...Array(containers)].map((_, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-between h-[400px] w-[273px] shadow-2xl rounded-2xl py-6"
        >
          <motion.div
            initial={{ opacity: "25%" }}
            animate={{
              opacity: ["25%", "50%", "75%", "100%", "75%", "50%", "25%"],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-[200px] h-[200px] bg-gray-400/40 rounded-lg"
          />
          <motion.div
            initial={{ opacity: "25%" }}
            animate={{
              opacity: ["0%", "25%", "50%", "75%", "100%", "75%", "50%", "25%"],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-[200px] h-[20px] bg-gray-400/40 rounded-lg"
          />
          <motion.div
            initial={{ opacity: "25%" }}
            animate={{
              opacity: ["0%", "25%", "50%", "75%", "100%", "75%", "50%", "25%"],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-[80px] h-[20px] bg-gray-400/40 rounded-lg"
          />
          <motion.div
            initial={{ opacity: "25%" }}
            animate={{
              opacity: ["0%", "25%", "50%", "75%", "100%", "75%", "50%", "25%"],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-[100px] h-[30px] bg-gray-400/40 rounded-lg"
          />
        </div>
      ))}
    </>
  );
};

export default Skeleton;
