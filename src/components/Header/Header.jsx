import { Link } from "react-router";
import { ShoppingCart, Home, Store } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={`${styles.header} container row-col btw`}>
      <div className="row-col">
        <h1 className="logo">Who'sStore</h1>

        <nav>
          <ul className={`${styles.navList} row`}>
            <li className="nav__item">
              <Link to="/" className={`${styles.navLink}`}>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="products" className={`${styles.navLink}`}>
                Products
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className={`${styles.navLink}`}>
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <nav className={styles.navIcons}>
        <ul className="nav-list row-col">
          <li className={`${styles.navIcon}`}>
            <Link to="/" className={`${styles.navIconLink}`}>
              {<Home />}
            </Link>
          </li>
          <li className={`${styles.navIcon}`}>
            <Link to="/" className={`${styles.navIconLink}`}>
              <Store />
            </Link>
          </li>
          <li className={`${styles.navIcon}`}>
            <Link to="/" className={`${styles.navIconLink}`}>
              {<ShoppingCart />}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
