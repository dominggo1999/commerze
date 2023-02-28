import React, { useState, useRef } from "react";
import { useProducts } from "hooks/index";
import {
  Container,
  TextField,
  Button,
  LoadingWithMessage,
  PageMessage,
} from "@acme/ui";
import { ProductList } from "components/index";

const Home = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isNoResults,
  } = useProducts(search);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(searchRef.current?.value.toLowerCase() || "");
  };

  const resetSearch = () => {
    setSearch("");
    if (searchRef.current) {
      searchRef.current.value = "";
    }
  };

  return (
    <Container className="pb-10">
      <form className="mt-10 flex flex-wrap gap-3" onSubmit={handleSubmit}>
        <TextField
          className="max-w-auto flex w-full"
          placeholder="Search product..."
          ref={searchRef}
        />
        <div className="flex flex-wrap gap-x-3">
          <Button>Search</Button>
          {search && (
            <Button onClick={resetSearch} variant="danger">
              Reset
            </Button>
          )}
        </div>
      </form>

      {isLoading && <LoadingWithMessage message="Loading products..." />}
      {isError && (
        <PageMessage title="Something Went Wrong" message="Try again later" />
      )}
      {!isLoading && isNoResults && (
        <span className="mt-5 inline-block font-semibold">
          No results found
        </span>
      )}

      {data?.pages.map((group, i) => (
        <div className="py-10" key={i}>
          <ProductList products={group} key={i} />
        </div>
      ))}

      {hasNextPage && (
        <div className="mt-3 flex w-full justify-center">
          <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            Load More
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Home;
