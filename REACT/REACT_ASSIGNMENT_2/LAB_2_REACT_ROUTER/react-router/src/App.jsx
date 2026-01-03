
import Menu from "./Menu";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
