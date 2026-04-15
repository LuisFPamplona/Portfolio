import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Journey from "../pages/Journey";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journey" element={<Journey />} />
<Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
