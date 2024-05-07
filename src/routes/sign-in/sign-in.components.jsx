import {
  signInWithGooglePopup,
  createUserDocsFromAuth,
} from "../../utils/firebase/firrebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocsFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in here</h1>
      <button onClick={logGoogleUser}>Sign-in</button>
    </div>
  );
};

export default SignIn;
