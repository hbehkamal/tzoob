"use client";

import { Products } from "#/_components";
import { ProductsProvider } from "#/_providers";
import { Container } from "@chakra-ui/react";

const ProductsContainer = () => {
  return (
    <ProductsProvider>
      <Container maxW="1280px" centerContent bgColor="gray.50" flex="1">
        <Products />
      </Container>
    </ProductsProvider>
  );
};

export default ProductsContainer;
