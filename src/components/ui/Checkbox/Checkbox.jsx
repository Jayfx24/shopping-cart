import styles from "./Checkbox.module.css";

export default function Checkbox({ id, label, onChange, isChecked }) {
  return (
    <li className={styles.checkBox}>
      <label htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        checked={isChecked}
        className={styles.box}
      />
    </li>
  );
}
