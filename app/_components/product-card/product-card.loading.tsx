import {
  Badge,
  Card,
  CardBody,
  Flex,
  GridItem,
  Heading,
  Skeleton,
  SkeletonText,
  Stack,
  Tag,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { IProduct } from "#/_types";
import Image from "next/image";

const ProductCardLoading = () => {
  return (
    <GridItem w="full">
      <Card minH={{ base: "full", md: "450px" }} w="full">
        <CardBody>
          <Skeleton mb={6} h="327px" />
          <Skeleton h="20px" w="150px" mb="3" />
          <Skeleton h="20px" w="130px" />
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default ProductCardLoading;
