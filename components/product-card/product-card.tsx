import { IProduct } from "#/types";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: { product: IProduct }) => {
  const {
    product_name,
    actual_price,
    base_price,
    filename,
    discount,
    brand_name,
  } = product;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Image
        width={400}
        height={523}
        src={filename}
        alt={product_name}
        // quality={1}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{product_name}</span>
        <span>{base_price}</span>
        <span>{discount}%</span>
        <span>{brand_name}</span>
      </div>
    </div>
  );
};

export default ProductCard;
