import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userLogin = localStorage.getItem("userLogin");
    if (!userLogin) {
      navigate("login");
    }
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h1>Dashboard</h1>
        <button className={styles.logoutButton}>Logout</button>
      </div>
      <form>
        {/* Amiibo Series */}
        <div className={styles.formControlLogin}>
          <label htmlFor="amiiboSeries">Amiibo Series</label>
          <input
            type="text"
            id="amiiboSeries"
            name="amiiboSeries"
            value={""}
            onChange={() => {}}
            required
          />
        </div>
        {/* Character */}
        <div className={styles.formControlLogin}>
          <label htmlFor="character">Character</label>
          <input
            type="text"
            id="character"
            name="character"
            value={""}
            onChange={() => {}}
            required
          />
        </div>
        {/* Game Series */}
        <div className={styles.formControlLogin}>
          <label htmlFor="gameSeries">Game Series</label>
          <input
            type="text"
            id="gameSeries"
            name="gameSeries"
            value={""}
            onChange={() => {}}
            required
          />
        </div>
        {/* Head */}
        <div className={styles.formControlLogin}>
          <label htmlFor="head">Head</label>
          <input
            type="number"
            id="head"
            name="head"
            value={""}
            onChange={() => {}}
            required
          />
        </div>
        {/* Image */}
        <div className={styles.formControlLogin}>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            id="image"
            name="image"
            value={""}
            onChange={() => {}}
            required
          />
        </div>
        {/* Name */}
        <div className={styles.formControlLogin}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={""}
            onChange={() => {}}
            required
          />
        </div>
        {/* Release*/}
        <div className={styles.formControlLogin}>
          <label htmlFor="release">Release</label>
          <input
            type="date"
            id="release"
            name="release"
            value={""}
            onChange={() => {}}
            required
          />
        </div>
        {/* Tail */}
        <div className={styles.formControlLogin}>
          <label htmlFor="tail">Tail</label>
          <input
            type="number"
            id="tail"
            name="tail"
            value={""}
            onChange={() => {}}
            required
          />
        </div>
        {/* Type */}
        <div className={styles.formControlLogin}>
          <label htmlFor="type">Type</label>
          <input
            type="text"
            id="type"
            name="type"
            value={""}
            onChange={() => {}}
            required
          />
        </div>
        {/* Price */}
        <div className={styles.formControlLogin}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={""}
            onChange={() => {}}
            required
          />
        </div>
        <button className={styles.formControlLogin} type="submit">
          Add product
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
