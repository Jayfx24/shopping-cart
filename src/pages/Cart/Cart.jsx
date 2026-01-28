import { useOutletContext, Link } from "react-router";
import CartProductCard from "../../components/CartProductCard/CartProductCard";
import styles from "./Cart.module.css";

export default function CartPage() {
  const { cart, handleCartDelete, handleCartClick } = useOutletContext();
  console.log(cart);
  const subTotal = Object.values(cart).reduce((acc, { product, count }) => {
    return acc + count * product.price;
  }, 0);
  const deliveryCost = 15;
  const tax = 7.5;
  const totalCost = (subTotal + deliveryCost + subTotal * (tax / 100)).toFixed(
    2,
  );
  const canShow = Object.keys(cart).length > 0;
  console.log(subTotal, totalCost);

  return (
    <section className={styles.cart}>
      {!canShow && (
        <div className={styles.empty}>
          <h2>Nothing in the cart yet </h2>
          <p>
            Go to <Link to="/products">Shop</Link>
          </p>
        </div>
      )}
      {canShow && (
        <div className={`${styles.content} row-col  container`}>
          <div className={styles.list}>
            {Object.entries(cart).map(([k, v]) => (
              <CartProductCard
                key={v.product.id}
                product={v.product}
                count={v.count}
                title={k}
                handleDelete={handleCartDelete}
                onClick={handleCartClick}
              />
            ))}
          </div>
          <div className={styles.summary}>
            <div className={styles.summaryContent}>
              <h2 className={styles.title}>Order Summary</h2>
              <ul className={styles.breakdown}>
                <li className={`row btw`}>
                  <span>Subtotal</span>
                  <span className={styles.itemValue}>
                    ${subTotal.toFixed(2)}
                  </span>
                </li>
                <li className={`row btw`}>
                  <span>Delivery </span>{" "}
                  <span className={styles.itemValue}>${deliveryCost}</span>
                </li>
                <li className={`row btw`}>
                  <span>Pickup </span>
                  <span className={styles.itemValue}>Free</span>
                </li>
                <li className={`row btw`}>
                  <span>Tax </span>
                  <span className={styles.itemValue}>{tax}%</span>
                </li>
              </ul>
              <hr />
              <div className={` ${styles.total} row btw`}>
                Total <span className="total">${totalCost}</span>
              </div>
            </div>
            <button className={styles.checkout}>Checkout</button>
          </div>
        </div>
      )}
    </section>
  );
}
