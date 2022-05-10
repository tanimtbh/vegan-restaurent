//NPM Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Project files
import Contacts from "./pages/Contacts";
import Details from "./pages/Product";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import "./style/style.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>         
          <Route path="/" element={<Homepage />} />
          <Route path="/:menu" element={<Menu />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/:menu/:id" element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}