import { mockApi } from "config/index";
import { useQuery } from "@tanstack/react-query";
import { Product } from "types/product";
import { useParams } from "react-router-dom";

const getProductDetails = async (productId: number | string | undefined) => {
  const res = await mockApi.get<Product>(`/products/${productId || 1}`);
  return res.data;
};

const useProductDetails = () => {
  const { productId } = useParams();

  const results = useQuery(["product-details", productId], async () => {
    try {
      return getProductDetails(productId);
    } catch (error) {
      throw new Error(
        `Unable to fetch product details for product with id : ${
          productId?.toString() || "#"
        }`,
      );
    }
  });

  return results;
};

export default useProductDetails;
