import { Link } from "react-router";
import styles from "./ShopError.module.css";

export default function ShopError() {
  return (
    <div className={styles.errPage}>
      <h1 className={styles.title}>No Products to show </h1>
      Head back to <Link to="/products"> Shop</Link>
    </div>
  );
}
