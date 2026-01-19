import { useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import ProductList from "../ProductList/ProductList";

export default function Pagination({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const dataLimit = 12;
  const paginatedItems = products.slice(
    (currentPage - 1) * dataLimit,
    currentPage * dataLimit,
  );

  const currentRender = products.length > dataLimit ? paginatedItems : products;
  const btnStatus = products.length > dataLimit ? true : false;

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="">
      <ProductList>
        {currentRender.map((item) => (
          <ProductCard {...item} />
        ))}
      </ProductList>

      {btnStatus && (
        <div className="">
          {currentPage > 1 && <button onClick={handlePrevious}>Left</button>}
          {currentPage < (products.length / dataLimit) && (
            <button onClick={handleNext}>Right</button>
          )}
        </div>
      )}
    </div>
  );
}
