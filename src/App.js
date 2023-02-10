import { Route, Routes } from "react-router-dom";
import Css from "./pages/Css";
import Home from "./pages/Home";
import Html from "./pages/Html";
import Javascript from "./pages/Javascript";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={Home} />
        <Route path="/Html" element={Html} />
        <Route path="/Css" element={Css} />
        <Route path="/Javascript" element={Javascript} />
      </Routes>

    </>
  );
}

export default App;
