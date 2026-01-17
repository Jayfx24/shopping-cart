import { useState } from "react";
import { useOutletContext } from "react-router";
import styles from "./Home.module.css";
import ProductList from "../../components/ProductList/ProductList";
import ProductCard from "../../components/ProductCard/ProductCard";
import homeProductSort from "../../utils";
import Button from "../../components/ui/Button";
import urbanCImg from "../../assets/images/Urban Contemplation.webp";
import urbanGImg from "../../assets/images/Urban Group Portrait.webp";
import urbanYImg from "../../assets/images/Stylish Person in Yellow Coat.webp";
import urbanPImg from "../../assets/images/Urban Portrait with Vibrant Lights.webp";

export default function Home() {
  const { products } = useOutletContext();
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
    <div className={styles.home}>
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

      <section className={styles.showcase + " " + "container"}>
        <nav className="">
          <ul className={styles.nav + " " + "row"}>
            <li>
              <Button
                className={category === "x" ? "active-cat" : ""}
                onClick={() => handleClick()}
              >
                New
              </Button>
            </li>
            <li>
              <Button
                className={category === "wears" ? "active-cat" : ""}
                onClick={() => handleClick("wears")}
              >
                Ready to Wear
              </Button>
            </li>
            <li>
              <Button
                className={category === "men" ? "active-cat" : ""}
                onClick={() => handleClick("men")}
              >
                Men's Essential
              </Button>
            </li>
            <li>
              <Button
                className={category === "women" ? "active-cat" : ""}
                onClick={() => handleClick("women")}
              >
                Women's Essentials
              </Button>
            </li>
            <li>
              <Button
                className={category === "home" ? "active-cat" : ""}
                onClick={() => handleClick("home")}
              >
                Home Essentials
              </Button>
            </li>
          </ul>
        </nav>
        <div className={styles.scContent}>
          <div className={styles.scText}>
            <h2 className={styles.scTitle}>{data.text.title}</h2>
            <p className={styles.scSubtitle}>{data.text.subtitle}</p>
          </div>

          <div className="s__products">
            <ProductList>{currentList}</ProductList>
          </div>
        </div>
      </section>

      <section className={styles.twoCol + " " + "container"}>
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

      <section className="info container">
        <div className={`row-btw ${styles.infoText}`}>
          <h2>ADJUST TO YOUR EVERYDAY CLOTHING NEEDS!</h2>

          <p> GET READY FOR AN ELECTRIFYING SHOPPING EXPERIENCE!</p>
        </div>

        <div className={styles.full}>
          <img src={urbanGImg} alt="" className={styles.fullImg} />
          {/* <div className="">
            <img src={urbanYImg} alt="" />
            <img src={urbanPImg} alt="" />
          </div> */}
        </div>
      </section>
    </div>
  );
}
