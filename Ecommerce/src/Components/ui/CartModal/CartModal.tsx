import styles from "./CartModal.module.css";
import Close from "../../../assets/close.svg";
import { FC } from "react";
import useCartContext from "../../../hook/useCartContext";
import { CartProduct } from "../../../interface";

interface Props {
  handleShowCartModal: () => void;
}

export const CartModal: FC<Props> = ({ handleShowCartModal }) => {
  const {
    state: { cartItems },
    dispatch,
  } = useCartContext();
  const removeFromCart = (item: CartProduct) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const addToCart = (item: CartProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const totalPay = () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return total;
  };

  return (
    <div className={styles.modalContainer}>
      <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
        <img src={Close} alt="Close" />
      </button>
      <table className={styles.modalTable}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Delete</th>
            <th>Quantity</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <p>{item.name}</p>
              </td>
              <td>
                <button
                  onClick={() => removeFromCart(item)}
                  className={styles.modalButtonRemove}
                >
                  -1
                </button>
              </td>
              <td>
                <p>{item.quantity}</p>
              </td>
              <td>
                <button
                  onClick={() => addToCart(item)}
                  className={styles.modalButtonAdd}
                >
                  +1
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.modalTotalContainer}>
        <h3>${totalPay()}</h3>
      </div>
      <div className={styles.modalButtonContainer}>
        <button>Checkout</button>
      </div>
    </div>
  );
};
