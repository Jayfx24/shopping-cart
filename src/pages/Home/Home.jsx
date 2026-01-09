import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content + " container row"}>
          <div className={styles.texts}>
            <h1 className={styles.title}>Elevate Your Style, Every Day</h1>
            <div className={styles.subTitle}>
              <p>DISCOVER THE LATEST TREND IN FASHION</p>
              <p>EXCLUSIVE DEALS AVAILABLE FOR A LIMITED TIME</p>
            </div>
          </div>
          <div className="hero__carousel"></div>
        </div>
      </section>

      <section className="show-case">
        

      </section>
    </>
  );
}
