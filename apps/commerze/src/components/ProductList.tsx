import { ProductCard } from "@acme/ui";
import React from "react";
import { ProductList as ProductListType } from "types/product";

export interface ProductListProps {
  products: ProductListType;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        return (
          <ProductCard
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            productId={product.id}
            key={`product-${product.id}`}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
