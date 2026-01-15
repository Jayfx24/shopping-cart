import { useState } from "react";
import { useOutletContext } from "react-router";

import Checkbox from "../../components/ui/Checkbox/Checkbox";

export default function Shop() {
  const products = useOutletContext();
  const [currentCategory, setCurrentCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [categoryChecked, setCategoryChecked] = useState(false);
  const [checkedStatus, setCheckedStatus] = useState(Object.keys(products));

  function handleChange(e, category, subCategory = null) {
    const target = e.target;

    //  if category is unchecked remove  its children from selectedCategory
    if (!subCategory && !target.checked) {
      const categoryItems = Object.keys(products[category]);
      const newObj = Object.fromEntries(
        Object.entries(selectedCategory).filter(
          ([key]) => !categoryItems.includes(key)
        )
      );
      console.log(categoryItems);
      console.log(newObj);
      setSelectedCategory(newObj);
      setCheckedStatus((prev) => ({ ...prev, [category]: true }));
      return;
    }

    // add category children
    if (!subCategory) {
      console.log(products[category]);
      setSelectedCategory((prev) => ({
        ...prev,
        ...{ ...products[category] },
      }));
      setCheckedStatus((prev) => ({ ...prev, [category]: false }));

      return;
    }

    // if subCategory is checked / unchecked update selectedCategory according
    const newObj = target.checked
      ? { ...selectedCategory, [subCategory]: products[category][subCategory] }
      : Object.fromEntries(
          Object.entries(selectedCategory).filter(([k]) => k !== subCategory)
        );

    setSelectedCategory(newObj);

    // if unchecked remove from selected Category
    // if main category is selected all child should be selected if one is then selected all should be unselected
    console.log(newObj);
    // setCurrentCategory(newArr);
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
