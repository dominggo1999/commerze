import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";

export interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  productId: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  image,
  productId,
}) => {
  const href = `products/${productId}`;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-background-light shadow-sm dark:bg-background-300">
      <Link to={href} className="flex w-full">
        <img
          className="xs:h-48 h-56 w-full object-cover object-center"
          src={image}
          alt={`Product ${productId} image`}
        />
      </Link>
      <div className="flex flex-col gap-y-5 p-8">
        <span className="text-2xl font-semibold">{name}</span>
        <p className="line-clamp-2">{description}</p>
        <div className="flex w-full flex-wrap items-center justify-between gap-3">
          <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">
            ${price}
          </span>
          <Button component={Link} to={href}>
            See Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
