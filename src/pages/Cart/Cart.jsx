import { useOutletContext } from "react-router";
import CartProductCard from "../../components/CartProductCard/CartProductCard";
import styles from "./Cart.module.css";

export default function CartPage() {
  const { cart, handleCartDelete } = useOutletContext();
  console.log(cart);
  const totalProductCost = Object.values(cart).reduce()

  return (
    <section className={styles.cart}>
      <div className={styles.list}>
        {Object.entries(cart).map(([k, v]) => (
          <CartProductCard
            product={v.product}
            count={v.count}
            title={k}
            handleDelete={handleCartDelete}
          />
        ))}
      </div>

      <div className={styles.summary}>
        <h2>Total</h2>
        <ul>
            <li className=""><span>Subtotal</span></li>
            <li className=""><span>Delivery</span></li>
            <li className=""><span>Pickup</span></li>
            <li className=""><span>Tax </span></li>
            <li className=""><span></span></li>
        </ul>
      </div>
    </section>
  );
}
