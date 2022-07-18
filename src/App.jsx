import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Details from "./views/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:city" exact element={<Details />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
