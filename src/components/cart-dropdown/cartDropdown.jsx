import "./cartDropdown.styles.scss";
import Button from "../button/button.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button buttonType={"google"}>Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
