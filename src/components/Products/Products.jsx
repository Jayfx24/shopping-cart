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
import styles from "./Products.module.css";

export default function Products() {
  const [products, isFilter, setIsFilter, handleCartClick] = useOutletContext();
  const { page } = useParams();
  const navigate = useNavigate();
  const currentPage = Number(page ?? 1);
  const dataLimit = 12;
  const totalPages = Math.ceil(products.length / dataLimit);
  console.log(currentPage);

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
    <div className={styles.content}>
      <ProductList>
        {currentRender.map((item) => (
          <ProductCard product={item} onClick={handleCartClick} />
        ))}
      </ProductList>

      {btnStatus && (
        <div className="row center">
          {currentPage > 1 && <Link to={`../${currentPage - 1}`}>Prev</Link>}
          {totalPages > 1 && (
            <ul className={`${styles.pageNum} row-wrap `}>
              {Array.from({ length: totalPages }, (_, i) => {
                const count = i + 1;
                return (
                  <NavLink
                    key={count}
                    to={`/products/${count}`}
                    className={({ isActive }) =>
                      isActive ? styles.active : " "
                    }
                  >
                    <p>{count}</p>
                  </NavLink>
                );
              })}
            </ul>
          )}
          {currentPage < totalPages && (
            <Link to={`../${currentPage + 1}`}>Next</Link>
          )}
        </div>
      )}
    </div>
  );
}
