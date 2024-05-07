import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListner,
  signOutUser,
  createUserDocsFromAuth,
} from "../utils/firebase/firrebase.utils";

//the actual value i want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

signOutUser();

export const UserProvider = ({ children }) => {
  //
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocsFromAuth(user);
      }
      setCurrentUser(user);
      console.log(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
