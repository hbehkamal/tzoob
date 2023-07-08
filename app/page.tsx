"use client";

import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import { Pagination, ProductCard, SortPrice } from "#/_components";

import { useProducts } from "./products.hook";

const Products = () => {
  const {
    products,
    sortOrder,
    setSortOrder,
    setPage,
    setLimit,
    totalCount,
    totalPagesCount,
    page,
  } = useProducts();

  if (!products || !products.length) {
    return <div>no product found</div>;
  }

  return (
    <Container maxW="1200px" centerContent bgColor="gray.50">
      <Flex my="6">
        <SortPrice setSortOrder={setSortOrder} sortOrder={sortOrder} />
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
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
