"use client";

import { Products } from "#/_components";
import { ProductsProvider } from "#/_providers";
import { IProduct } from "#/_types";
import { Container } from "@chakra-ui/react";

const ProductsContainer = ({ products }: { products: IProduct[] }) => {
  console.log("ProductsContainer: ", products);
  return (
    <ProductsProvider>
      <Container maxW="1280px" centerContent bgColor="gray.50">
        <Products firstRenderProducts={products} />
      </Container>
    </ProductsProvider>
  );
};

export default ProductsContainer;
