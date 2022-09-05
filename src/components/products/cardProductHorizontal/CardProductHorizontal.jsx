import React from "react";

import DataProduct from "../cardsProductComponent/DataProduct";
import ImgProduct from "../cardsProductComponent/ImgProduct";

import styles from "./cardProductHorizontal.module.scss";

const CardProductHorizontal = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>
      <div className={styles.productImg}>
        <ImgProduct
          img={props.img}
          className={`${styles.img} ${props.classNameImg}`}
          off={props.off}
        />
      </div>
      <DataProduct
        className={styles.dataProduct}
        description={props.description}
        off={props.off}
      />
    </div>
  );
};

export default CardProductHorizontal;