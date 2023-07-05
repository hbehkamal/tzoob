import { FC } from "react";

import { ISaleTag } from "./sale-tag.type";
import styles from "./sale-tag.module.scss";

const SaleTag: FC<ISaleTag> = ({ discount }) => {
  return <div className={styles["block"]}>{discount}%</div>;
};

export default SaleTag;
