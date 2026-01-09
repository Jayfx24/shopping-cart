import { useState, useEffect } from "react";
import fetchAllProducts from "../services/api";
import data from "../test.json";

export default function useSortProduct() {
  const [products, setProducts] = useState({
    men: null,
    women: null,
    others: null,
  });

  // const url = "https://dummyjson.com/products?limit=0";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await fetchAllProducts(url);
        const obj = {};
        const menObj = {};
        const womenObj = {};

        Object.values(data.products).forEach((item) => {
          const product = item;
          const isMen = product.category.startsWith("men");
          const isWomen = product.category.startsWith("women");

          if (isMen)
            Object.hasOwn(menObj, product.category)
              ? menObj[product.category].push(product)
              : (menObj[product.category] = [product]);

          if (isWomen)
            Object.hasOwn(womenObj, product.category)
              ? womenObj[product.category].push(product)
              : (womenObj[product.category] = [product]);

          if (!isMen && !isWomen)
            Object.hasOwn(obj, product.category)
              ? obj[product.category].push(product)
              : (obj[product.category] = [product]);
        });

        setProducts({
          men: { ...menObj },
          women: { ...womenObj },
          others: { ...obj },
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  return {
    products,
  };
}
