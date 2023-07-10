"use client";

import React from "react";
import { motion } from "framer-motion";
import * as I from "react-icons/ai";

interface AlertMessageProps {
  message: string;
}

const Alert = ({ message }: AlertMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center fixed w-[500px] top-24 right-8 bg-slate-200 border-b-4 border-green-600 rounded-lg px-4 py-3 opacity-100"
    >
      <I.AiFillCheckCircle className="text-green-600 mr-4" size={32} />
      <p>{message}</p>
    </motion.div>
  );
};

export default Alert;
