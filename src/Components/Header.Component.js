import { Link } from "react-router-dom";
import logo from "../resources/DT-black-text.png";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const HeaderComponent = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt="Logo of Daddy's Tshirt shop with no background"
            />
          </Link>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/News">News/Blog</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="icons">
          <Link to="/login">
            <FontAwesomeIcon icon={faUser} color="black" />
          </Link>
          <Link to="">
            <FontAwesomeIcon icon={faCartShopping} color="black" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
