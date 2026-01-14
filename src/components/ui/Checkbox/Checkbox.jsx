export default function Checkbox({id,label,onChange}) {
  return (
    <label htmlFor={label}>
      <input type="checkbox" id={id} onChange={onChange}/> {label}{" "}
    </label>
  );
}
