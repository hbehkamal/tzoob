import { Card, CardBody, GridItem, Skeleton } from "@chakra-ui/react";
import { DEFAULT_PARAMS } from "#/_lib";

const ProductCardLoading = () => {
  return (
    <>
      {Array.from({ length: DEFAULT_PARAMS.LIMIT }, (_, index) => index).map(
        (item) => (
          <GridItem w="full" key={item}>
            <Card minH={{ base: "full", md: "450px" }} w="full">
              <CardBody>
                <Skeleton mb={6} h="327px" />
                <Skeleton h="20px" w="150px" mb="3" />
                <Skeleton h="20px" w="130px" />
              </CardBody>
            </Card>
          </GridItem>
        )
      )}
    </>
  );
};

export default ProductCardLoading;
