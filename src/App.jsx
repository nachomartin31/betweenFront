import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import Details from "./views/Details";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:id" exact element={<Details />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
