import { useContext } from "react";
import "./productcard.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.contexts";

const Productcard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const addProductCart = () => addItemToCart(product);
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addProductCart} buttonType="inverted">
        Add to cart
      </Button>
    </div>
  );
};

export default Productcard;
