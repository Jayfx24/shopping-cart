import { useEffect } from "react";
import {
  useParams,
  useOutletContext,
  useNavigate,
  NavLink,
  Link,
} from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import ProductList from "../ProductList/ProductList";

export default function Products() {
  const [products, isFilter, setIsFilter, handleCartClick] = useOutletContext();
  const { page } = useParams();
  const navigate = useNavigate();
  const currentPage = Number(page ?? 1);
  const dataLimit = 12;
  const totalPages = Math.ceil(products.length / dataLimit);


  useEffect(() => {
    if (isFilter) {
      navigate(`../`);
      setIsFilter(false);
    }
  }, [isFilter, setIsFilter, navigate, currentPage]);
  const paginatedItems = products.slice(
    (currentPage - 1) * dataLimit,
    currentPage * dataLimit,
  );

  const currentRender = products.length > dataLimit ? paginatedItems : products;
  const btnStatus = products.length > dataLimit ? true : false;

  const handleNext = () => {
    navigate(`../${currentPage + 1}`);
  };

  const handlePrevious = () => {
    navigate(`../${currentPage - 1}`);
  };

  return (
    <div className="">
      <ProductList>
        {currentRender.map((item) => (
          <ProductCard product={item}  onClick={handleCartClick}/>
        ))}
      </ProductList>

      <ul className="row-wrap">
        {Array.from({ length: totalPages }, (_, i) => {
          const count = i + 1;
          return (
            <NavLink
              key={count}
              to={`/products/${count}`}
              className={({ isActive }) =>
                isActive ? "p-active" : "p-pending"
              }
            >
              <p>{count}</p>
            </NavLink>
          );
        })}
      </ul>

      {btnStatus && (
        <div className="">
          {currentPage > 1 && <button onClick={handlePrevious}>Left</button>}
          {currentPage < totalPages && (
            <button onClick={handleNext}>Right</button>
          )}
        </div>
      )}
    </div>
  );
}
