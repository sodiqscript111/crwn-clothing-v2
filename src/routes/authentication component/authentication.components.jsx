import SignIn from "../../components/Sign-up/SignUp.component";
import SignInForm from "../../components/ForSignIn/SignIn.component";
import "./authentication.styles.scss";
const Authentication = () => {
  return (
    <div className="Authentication-container">
      <SignIn />
      <SignInForm />
    </div>
  );
};

export default Authentication;
