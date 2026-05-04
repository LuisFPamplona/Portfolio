import { useEffect, useRef } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import AppRoutes from "./routes";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  return (
    <div className="route-perspective">
      <div
        key={location.pathname}
        className={hasMounted.current ? "page-transition" : ""}
      >
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
