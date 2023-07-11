"use client";

import { Products } from "#/_components";
import { AppProviders } from "#/_providers";
import { Container } from "@chakra-ui/react";

const ProductsContainer = () => {
  return (
    <AppProviders>
      <Container maxW="1280px" centerContent bgColor="gray.50" flex="1">
        <Products />
      </Container>
    </AppProviders>
  );
};

export default ProductsContainer;
