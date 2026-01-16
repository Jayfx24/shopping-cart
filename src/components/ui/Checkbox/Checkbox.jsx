export default function Checkbox({ id, label, onChange, isChecked }) {

  return (
    <label htmlFor={label}>
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        checked={isChecked}
      />{" "}
      {label}{" "}
    </label>
  );
}
