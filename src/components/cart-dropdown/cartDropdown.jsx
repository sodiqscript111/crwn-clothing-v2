import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";
import Checkout from "../productCheckout/checkout.comonent";

import "./cartDropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cartItem/cartItem.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <Button buttonType={"google"} onClick={Checkout}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartDropdown;
