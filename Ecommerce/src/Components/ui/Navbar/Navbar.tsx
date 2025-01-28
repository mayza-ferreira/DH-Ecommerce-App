import Logo from "../../../assets/logo.svg";
import cartIcon from "../../../assets/cart.svg";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { CartModal } from "../CartModal/CartModal";
import useCartContext from "../../../hook/useCartContext";
import { useLocation, useNavigate } from "react-router-dom";
export const Navbar = () => {
  const [showCartModal, setShowCartModal] = useState(false);

  const {
    state: { cartItems },
  } = useCartContext();

  const navigate = useNavigate();
  const location = useLocation();

  const handleShowCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  const handleNavigatgeToHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarDetail} onClick={handleNavigatgeToHome}>
        <img src={Logo} alt="Logo de Ecommerce" width={50} height={50} />
        <div>
          <span>DH Ecommerce</span>
        </div>
      </div>
      {location.pathname !== "/checkout" && (
        <>
          <div className={styles.navbarCartContainer}>
            <p className={styles.navbarTextAmount}>{cartItems.length}</p>
            <img src={cartIcon} alt="Cart" onClick={handleShowCartModal} />
          </div>
          {showCartModal && (
            <CartModal handleShowCartModal={handleShowCartModal} />
          )}
        </>
      )}
    </div>
  );
};
