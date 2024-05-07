import { useState } from "react";
import Button from "../button/button.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocsFromAuth,
} from "../../utils/firebase/firrebase.utils";

import FormInput from "../form-input/form-input.component";
import "./SignIn.styles.scss";

const defaultFormFeilds = {
  displayName: "",
  email: " ",
  password: "",
  confirmPassword: "",
};

const SignInForm = () => {
  const [formFeild, setformfeild] = useState(defaultFormFeilds);
  const { displayName, email, password, confirmPassword } = formFeild;

  const resetFormFields = () => {
    setformfeild(defaultFormFeilds);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password is incorrect");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocsFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {}
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformfeild({ ...formFeild, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Dont have an account </h2>
      <span>Sign in up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
          label="Display Name"
        />

        <FormInput
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          label="Email"
        />

        <FormInput
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          label="Password"
        />

        <FormInput
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignInForm;
