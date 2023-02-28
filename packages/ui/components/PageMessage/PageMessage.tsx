import React from "react";
import { BiError } from "react-icons/bi";

export interface PageMessageProps {
  code?: string | number;
  title: string;
  message: string;
  icon?: React.ReactNode;
}

// This component useful for 404 page, 500 page, or offline page
const PageMessage: React.FC<PageMessageProps> = ({
  code,
  title,
  message,
  icon,
}) => {
  return (
    <main className="flex w-full flex-col items-center justify-center py-20 px-5 text-center sm:px-20">
      <span className="mb-3 text-6xl text-primary-500">
        {icon || <BiError />}
      </span>
      <h1 className="mb-2 text-3xl font-bold capitalize text-primary-500 sm:text-4xl">
        {title}
      </h1>
      <span className="mb-2 text-2xl font-bold  text-primary-500">{code}</span>
      <p className="max-w-[600px] text-sm sm:text-base">{message}</p>
    </main>
  );
};

export default PageMessage;
