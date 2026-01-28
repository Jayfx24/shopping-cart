

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
