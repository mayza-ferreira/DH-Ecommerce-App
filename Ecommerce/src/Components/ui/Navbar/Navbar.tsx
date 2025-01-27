import Logo from "../../../assets/logo.svg";
import cartIcon from "../../../assets/cart.svg";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { CartModal } from "../CartModal/CartModal";
import useCartContext from "../../../hook/useCartContext";
export const Navbar = () => {
  const [showCartModal, setShowCartModal] = useState(false);

  const {
    state: { cartItems },
  } = useCartContext();

  const handleShowCartModal = () => {
    setShowCartModal(!showCartModal);
  };
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarDetail}>
        <img src={Logo} alt="Logo de Ecommerce" width={50} height={50} />
        <div>
          <span>DH Ecommerce</span>
        </div>
      </div>
      <div className={styles.navbarCartContainer}>
        <p className={styles.navbarTextAmount}>{cartItems.length}</p>
        <img src={cartIcon} alt="Cart" onClick={handleShowCartModal} />
      </div>
      {showCartModal && <CartModal handleShowCartModal={handleShowCartModal} />}
    </div>
  );
};
