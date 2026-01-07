import { useState, useEffect } from "react";
import fetchAllProducts from "../services/api";

export default function useSortProduct() {
  const [products, setProducts] = useState();
  const url = "https://dummyjson.com/products?limit=0";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchAllProducts(url);
        console.log(response)
        setProducts(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
}, []);




  return{
    products
  }
}
