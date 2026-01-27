import { Link } from "react-router"
import styles from "./ErrorPage.module.css"

export default function ErrorPage(){

    return(
        <div className={styles.errPage}>
            <h1 className={styles.title}>PAGE NOT FOUND </h1>
            Back to <Link to="./">  Home</Link>
        </div>
    )
}