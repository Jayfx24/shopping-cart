import { Link, NavLink } from "react-router";
import { ShoppingCart, Home, Store } from "lucide-react";
import styles from "./Header.module.css";

export default function Header({ count }) {
  return (
    <header className={`${styles.header} container row-col btw`}>
      <h1 className="logo">Store</h1>

      <nav>
        <ul className={`${styles.navList} row`}>
          <li className="nav__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              {<Home size={24} />}
              <span>Home</span>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              <Store size={24} />
              <span>Shop</span>
            </NavLink>
          </li>
          <li className={`nav__item `}>
            <NavLink
              to="cart"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              <span
                data-count={count}
                className={`${styles.navIcon} ${styles.count}`}
              >
                {<ShoppingCart className={styles.count} size={24} />}
              </span>
              <span>Cart</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
