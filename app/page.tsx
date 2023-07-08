"use client";

import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import {
  PageLimit,
  Pagination,
  ProductCard,
  ProductCardLoading,
  SortPrice,
} from "#/_components";

import { useProducts } from "./products.hook";

const Products = () => {
  const {
    isLoading,
    products,
    sortOrder,
    setSortOrder,
    setPage,
    limit,
    setLimit,
    totalCount,
    totalPagesCount,
    page,
  } = useProducts();

  if (!isLoading && !products.length) {
    return <div>no product found</div>;
  }

  return (
    <Container maxW="1280px" centerContent bgColor="gray.50">
      <Flex my="6" w="full" justifyContent="space-between" alignItems="center">
        <SortPrice setSortOrder={setSortOrder} sortOrder={sortOrder} />
        <PageLimit
          limit={limit}
          setLimit={setLimit}
          setPage={setPage}
          page={page}
          totalCount={totalCount}
        />
      </Flex>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
        w="full"
      >
        {isLoading ? (
          <ProductCardLoading />
        ) : (
          products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })
        )}
      </Grid>
      <Box my={6}>
        <Pagination
          page={page}
          setPage={setPage}
          totalPagesCount={totalPagesCount}
        />
      </Box>
    </Container>
  );
};

export default Products;
