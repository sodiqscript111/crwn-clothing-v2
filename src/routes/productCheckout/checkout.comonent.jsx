import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Button from "../../components/button/button.component";
import "./checkout.styles.scss";
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      <div>
        {cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItems.id} cartItem={cartItem} />;
        })}
      </div>
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
