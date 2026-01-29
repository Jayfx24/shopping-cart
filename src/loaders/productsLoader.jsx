import fetchAllProducts from "../services/api";
import data from "../test.json";
import { shuffle } from "../utils";

export default async function productsLoader() {
  const obj = {};
  const menObj = {};
  const womenObj = {};
  const url = "https://dummyjson.com/products?limit=0";
  let products = null;
  let shuffledProducts = null;
  try {
    const response = await fetchAllProducts(url);
    products = response.products ?? data.products;
    console.log(response, products);
    shuffledProducts = shuffle(products);
    Object.values(shuffledProducts).forEach((item) => {
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
  } catch (err) {
    console.log(err);
  }


  return {
    sortedProducts: {
      men: menObj,
      women: womenObj,
      others: obj,
    },
    unsortedProducts: shuffledProducts,
  };
}
