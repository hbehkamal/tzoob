import {
  Badge,
  Card,
  CardBody,
  Flex,
  GridItem,
  Heading,
  Stack,
  Tag,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { IProduct } from "#/_types";
import Image from "next/image";

const ProductCard = ({ product }: { product: IProduct }) => {
  const {
    product_name,
    actual_price,
    base_price,
    filename,
    discount,
    brand_name,
  } = product;

  const onSale = !!discount;

  return (
    <GridItem>
      <Card w="250px" h="400px" cursor="pointer">
        <CardBody>
          <Image
            src={filename}
            alt={product_name}
            width="250"
            height="327"
            // fill={true}
            // sizes="(max-width: 768px) 80vw, (max-width: 1200px) 35vw, 20vw"
          />
          {onSale && (
            <Badge
              zIndex={2}
              pos="absolute"
              top={2}
              left={2}
              w="fit-content"
              colorScheme="red"
            >
              {discount}%
            </Badge>
          )}
          <Tag
            w="fit-content"
            fontSize="xs"
            zIndex={2}
            pos="absolute"
            top={2}
            right={2}
          >
            {brand_name}
          </Tag>
          <Stack mt="6">
            <Tooltip label={product_name}>
              <Heading as="h3" size="md" noOfLines={1} mb="3">
                {product_name}
              </Heading>
            </Tooltip>
            {onSale ? (
              <Flex>
                <Text color="gray.500" mr={2} textDecor="line-through">
                  {base_price}
                </Text>
                <Text color="gray.900">{actual_price}</Text>
              </Flex>
            ) : (
              <Text color="gray.900">{base_price}</Text>
            )}
          </Stack>
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default ProductCard;
