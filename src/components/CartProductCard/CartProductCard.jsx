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
      <div className={styles.img}>
        <img src={product.thumbnail} alt={product.title + "image"} />
      </div>
      <div className={styles.content}>
        <div className="">
          <span className={styles.category}>{cleanCategory.toUpperCase()}</span>
        </div>
        <div className="">
          <h1 className={styles.title}>{product.title}</h1>
          <h2 className={styles.price}>${product.price}</h2>
        </div>
        <div className="row btw">
          <div className="">
            <span className="row">
              Total Cost:
              <h2>${count * product.price}</h2>
            </span>
          </div>
          <div className={"counter"}>
            <span className="count counter--cart"> {count ?? 0}</span>
            <div className={'counter-btns'}>
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
        </div>
      </div>

      <button className={styles.del} onClick={() => handleDelete(title)}>
        x
      </button>
    </article>
  );
}
