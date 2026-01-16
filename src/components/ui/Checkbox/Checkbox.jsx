import styles from './Checkbox.module.css'


export default function Checkbox({ id, label, onChange, isChecked }) {
  return (
    <div className={styles.checkBox}>
      <input type="checkbox" id={id} onChange={onChange} checked={isChecked} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
