import { Table } from "../../Components/ui/Table/Table";
import styles from "./Checkout.module.css";
const Checkout = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Checkout</h1>
      <div className={styles.grid}>
        <div className={styles.tableContainer}>
          <Table />
        </div>
        <div>{/* Formulario Tarjeta */}</div>
      </div>
    </div>
  );
};

export default Checkout;
