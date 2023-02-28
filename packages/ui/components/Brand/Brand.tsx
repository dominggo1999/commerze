import React from "react";

export interface BrandProps {
  title?: string;
}

const Brand: React.FC<BrandProps> = ({ title = "Commerze" }) => {
  return (
    <span className="inline-block text-2xl font-bold text-primary-500">
      {title}
    </span>
  );
};

export default Brand;
