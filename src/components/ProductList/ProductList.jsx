import styles from './ProductList.module.css'


export default function ProductList({children}){
    return (
        <ul className={styles.list}>
            {children}
        </ul>
    )
}