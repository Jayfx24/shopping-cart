import styles from "./ProductCard.module.css";

export default function ProductCard({count, product, onClick }) {
  const cleanCategory = product.category.split("-").join(" ");

  return (
    <article className={styles.card}>
      <div className="img-wrapper">
        <img src={product.images[0]} alt={product.title + "image"} />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{cleanCategory.toUpperCase()}</span>
        <h1 className={styles.title}>{product.title}</h1>
        <h2 className={styles.price}>${product.price}</h2>
      </div>

      <div className="count-wrapper row">
        <button
          id="addItem"
          className="cart__btn"
          onClick={(e) => onClick(e, product)}
        >
          +
        </button>

        <span className="count"> {count ?? 0}</span>

        <button
          id="removeItem"
          className="cart__btn"
          onClick={(e) => onClick(e, product)}
        >
          -
        </button>
      </div>
    </article>
  );
}
