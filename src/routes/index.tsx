import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
