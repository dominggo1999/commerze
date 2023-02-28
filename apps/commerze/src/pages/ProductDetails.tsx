import React from "react";
import useProductDetails from "hooks/useProductDetails";
import { Navigate } from "react-router-dom";
import { LoadingWithMessage } from "@acme/ui";

const ProductDetails = () => {
  const { data, isError, isLoading } = useProductDetails();

  if (isLoading) {
    return <LoadingWithMessage message={"Loading product details"} />;
  }

  if (isError) {
    return <Navigate to={"/"} />;
  }

  console.log(data);

  return <div>ProductDetails</div>;
};

export default ProductDetails;
