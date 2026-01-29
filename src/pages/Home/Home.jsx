import { useState } from "react";
import { useOutletContext } from "react-router";
import styles from "./Home.module.css";
import ProductList from "../../components/ProductList/ProductList";
import ProductCard from "../../components/ProductCard/ProductCard";
import homeProductSort from "../../utils";
import Button from "../../components/ui/Button";
import urbanCImg from "../../assets/images/Urban Contemplation.webp";
import urbanGImg from "../../assets/images/Urban Group Portrait.webp";

export default function Home() {
  const { sortedProducts, handleCartClick, cart } = useOutletContext();
  const sorted = homeProductSort(sortedProducts);
  const [category, setCategory] = useState("wears");
  const [data, setData] = useState(sorted[category]);
  const catalog = ["wears", "men", "women", "home"];
  const handleClick = (type) => {
    setCategory(type);
    setData(sorted[type]);
  };
 
  const currentList = Object.values(data.products)
    .splice(0, 8)
    ?.map((item) => {
      const count = cart[item.title] ? cart[item.title].count : 0;

      return (
        <ProductCard
          key={item.id}
          product={item}
          count={count}
          onClick={handleCartClick}
        />
      );
    });

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.content + " container row-col"}>
          <div className={styles.texts}>
            <h1 className={styles.title}>Elevate Your <span>Style,</span> Every Day</h1>
            <div className={styles.subTitle}>
              <p>DISCOVER THE LATEST TREND IN FASHION</p>
              <p>EXCLUSIVE DEALS AVAILABLE FOR A LIMITED TIME</p>
            </div>
          </div>
          <div className="hero__carousel"></div>
        </div>
      </section>

      <section className={styles.showcase + " " + "container"}>
        <nav className="">
          <ul className={styles.nav + " " + "row-col"}>
            <li>
              <Button
                className={category === catalog[0] ? "active-cat" : ""}
                onClick={() => handleClick(catalog[0])}
              >
                Ready to Wear
              </Button>
            </li>
            <li>
              <Button
                className={category === catalog[1] ? "active-cat" : ""}
                onClick={() => handleClick(catalog[1])}
              >
                Men's Essential
              </Button>
            </li>
            <li>
              <Button
                className={category === catalog[2] ? "active-cat" : ""}
                onClick={() => handleClick(catalog[2])}
              >
                Women's Essentials
              </Button>
            </li>
            <li>
              <Button
                className={category === catalog[3] ? "active-cat" : ""}
                onClick={() => handleClick(catalog[3])}
              >
                Home Essentials
              </Button>
            </li>
          </ul>
        </nav>
        <div className={styles.scContent}>
          <div className={styles.scText}>
            <h2 className={styles.scTitle} data-testid="catalog-heading">
              {data.text.title}
            </h2>
            <p className={styles.scSubtitle}>{data.text.subtitle}</p>
          </div>

          <div className="s__products">
            <ProductList>{currentList}</ProductList>
          </div>
        </div>
      </section>

      <section className={styles.twoCol}>
        <img
          src={urbanCImg}
          alt="Urban Contemplation"
          className={styles.colImg}
        />

        <div className={styles.colTexts}>
          <h2 className={styles.colTitle}>ACE COLLECTION</h2>
          <div className={styles.colSubTexts}>
            <p className={styles.colSubtitle}>
              ESSENTIALS THAT ARE ANYTHING BUT BASIC
            </p>
            <p className="">
              EVERY DAY WEAR. THE ACE COLLECTION MAKES YOUR CLOSET LESS LONELY
              WITH LONG-LASTING. TIMELESS STAPLES GET DRESSED. STOCK YOUR
              WARDROBE sMTH ESSENTIALS THAT ARE ANYTHING BASIC.
            </p>
          </div>
        </div>
      </section>

      <section className="info ">
        <div className={`row-col btw ${styles.infoText} container`}>
          <h2>ADJUST TO YOUR EVERYDAY CLOTHING NEEDS!</h2>

          <p> GET READY FOR AN ELECTRIFYING SHOPPING EXPERIENCE!</p>
        </div>

        <div className={styles.full}>
          <img src={urbanGImg} alt="" className={styles.fullImg} />
        </div>
      </section>
    </div>
  );
}
