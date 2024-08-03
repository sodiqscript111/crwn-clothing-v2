import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.contexts";

import "./cartDropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cartItem/cartItem.component";

const CartDropdown = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Button is active");
    navigate("/checkout");
  };
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <Button buttonType={"google"} onClick={handleClick}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartDropdown;
