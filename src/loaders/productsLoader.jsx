
import fetchAllProducts from "../services/api"
import data from "../test.json";

export default async function productsLoader() {
  const obj = {};
  const menObj = {};
  const womenObj = {};
  try {
    // const response = await fetchAllProducts(url);

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
  } catch (err) {
    console.log(err);
  }
  console.log(obj)

  return {
    sortedProducts: {
      men: menObj,
      women: womenObj,
      others: obj,
    },
    unsortedProducts: data.products,
  };
}
