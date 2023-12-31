import { Card, CardBody, GridItem, Skeleton } from "@chakra-ui/react";

import { createArrayByLength } from "#/_utils";

const ProductCardLoading = ({ length }: { length: number }) => {
  return (
    <>
      {createArrayByLength(length).map((item) => (
        <GridItem w="full" key={item}>
          <Card minH={{ base: "full", md: "450px" }} w="full">
            <CardBody>
              <Skeleton mb={6} h="327px" />
              <Skeleton h="20px" w="150px" mb="3" />
              <Skeleton h="20px" w="130px" />
            </CardBody>
          </Card>
        </GridItem>
      ))}
    </>
  );
};

export default ProductCardLoading;
