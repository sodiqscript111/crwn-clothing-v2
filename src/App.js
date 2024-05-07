import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.componet";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.components";

const Shop = () => {
  return <h1>I am a shop</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;
