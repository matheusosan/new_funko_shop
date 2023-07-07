"use client";

import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content?: string;
}

const Button = ({ content, ...props }: ButtonProps) => {
  return <button {...props}>{content}</button>;
};

export default Button;
