import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Details from "./views/Details";
import Admin from "./views/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:city" exact element={<Details />} />
        <Route path="/admin" exact element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
