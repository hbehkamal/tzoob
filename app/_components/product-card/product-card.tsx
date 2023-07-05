import { IProduct } from "#/_types";
import Image from "next/image";

import styles from "./product-card.module.scss";
import { SaleTag } from "./sale-tag";

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
    <div className={styles["productCard__container"]}>
      <div className={styles["productCard__container--image"]}>
        <Image
          src={filename}
          alt={product_name}
          fill={true}
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 35vw, 20vw"
        />
        {onSale && <SaleTag discount={discount} />}
      </div>
      <div className={styles["productCard__container--details"]}>
        <div className={styles["productCard__container--details-name"]}>
          {product_name}
        </div>
        <div className={styles["productCard__container--details-brand"]}>
          {brand_name}
        </div>
        {onSale ? (
          <div className={styles["productCard__container--details-sale"]}>
            <span
              className={styles["productCard__container--details-sale-base"]}
            >
              {base_price}
            </span>
            <span
              className={styles["productCard__container--details-sale-price"]}
            >
              {actual_price}
            </span>
          </div>
        ) : (
          <div className={styles["productCard__container--details-price"]}>
            {base_price}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
