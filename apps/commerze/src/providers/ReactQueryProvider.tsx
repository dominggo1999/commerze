import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "react-query-devtools";

export interface ReactQueryProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient({});

const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
