const categories = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];

export default async function fetchAllProducts(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(`HTTP error! status:${response.status}`);
    }
    const data = await response.json()
    
    return data;
  } catch (error) {
    return error;
  }
}
