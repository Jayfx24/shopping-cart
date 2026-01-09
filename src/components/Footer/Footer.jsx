// import { MdFacebook } from "react-icons/md";
// import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={`container row-btw ${styles.footer}`}>
      <div className={styles.firstCol}>
        <div className="col">
          <div className="logo-wrapper">
            <h2 className="logo">Who'sStore</h2>
          </div>
          <ul className="socials row">
            <li className="social">Facebook</li>
            <li className="social">X</li>
            <li className="social">Github</li>
            <li className="social">Instagram</li>
          </ul>
        </div>

        <p>2026 ALL RIGHT RESERVED</p>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className="navItem">
            <Link to="/" className="navLink">
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link to="/" className="navLink">
              Store
            </Link>
          </li>
          <li className="navItem">
            <Link to="/" className="navLink">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
