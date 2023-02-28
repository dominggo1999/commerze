import React from "react";
import { About, Contact, Home, NotFound, ProductDetails } from "pages/index";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
