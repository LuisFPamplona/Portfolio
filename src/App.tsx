import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import AppRoutes from "./routes";
import "./styles/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
