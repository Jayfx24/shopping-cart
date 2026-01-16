import { useState } from "react";
import { useOutletContext } from "react-router";

import Checkbox from "../../components/ui/Checkbox/Checkbox";

export default function Shop() {
  const products = useOutletContext();
  const [currentCategory, setCurrentCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [checkedStatus, setCheckedStatus] = useState({});

  // if unchecked remove from selected Category
  // if main category is selected all child should be selected if one is then selected all should be unselected

  function handleChange(e, category, subCategory = null) {
    const target = e.target;
    console.log(checkedStatus);
    //  if category is unchecked remove  its children from selectedCategory
    if (!subCategory && !target.checked) {
      const categoryItems = Object.keys(products[category]);
      const newSelected = Object.fromEntries(
        Object.entries(selectedCategory).filter(
          ([key]) => !categoryItems.includes(key)
        )
      );

      // uncheck subs
      const categorySubs = Object.fromEntries(
        Object.keys(products[category]).map((i) => [i, false])
      );

      setSelectedCategory(newSelected);
      setCheckedStatus((prev) => ({ ...prev, ...categorySubs }));
      return;
    }

    // add category children
    if (!subCategory) {
      const categorySubs = Object.fromEntries(
        Object.keys(products[category]).map((i) => [i, true])
      );

      setCheckedStatus((prev) => ({ ...prev, ...categorySubs }));
      setSelectedCategory((prev) => ({
        ...prev,
        ...{ ...products[category] },
      }));
      return;
    }

    let newSelected;
    if (target.checked) {
      newSelected = {
        ...selectedCategory,
        [subCategory]: products[category][subCategory],
      };

      setCheckedStatus((prev) => ({ ...prev, [subCategory]: true }));
    } else {
      newSelected = Object.fromEntries(
        Object.entries(selectedCategory).filter(([k]) => k !== subCategory)
      );
      setCheckedStatus((prev) => ({ ...prev, [subCategory]: false }));
    }

    setSelectedCategory(newSelected);
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
                  {Object.entries(values).map(([subCategory, _]) => {
                    const isSelected = checkedStatus[subCategory] ?? false;
                    return (
                      <Checkbox
                        key={`${category}-${subCategory}`}
                        label={subCategory}
                        id={subCategory}
                        onChange={(e) => handleChange(e, category, subCategory)}
                        isChecked={isSelected}
                      />
                    );
                  })}
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
