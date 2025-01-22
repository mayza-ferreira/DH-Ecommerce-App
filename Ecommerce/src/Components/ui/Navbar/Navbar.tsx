import Logo from "../../../assets/logo.svg";
import cartIcon from "../../../assets/cart.svg";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarDetail}>
        <img src={Logo} alt="Logo de Ecommerce" width={50} height={50} />
        <div>
          <span>DH Ecommerce</span>
        </div>
      </div>
      <div className={styles.navbarCartContainer}>
        <p className={styles.navbarTextAmount}>2</p>
        <img src={cartIcon} alt="Cart" />
      </div>
    </div>
  );
};
