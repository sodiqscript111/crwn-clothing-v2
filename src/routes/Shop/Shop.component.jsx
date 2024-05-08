import { useContext } from "react";
import { ProductContext } from "../../contexts/product.contexts";
import Productcard from "../../components/productCard/productcard.component";
import "./shop.styles.scss";
const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <Productcard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
