import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

let a=[
  {
    "id": 1,
    "PName": "Samsung S24 Ultra (GRAY TITANIUM)",
    "Rate": 4.7,
    "Price": 124000,
    "img":"/Photos/Samsung Images/product_color_gray.png"
    
  },
  {
    "id": 2,
    "PName": "SAMSUNG S24 ULTRA (BLACK TITANIUM)",
    "Rate": 4.7,
    "Price": 124000,
    "img":"/Photos/Samsung Images/product_color_black.png"
    
  },
  {
    "id": 3,
    "PName": "SAMSUNG S24 ULTRA (GREEN TITANIUM)",
    "Rate": 4.7,
    "Price": 124000,
    "img":"/Photos/Samsung Images/product_color_green.png"
    
  },
  {
    "id": 4,
    "PName": "SAMSUNG S24 ULTRA (VIOLET TITANIUM)",
    "Rate": 4.7,
    "Price": 124000,
    "img":"/Photos/Samsung Images/product_color_violet.png"
    
  },
  {
    "id": 5,
    "PName": "SAMSUNG S24 ULTRA (ORANGE TITANIUM)",
    "Rate": 4.7,
    "Price": 124000,
    "img":"/Photos/Samsung Images/Samsung s24 ultra-Orange.png"
    
  },
  {
    "id": 6,
    "PName": "SAMSUNG S24 (VIOLET ALUMINIUM)",
    "Rate": 4.7,
    "Price": 80000,
    "img":"/Photos/Samsung Images/samsungs24.png"
    
  },
  {
    "id": 7,
    "PName": "SAMSUNG S21 ULTRA (BLACK ALUMINIUM)", 
    "Rate": 4.7,
    "Price": 80000,
    "img":"/Photos/Samsung Images/samsung-s21-ultra.png"
    
  },
  {
    "id": 8,
    "PName": "SAMSUNG S21 FE (GREEN VEGAN)",
    "Rate": 4.7,
    "Price": 50000,
    "img":"/Photos/Samsung Images/samsung-s21fe.png"
    
  },{
    "id": 9,
    "PName": "SAMSUNG S10 PLUS (WHITE GLASS)",
    "Rate": 4.7,
    "Price": 45000,
    "img":"/Photos/Samsung Images/samsung-s10.png"
    
  },
  {
    "id": 10,
    "PName": "Samsung S24 Ultra (GRAY TITANIUM)",
    "Rate": 4.7,
    "Price": 124000,
    "img":"/Photos/Samsung Images/product_color_gray.png"
    
  },
  {
    "id": 11,
    "PName": "SAMSUNG S24 ULTRA (BLACK TITANIUM)",
    "Rate": 4.7,
    "Price": 124000,
    "img":"/Photos/Samsung Images/product_color_black.png"
    
  },
  {
    "id": 12,
    "PName": "SAMSUNG S24 ULTRA (GREEN TITANIUM)",
    "Rate": 4.7,
    "Price": 124000,
    "img":"/Photos/Samsung Images/product_color_green.png"
    
  }
  

];
const Samsungs = ({ isDarkMode, toggleTheme, addToCart }) => {

  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="row">
      {a.map((obj) => (
          <div key={obj.id} className="col-lg-4 mb-4">
            <div className={`card ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
              <img src={obj.img} className="card-img-top" alt={obj.PName} width={350} height={350} />
              <div className="card-body">
                <h5 className="card-title">{obj.PName}</h5>
                <p className="card-text">Rating: {obj.Rate}</p>
                <p className="card-text">Price: ₹{obj.Price}</p>
                <button className='btn btn-warning' onClick={() => addToCart(obj)}>Add To Cart</button>
                <button className='btn btn-warning ml-2'>BUY</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Samsungs