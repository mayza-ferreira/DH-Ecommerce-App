import { useQuery } from "react-query";
import { Toaster } from "sonner";
import { CardProduct } from "../../Components/ui/CardProduct";
import { Hero } from "../../Components/ui/Hero";
import { getProducts } from "../../service";
import styles from "./Home.module.css";
import { useState } from "react";

const Home = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery(
    ["products", page],
    () => getProducts(page),
    { keepPreviousData: true }
  );

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <Hero />
      <Toaster richColors />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <div className={styles.container}>
        {data?.data?.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <button
          onClick={handlePreviousPage}
          className={styles.paginationButton}
          disabled={page === 1}
        >
          previous page
        </button>
        <div className={styles.paginationActive}>
          <span>{page}</span>
        </div>
        <button className={styles.paginationButton} onClick={handleNextPage}>
          next page
        </button>
      </div>
    </>
  );
};

export default Home;
