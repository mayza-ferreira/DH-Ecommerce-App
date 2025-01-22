import { useEffect, useState } from "react";
import { Hero } from "../../Components/ui/Hero/Hero";

const Home = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
