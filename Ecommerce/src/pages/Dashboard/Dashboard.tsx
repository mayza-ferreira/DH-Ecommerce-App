import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Product } from "../../interface";
import { createProduct } from "../../service";

const Dashboard = () => {
  const [product, setProduct] = useState({
    amiiboSeries: "",
    character: "",
    gameSeries: "",
    head: "",
    image: "",
    name: "",
    releaseDate: "",
    tail: "",
    type: "",
    price: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const userLogin = localStorage.getItem("userLogin");
    if (!userLogin) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userLogin");
    navigate("/login");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const mutation = useMutation((newProduct: Product) => {
    return createProduct(newProduct);
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(product);
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Dashboard</h1>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Amiibo Series */}
        <div className={styles.formControlLogin}>
          <label htmlFor="amiiboSeries">Amiibo Series</label>
          <input
            type="text"
            id="amiiboSeries"
            name="amiiboSeries"
            value={product.amiiboSeries}
            onChange={handleChange}
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
            value={product.character}
            onChange={handleChange}
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
            value={product.gameSeries}
            onChange={handleChange}
            required
          />
        </div>
        {/* Head */}
        <div className={styles.formControlLogin}>
          <label htmlFor="head">Head</label>
          <input
            type="text"
            id="head"
            name="head"
            value={product.head}
            onChange={handleChange}
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
            value={product.image}
            onChange={handleChange}
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
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Release Date*/}
        <div className={styles.formControlLogin}>
          <label htmlFor="releaseDate">Release Date</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={product.releaseDate}
            onChange={handleChange}
            required
          />
        </div>
        {/* Tail */}
        <div className={styles.formControlLogin}>
          <label htmlFor="tail">Tail</label>
          <input
            type="text"
            id="tail"
            name="tail"
            value={product.tail}
            onChange={handleChange}
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
            value={product.type}
            onChange={handleChange}
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
            value={product.price}
            onChange={handleChange}
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
