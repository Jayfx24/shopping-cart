import { Link } from "react-router";
import { ShoppingCart, Home, Store } from "lucide-react";
import styles from './Header.module.css'


export default function Header() {
  
  return (
    <header className={`${styles.header} container row-btw`}>
      <div className="row">
        <div className="logo-wrapper">
          <h1 className="logo">Who'sStore</h1>
        </div>
        <nav>
          <ul className="nav-list row">
            <li className="nav__item">
              <Link to="/" className={`${styles.navLink}`}>Home</Link>
            </li>
            <li className="nav__item">
              <Link to="/" className={`${styles.navLink}`}>Products</Link>
            </li>
            <li className="nav__item">
              <Link to="/" className={`${styles.navLink}`}>Cart</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="">
        <nav className="nav-icons">
          <ul className="nav-list row">
            <li className={`${styles.navIcon}`}>
              <Link to="/" className={`${styles.navIconLink}`}>{<Home />}</Link>
            </li>
            <li className={`${styles.navIcon}`}>
              <Link to="/" className={`${styles.navIconLink}`}>
                <Store />
              </Link>
            </li>
            <li className={`${styles.navIcon}`}>
              <Link to="/" className={`${styles.navIconLink}`}>{<ShoppingCart />}</Link>
            </li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
}
