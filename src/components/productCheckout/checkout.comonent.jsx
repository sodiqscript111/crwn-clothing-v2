import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";
const Checkout = () => {
  const { cartItems, quantity } = useContext(CartContext);
  const { price, id, name, imageUrl } = cartItems;

  return (
    <>
      <span>{price}</span>
      <span>{id}</span>
      <span>{name}</span>
      <span>{quantity}</span>
      <span>{imageUrl}</span>
      <span>
        <img src={imageUrl} alt="" />
      </span>
    </>
  );
};

export default Checkout;
