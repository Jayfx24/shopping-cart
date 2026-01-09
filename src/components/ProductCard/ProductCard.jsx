import styles from "./ProductCard.module.css";

export default function ProductCard({ category, price, title, images }) {
  const cleanCategory = category.split("-").join(" ");

  return (
    <article className={styles.card}>
      <div className="img-wrapper">
        <img src={images[0]} alt={title + "image"} />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{cleanCategory.toUpperCase()}</span>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.price}>${price}</h2>
      </div>
    </article>
  );
}
