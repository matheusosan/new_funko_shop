import { motion } from "framer-motion";
import React from "react";

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.aside
      className="flex flex-col justify-between  w-[250px] md:w-[500px] fixed right-0 top-0 h-screen bg-white z-50"
      initial={{ opacity: 0, right: "-100%" }}
      animate={{ opacity: 1, right: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, right: "-100%" }}
    >
      {children}
    </motion.aside>
  );
};

export default Root;
