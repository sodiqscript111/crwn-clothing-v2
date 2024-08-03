import "./ckeckout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCaart } =
    useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  const incrementHandeler = () => addItemToCart(cartItem);
  const decrementHandler = () => removeItemFromCaart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrrow" onClick={decrementHandler}>
          &#10094;
        </div>
        <span> {quantity}</span>

        <div className="arrow" onClick={incrementHandeler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
