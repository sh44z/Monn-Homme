import "./ProductScreen.css"

function ProductScreen() {
  return (
    <div className="productscreen">
    
      <div className="product-left">
        <div className="left-image">
          <img src="https://handcmediastorage.blob.core.windows.net/productimages/TI/TIRME849-K30-166931-1400px-1820px.jpg" 
                alt="left image" />
        </div>

        <div className="left-info">
        <p className="left-name"> Blue Tie</p>
        <p className="left-description">Beautiful Blue Floral design Tie</p>
        <p className="left-Price"> Price: £13.99</p>

        </div>

      </div>

      
      <div className="product-right">
      <div className="right-info">
        <p>
          Price: <span>£13.99</span>
        </p>
        <p>
          Status: <span>in stock</span>
        </p>

        <p>
          QTY
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </p>
        <p>
          <button type="button">Add to Cart </button>
        </p>

      </div>
      </div>

    </div>
  )
}

export default ProductScreen
