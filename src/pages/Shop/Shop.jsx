import { useState } from "react";
import { useOutletContext } from "react-router";
import { Van, Headset, RefreshCw } from "lucide-react";
import Checkbox from "../../components/ui/Checkbox/Checkbox";
import ProductList from "../../components/ProductList/ProductList";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./Shop.module.css";

export default function Shop() {
  const { sortedProducts, unsortedProducts } = useOutletContext();
  const [selectedCategory, setSelectedCategory] = useState({});
  const [checkedStatus, setCheckedStatus] = useState({});
  const allSelectedItems = Object.values(selectedCategory).flat();

  const productsToRender =
    Object.keys(selectedCategory).length > 1
      ? allSelectedItems
      : unsortedProducts;

  function handleChange(e, category, subCategory = null) {
    const target = e.target;

    //  if category is unchecked remove  its children from selectedCategory
    if (!subCategory && !target.checked) {
      const categoryItems = Object.keys(sortedProducts[category]);
      const newSelected = Object.fromEntries(
        Object.entries(selectedCategory).filter(
          ([key]) => !categoryItems.includes(key)
        )
      );

      // uncheck subs
      const categorySubs = Object.fromEntries(
        Object.keys(sortedProducts[category]).map((i) => [i, false])
      );

      setSelectedCategory(newSelected);
      setCheckedStatus((prev) => ({ ...prev, ...categorySubs }));
      return;
    }

    // add category children
    if (!subCategory) {
      const categorySubs = Object.fromEntries(
        Object.keys(sortedProducts[category]).map((i) => [i, true])
      );

      setCheckedStatus((prev) => ({ ...prev, ...categorySubs }));
      setSelectedCategory((prev) => ({
        ...prev,
        ...{ ...sortedProducts[category] },
      }));

      return;
    }

    // Toggle sub category
    let newSelected;
    if (target.checked) {
      newSelected = {
        ...selectedCategory,
        [subCategory]: sortedProducts[category][subCategory],
      };

      setCheckedStatus((prev) => ({ ...prev, [subCategory]: true }));
    } else {
      newSelected = Object.fromEntries(
        Object.entries(selectedCategory).filter(([k]) => k !== subCategory)
      );
      setCheckedStatus((prev) => ({ ...prev, [subCategory]: false }));
    }

    setSelectedCategory(newSelected);
    console.log(selectedCategory);
  }

  return (
    <section className={`${styles.shop} container`}>
      <aside className={`${styles.aside} `}>
        <div className="categories">
          <h2>Category</h2>
          {Object.entries(sortedProducts).map(([category, values]) => {
            return (
              <fieldset key={`all-${category}`}>
                <legend>
                  <Checkbox
                    label={category}
                    id={`all-${category}`}
                    onChange={(e) => handleChange(e, category)}
                  />
                </legend>

                <div className={styles.filterSub}>
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
        <div className="price-filter">
          <h2>Price</h2>

          <input
            type="range"
            name="price-range"
            id="price-range"
            min={0}
            max={100}
            value={0}
          />
        </div>

        <div className="price-input">
          <label htmlFor="price-from">
            $
            <input type="number" name="price-from" id="price-from" />
          </label>
          <span> To </span>
          <label htmlFor="price-to">
            $
            <input type="number" name="price-to" id="price-to" />
          </label>
        </div>

        <div className="s">
          <h2>Shipping & Delivery</h2>

          <div className="s-i">
            <Van />
            <div className="s-t">
              <p className="s-title"> Free Shipping </p>
              <p className="s-sub">Free Shipping WorldWide for Our clients</p>
            </div>
          </div>
          <div className="s-i">
            <Headset />
            <div className="s-t">
              <p className="s-title"> Support 24/7 </p>
              <p className="s-sub">Round the clock support</p>
            </div>
          </div>
          <div className="s-i">
            <RefreshCw />
            <div className="s-t">
              <p className="s-title"> 30 days Return </p>
              <p className="s-sub"> Easy 30 days return for Our clients</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="list">{<Pagination products={productsToRender} />}</div>
    </section>
  );
}
