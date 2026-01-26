import styles from "./ProductCard.module.css";

export default function ProductCard({ count, product, onClick }) {
  const cleanCategory = product.category.split("-").join(" ");

  const statusMap = {
    "In Stock": styles.inStock,
    "Low Stock": styles.lowStock,
  };
  const status = statusMap[product.availabilityStatus] ?? styles.outStore;
  const isAvailable = product.availabilityStatus !== "Out of Stock";
  
  return (
    <article className={styles.card}>
      <div className={styles.imgWrapper }>
        <img src={product.images[0]} className={styles.productImg} alt={product.title + "image"} />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{cleanCategory.toUpperCase()}</span>
        <div className={styles.texts}>
          <h1 className={styles.title}>{product.title}</h1>
          <h2 className={styles.price}>${product.price}</h2>
        </div>
      </div>

      {isAvailable && (
        <div className={'counter'}>
          <span className="count counter--product"> {count ?? 0}</span>
          <div className={styles.btns}>
            <button
              id="removeItem"
              className="cart__btn"
              onClick={(e) => onClick(e, product)}
            >
              -
            </button>
            <button
              id="addItem"
              className="cart__btn"
              onClick={(e) => onClick(e, product)}
            >
              +
            </button>
          </div>
        </div>
      )}
      <div className={`${styles.status} ${status ?? styles.outStock}`}>
        <span>{product.availabilityStatus}</span>
      </div>
    </article>
  );
}
