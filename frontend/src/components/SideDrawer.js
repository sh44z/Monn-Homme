import "./SideDrawer.css"
import { Link } from "react-router-dom";

const SideDrawer = ({show, click}) => {
  const sideDrawerClass = ["sidedrawer"]

  if(show) {
    sideDrawerClass.push("show");
  }
  return  <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer-links" onClick={click}>

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

  </div>
  
};

export default SideDrawer;
