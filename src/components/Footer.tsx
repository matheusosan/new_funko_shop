import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center bg-blue-900 h-[5vh]">
      <p className=" text-lg text-white">
        Made by{" "}
        <a
          href="https://linkedin.com/in/matheusosan"
          target="_blank"
          className="font-bold"
        >
          Matheus
        </a>{" "}
        with 🤍.
      </p>
    </footer>
  );
};

export default Footer;
