import { useState } from "react";
import { useOutletContext, Outlet, Link } from "react-router";
import { Van, Headset, RefreshCw } from "lucide-react";
import Checkbox from "../../components/ui/Checkbox/Checkbox";
import styles from "./Shop.module.css";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

export default function Shop() {
  const { sortedProducts, unsortedProducts, handleCartClick, cart } =
    useOutletContext();
  const [selectedCategory, setSelectedCategory] = useState({});
  const [checkedStatus, setCheckedStatus] = useState({});
  const allSelectedItems = Object.values(selectedCategory).flat();
  const [isFilter, setIsFilter] = useState(false);

  const productsToRender =
    Object.keys(selectedCategory).length > 0
      ? allSelectedItems
      : unsortedProducts;

  function handleChange(e, category, subCategory = null) {
    const target = e.target;
    setIsFilter(true);

    //  if category is unchecked remove  its children from selectedCategory
    if (!subCategory && !target.checked) {
      const categoryItems = Object.keys(sortedProducts[category]);
      const newSelected = Object.fromEntries(
        Object.entries(selectedCategory).filter(
          ([key]) => !categoryItems.includes(key),
        ),
      );

      // uncheck subs
      const categorySubs = Object.fromEntries(
        Object.keys(sortedProducts[category]).map((i) => [i, false]),
      );

      setSelectedCategory(newSelected);
      setCheckedStatus((prev) => ({ ...prev, ...categorySubs }));
      return;
    }

    // add category children
    if (!subCategory) {
      const categorySubs = Object.fromEntries(
        Object.keys(sortedProducts[category]).map((i) => [i, true]),
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
        Object.entries(selectedCategory).filter(([k]) => k !== subCategory),
      );
      setCheckedStatus((prev) => ({ ...prev, [subCategory]: false }));
    }

    setSelectedCategory(newSelected);
    
  }

  return (
    <section className={`${styles.shop} container row-col`}>
      <aside className={`${styles.aside} `}>
        <div className={styles.categories}>
          <div className="row btw">
            <h2>Filter</h2>
  
          </div>

          {Object.entries(sortedProducts).map(([category, values]) => {
            return (
              <details key={category} name="category" className={styles.category}>
                <summary className="row btw">
                  {category}
                  <ChevronDown className="d-icon" />
                </summary>
                <div className={styles.checkboxes}>
                  <div className={styles.selectAll}>
                    <label htmlFor="">Toggle all</label>
                    <input
                      type="checkbox"
                      label={category}
                      id={`all-${category}`}
                      onChange={(e) => handleChange(e, category)}
                    />
                  </div>
                  <ul key={`all-${category}`} className={styles.filterSub}>
                    {Object.entries(values).map(([subCategory, _]) => {
                      const isSelected = checkedStatus[subCategory] ?? false;
                      const cleanSubeCategory = subCategory.replace(/-/g," ") 
                      return (
                        <Checkbox
                          key={`${subCategory}`}
                          label={cleanSubeCategory}
                          id={subCategory}
                          onChange={(e) => handleChange(e, category, subCategory)}
                          isChecked={isSelected}
                        />
                      );
                    })}
                  </ul>
                </div>
              </details>
            );
          })}
        </div>
        
        <div className={`${styles.shipping} hide-m`}>
          <h2>Shipping & Delivery</h2>

          <div className={styles.info}>
            <div className="s-i">
              <Van size={42}/>
              <div className="s-t">
                <p className="s-title"> <strong>Free Shipping</strong> </p>
                <p className="s-sub">Free Shipping WorldWide for Our clients</p>
              </div>
            </div>
            <div className="s-i">
              <Headset size={42} />
              <div className="s-t">
                <p className="s-title"> <strong>Support 24/7</strong> </p>
                <p className="s-sub">Round the clock support</p>
              </div>
            </div>
            <div className="s-i">
              <RefreshCw size={42} />
              <div className="s-t">
                <p className="s-title"> <strong>30 days Return </strong></p>
                <p className="s-sub"> Easy 30 days return for Our clients</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div className={styles.content}>
        <div id="products" className={styles.products}>
          
            <h2>Products</h2>
          {
            <Outlet
              context={[
                productsToRender,
                isFilter,
                setIsFilter,
                handleCartClick,
                cart
              ]}
            />
          }
        </div>
        <div className={styles.bonus}>
          <h2>40%</h2>
          <p>Fashion Sales</p>
          <Link to="/products">Shop Now</Link>
        </div>
      </div>
    </section>
  );
}
