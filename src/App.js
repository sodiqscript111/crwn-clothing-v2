import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.componet";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication component/authentication.components";

const Shop = () => {
  return <h1>I am a shop</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};
export default App;
