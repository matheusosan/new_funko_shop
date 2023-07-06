import React from "react";

interface AlertMessageProps {
  message: string;
}

const Alert = ({ message }: AlertMessageProps) => {
  return (
    <div className="flex items-center absolute w-auto top-32 right-8 font-bold bg-green-400 rounded-xl p-4 opacity-75 hover:opacity-100">
      <p>{message}</p>
    </div>
  );
};

export default Alert;
