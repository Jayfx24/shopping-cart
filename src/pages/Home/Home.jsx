import { useState } from "react";
import { useOutletContext } from "react-router";
import styles from "./Home.module.css";
import ProductList from "../../components/ProductList/ProductList";
import ProductCard from "../../components/ProductCard/ProductCard";
import homeProductSort from "../../utils";
import Button from "../../components/ui/Button";

export default function Home() {
  const products = useOutletContext();
  const sorted = homeProductSort(products);
  const [category, setCategory] = useState("wears");
  const [data, setData] = useState(sorted[category]);

  const handleClick = (type) => {
    setCategory(type);
    setData(sorted[type]);
  };

  const currentList = Object.values(data.products)
    .splice(0, 6)
    ?.map((item) => <ProductCard {...item} />);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content + " container row"}>
          <div className={styles.texts}>
            <h1 className={styles.title}>Elevate Your Style, Every Day</h1>
            <div className={styles.subTitle}>
              <p>DISCOVER THE LATEST TREND IN FASHION</p>
              <p>EXCLUSIVE DEALS AVAILABLE FOR A LIMITED TIME</p>
            </div>
          </div>
          <div className="hero__carousel"></div>
        </div>
      </section>

      <section className={styles.showcase}>
        <nav className="">
          <ul className={styles.nav}>
            <li>
              <Button className="" onClick={() => handleClick()}>
                New
              </Button>
            </li>
            <li>
              <Button className="" onClick={() => handleClick("wears")}>
                Ready to Wear
              </Button>
            </li>
            <li>
              <Button className="" onClick={() => handleClick("men")}>
                Men's Essential
              </Button>
            </li>
            <li>
              <Button className="" onClick={() => handleClick("women")}>
                Women's Essentials
              </Button>
            </li>
            <li>
              <Button className="" onClick={() => handleClick("home")}>
                Home Essentials
              </Button>
            </li>
          </ul>
        </nav>
        <div className={styles.scContent}>
          <div className={styles.scText}>
            <h2 className={styles.scTitle}>NEW ARRIVALS</h2>
            <p className={styles.scSubtitle}>
              VIEW OUR WHOLE FASHION ASSORTMENT. WE OFFER EVERYTHING FROM
              CLOTHING TO ACCESSORIES.
            </p>
          </div>

          <div className="s__products">
            <ProductList>
              {currentList}
            </ProductList>
          </div>
        </div>
      </section>
    </>
  );
}
