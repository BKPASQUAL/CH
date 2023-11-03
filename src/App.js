import Login from "../src/components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Items from "./components/Items";
import Navbars from "./components/common/Navbars";
import Home from "./pages/Home";
import AddItems from "./components/AddItems";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="additem" element={<AddItems />} />
      <Route path="/home" element={<Home />}>
        <Route path="Items" element={<Items />} />
        {/* <Route path="home" element={<Home />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
