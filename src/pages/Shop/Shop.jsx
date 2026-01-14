import { useState } from "react";
import { useOutletContext } from "react-router";

import Checkbox from "../../components/ui/Checkbox/Checkbox";

export default function Shop() {
  const products = useOutletContext();
  const [currentCategory, setCurrentCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});

  function handleChange(e, category, subCategory = null) {
    const target = e.target;
    if (!subCategory) return setCurrentCategory(category); //show all in that category

    console.log(products[category][subCategory]);
    const newObj = target.checked
      ? [...currentCategory, subCategory]
      : currentCategory.filter((item) => item !== subCategory);

    const selectedCategories = {};
    Object.entries(products).map(([k, v]) => {
      setSelectedCategory((prev) => ({
        ...prev,
        [subCategory]: products[category][subCategory],
      }));
      console.log(selectedCategories);
    });
    // if unchecked remove from selected Category
    // if main category is selected all child should be selected if one is then selected all should be unselected
    console.log(products);
    setCurrentCategory(newObj);
  }

  return (
    <section className="products">
      <aside>
        <div className="categories">
          {Object.entries(products).map(([category, values]) => {
            return (
              <fieldset key={`all-${category}`}>
                <legend>
                  <Checkbox
                    label={category}
                    id={`all-${category}`}
                    onChange={(e) => handleChange(e, category)}
                  />
                </legend>

                <div className="filter__sub">
                  {Object.entries(values).map(([k, v]) => (
                    <Checkbox
                      key={`${category}-${k}`}
                      label={k}
                      id={k}
                      onChange={(e) => handleChange(e, category, k)}
                    />
                  ))}
                </div>
              </fieldset>
            );
          })}
        </div>
      </aside>

      <div className="list">
        {/* <h1>{currentCategory}</h1>
        <code>{currentCategory}</code> */}
        {console.log(selectedCategory)}
      </div>
    </section>
  );
}
