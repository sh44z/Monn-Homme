import "./Product.css"
import { Link } from "react-router-dom";
import whiteTie from "../components/images/whiteTie.jpg"


const Product = () => {
  return (
    <div className="product">

          <img src={whiteTie} alt="Tieq"/>
      
      <div className="product-info">
        <p className="info-name">White Floral Tie</p>
        <p className="info-description">Elevate your look with this stylish 
                            white tie, beautiful Floral Design 
        </p>
        <p className="info-price">£13.99</p>

        <Link to={`/product/${1111}`} className="info-button">View</Link>
      </div>

    </div>


    
  );
}

export default Product;
