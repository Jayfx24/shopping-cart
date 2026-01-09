import { useState } from "react";
import { useOutletContext } from "react-router";
import styles from "./Home.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import homeProductSort from "../../utils";

export default function Home() {
  const products = useOutletContext()

  console.log(products)
  if (!products.men) return 
  const sorted = homeProductSort(products)
  const [category, setCategory] = useState("wears");
  const [data, setData] = useState(sorted[category])

  const handleClick = (type) => {
    setCategory(type);
    setData(type)
  };

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

      <section className="show-case">
        <nav className="showcase">
          <ul className="row">
            <li>
              <button className="" onClick={() => handleClick()}>
                New
              </button>
            </li>
            <li>
              <button className="" onClick={() => handleClick("wears")}>
                Ready to Wear
              </button>
            </li>
            <li>
              <button className="" onClick={() => handleClick("men")}>
                Men's Essential
              </button>
            </li>
            <li>
              <button className="" onClick={() => handleClick("women")}>
                Women's Essentials
              </button>
            </li>
            <li>
              <button className="" onClick={() => handleClick("home")}>
                Home Essentials
              </button>
            </li>
          </ul>
        </nav>
        <div className="showcase-content">
          <h2 className="s-title">NEW ARRIVALS</h2>
          <p className="s-sub-title">
            VIEW OUR WHOLE FASHION ASSORTMENT. WE OFFER EVERYTHING FROM CLOTHING
            TO ACCESSORIES.
          </p>

          <div className="s__products">
            <ul className="row-wrap">
              {Object.values(data.products).splice(0,6)?.map((item) => (
                console.log(item),
                <ProductCard {...item} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
