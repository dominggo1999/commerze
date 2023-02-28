import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export interface ProductDetailsProps {
  name: string;
  material: string;
  price: string;
  description: string;
  image: string;
  productId: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  material,
  price,
  description,
  image,
  productId,
}) => {
  return (
    <div className="mx-auto flex max-w-[1000px] flex-col justify-center gap-y-10 sm:flex-row">
      <div className="aspect-square w-full rounded-xl bg-background-light shadow-sm dark:bg-background-300 sm:w-[40%]">
        <img
          className="h-full w-full overflow-hidden rounded-xl object-center object-cover"
          src={image}
          alt={`Product ${productId} image`}
        />
      </div>
      <div className="flex w-full flex-col gap-y-5 sm:w-[50%] sm:pl-8">
        <Button
          icon={BiArrowBack}
          className="self-start"
          size="sm"
          to="/"
          component={Link}
        >
          All Products
        </Button>
        <span className="text-2xl font-semibold">{name}</span>
        <p>{description}</p>
        <span>
          Material : <span className="font-semibold">{material}</span>
        </span>
        <div className="flex w-full flex-wrap items-center justify-between gap-3">
          <span className="text-lg font-bold tracking-tight text-gray-900 text-primary sm:text-xl">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
