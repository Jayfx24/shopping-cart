import { useOutletContext } from "react-router";
import Checkbox from "../../components/ui/Checkbox/Checkbox";

export default function Shop() {
  const products = useOutletContext();

  return (
    <section className="products">
      <aside>
        <div className="categories">
          {Object.entries(products).map(([category, values]) => {
            return (
              <fieldset key={`all-${category}`}>
                <legend>
                  <Checkbox label={category} id={`all-${category}`} />
                </legend>

                <div className="filter__sub">
                  {Object.entries(values).map(([k, v], i) => (
                    <Checkbox key={`${category}-${k}`} label={k} id={k} />
                  ))}
                </div>
              </fieldset>
            );
          })}
        </div>
      </aside>
    </section>
  );
}
