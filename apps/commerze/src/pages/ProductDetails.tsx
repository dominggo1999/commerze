import React from "react";
import useProductDetails from "hooks/useProductDetails";
import { Navigate } from "react-router-dom";
import {
  LoadingWithMessage,
  ProductDetails as ProductDetailsWrapper,
  Container,
} from "@acme/ui";

const ProductDetails = () => {
  const { data, isError, isLoading } = useProductDetails();

  if (isLoading) {
    return <LoadingWithMessage message={"Loading product details"} />;
  }

  if (isError) {
    return <Navigate to={"/"} />;
  }

  return (
    <Container className="py-10">
      <ProductDetailsWrapper {...data} productId={data.id} />
    </Container>
  );
};

export default ProductDetails;
