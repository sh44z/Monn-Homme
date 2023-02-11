import "./Navbar.css";
import {Link} from "react-router-dom";
import logo from"./logo-img.jpg"


const Navbar = ({click}) => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <img src={logo} alt="logo" className="logo-img"/>
        </div>

        <ul className="navbar-links">
            <li>
                <Link to="/cart" className="cart-link">
                  <i className="fas fa-shopping-cart"></i>
                    <span className="cart-container">
                      Cart
                      <span className="cart-logo-badge">0</span>
                    </span>
                   
                </Link>
            </li>

            <li>

            <Link to="/">          
             Shop
            
            </Link>

            </li>
        </ul>

        <div className="hamburger" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      
    </nav>
  )
}

export default Navbar;
