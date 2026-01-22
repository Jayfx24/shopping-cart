import styles from "./CartProductCard.module.css";

export default function CartProductCard({
  product,
  count,
  title,
  onClick,
  handleDelete,
}) {
  const cleanCategory = product.category.split("-").join(" ");
  console.log(product);
  return (
    <article className={styles.card}>
      <div className="row">
        <div className={styles.img}>
          <img src={product.thumbnail} alt={product.title + "image"} />
        </div>
        <div className={styles.content}>
          <span className={styles.category}>{cleanCategory.toUpperCase()}</span>
          <h1 className={styles.title}>{product.title}</h1>
          <h2 className={styles.price}>${product.price}</h2>
        </div>
      </div>

      <div className="count-wrapper row">
        <button
          id="addItem"
          className="cart__btn"
          onClick={(e) => onClick(e, product)}
        >
          +
        </button>

        <span className="count"> {count}</span>

        <button
          id="removeItem"
          className="cart__btn"
          onClick={(e) => onClick(e, product)}
        >
          -
        </button>
      </div>

      <div className="">
        <p> Count Price </p>
        <h2>${count * product.price}</h2>
      </div>

      <button className={styles.del} onClick={() => handleDelete(title)}>
        x
      </button>
    </article>
  );
}
