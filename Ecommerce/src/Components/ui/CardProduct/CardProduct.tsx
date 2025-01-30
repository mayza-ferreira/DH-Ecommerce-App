import { FC } from "react";
import useCartContext from "../../../hook/useCartContext";
import { CartProduct, Product } from "../../../interface";
import styles from "./CardProduct.module.css";
import { toast } from "sonner";

interface Props {
  product: Product;
}

export const CardProduct: FC<Props> = ({ product }) => {
  const { dispatch } = useCartContext();

  const item: CartProduct = {
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    quantity: 1,
  };

  const addToCart = (item: CartProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    toast.success("Product added to cart successfully");
  };

  return (
    <div className={styles.cardContainer}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.cardImage}
      />
      <div className={styles.cardDetail}>
        <h3 className={styles.cardTitle}>{product.name}</h3>
        <div className={styles.cardBody}>
          <p className={styles.cardType}>{product.type}</p>
          <p className={styles.cardPrice}>
            $<small>{product.price}</small>
          </p>
        </div>
        <button className={styles.cardButton} onClick={() => addToCart(item)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
