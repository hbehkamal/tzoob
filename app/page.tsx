"use client";

import { ProductsContainer } from "#/_containers";
import AppProviders from "#/_providers";

const Page = () => {
  return (
    <AppProviders>
      <ProductsContainer />
    </AppProviders>
  );
};

export default Page;
