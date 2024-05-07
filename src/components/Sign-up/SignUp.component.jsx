import { useState } from "react";
import Button from "../button/button.component";
import {
  createUserDocsFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firrebase.utils";

import FormInput from "../form-input/form-input.component";
import "./SignUp.styles.scss";

const defaultFormFeilds = {
  password: "",
  email: " ",
};

const SignUp = () => {
  const [formFeild, setformfeild] = useState(defaultFormFeilds);
  const { email, password } = formFeild;

  const resetFormFields = () => {
    setformfeild(defaultFormFeilds);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      if (
        (error.code = `firrebase.utils.jsx:73 
      POST https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCjiOmegudDnuEfwJxjzpUkvcACITvwd6k 400 (Bad Request)
     ﻿
     `)
      ) {
        alert("wrong password or E-mail");
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformfeild({ ...formFeild, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account ?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="button-cont">
          <Button type="submit">Sign in</Button>

          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign-In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
