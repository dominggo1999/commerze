import { mockApi } from "config/index";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ProductList } from "types/product";

interface GetProductsParams {
  page?: number;
  search?: string;
}

const LIMIT = 12;

const getProducts = async ({ page = 1, search = "" }: GetProductsParams) => {
  const res = await mockApi.get<ProductList>("/products", {
    params: {
      page,
      search,
      limit: LIMIT,
    },
  });

  return res.data;
};

const useProducts = (search: string) => {
  const results = useInfiniteQuery({
    queryKey: ["products", search],
    queryFn: async (key) => {
      return getProducts({ page: key.pageParam, search });
    },
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === 0) return null;

      const nextPage = pages.length + 1;

      return nextPage;
    },
  });

  const currentPage = results?.data?.pages?.length || 1;

  const isNoResults =
    currentPage === 1 && JSON.stringify(results?.data?.pages) === "[[]]";

  return { ...results, currentPage, isNoResults };
};

export default useProducts;
