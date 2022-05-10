//NPM Packages
import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";

export default function Navbar() {
  return (
    <div className="fixed">
      <div className="navbar">
        <Link className="logo" to="/">
          <img className="logo-img" src={logo} alt="logo thumbnail" />
        </Link>

        <ul className="nav-link">
          <li>
            <Link to="/dishes">Dishes</Link>
          </li>
          <li>
            <Link to="/desserts">Desserts</Link>
          </li>
          <li>
            <Link to="/drinks">Drinks</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
