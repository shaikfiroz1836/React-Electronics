import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

let a=[
  {
    "id": 1,
    "PName": "ONEPLUS 12 (GREEN)",
    "Rate": 4.7,
    "Price": 65000,
    "img":"/Photos/Oneplus Images/oneplus-12-Green.png"
    
  },
  {
    "id": 2,
    "PName": "ONEPLUS 12 (WHITE)",
    "Rate": 4.7,
    "Price": 65000,
    "img":"/Photos/Oneplus Images/oneplus-12-White.png"
    
  },
  {
    "id": 3,
    "PName": "ONEPLUS 12 (BLACK)",
    "Rate": 4.7,
    "Price": 65000,
    "img":"/Photos/Oneplus Images/oneplus-12-Black.png"
    
  },
  {
    "id": 4,
    "PName": "ONEPLUS 9 PRO (SILVER)",
    "Rate": 4.7,
    "Price": 45000,
    "img":"/Photos/Oneplus Images/oneplus9pro.png"
    
  },
  {
    "id": 5,
    "PName": "ONEPLUS 9 (PURPLE)",
    "Rate": 4.7,
    "Price": 40000,
    "img":"/Photos/Oneplus Images/oneplus9.png"
    
  },
  {
    "id": 6,
    "PName": "ONEPLUS 10 PRO (GREEN)",
    "Rate": 4.7,
    "Price": 50000,
    "img":"/Photos/Oneplus Images/oneplus-10-pro.png"
    
  },
  {
    "id": 7,
    "PName": "ONEPLUS 7 PRO (ALMOND - SPECIAL COLOR)", 
    "Rate": 4.7,
    "Price": 50000,
    "img":"/Photos/Oneplus Images/oneplus-7-pro.png"
    
  },
  {
    "id": 8,
    "PName": "ONEPLUS 8 (RAINBOW SILVER)",
    "Rate": 4.7,
    "Price": 55000,
    "img":"/Photos/Oneplus Images/oneplus8.png"
    
  },{
    "id": 9,
    "PName": "ONEPLUS 7T (BLUE)",
    "Rate": 4.7,
    "Price": 35000,
    "img":"/Photos/Oneplus Images/oneplus7t.png"
    
  },
  {
    "id": 10,
    "PName": "ONEPLUS 12 (GREEN)",
    "Rate": 4.7,
    "Price": 65000,
    "img":"/Photos/Oneplus Images/oneplus-12-Green.png"
    
  },
  {
    "id": 11,
    "PName": "ONEPLUS 12 (WHITE)",
    "Rate": 4.7,
    "Price": 65000,
    "img":"/Photos/Oneplus Images/oneplus-12-White.png"
    
  },
  {
    "id": 12,
    "PName": "ONEPLUS 12 (BLACK)",
    "Rate": 4.7,
    "Price": 65000,
    "img":"/Photos/Oneplus Images/oneplus-12-Black.png"
    
  }

];
const Oneplus = ({ isDarkMode, toggleTheme, addToCart }) => {

  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="row">
      {a.map((obj) => (
          <div key={obj.id} className="col-lg-4 mb-4">
            <div className={`card ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
              <img src={obj.img} className="card-img-top" alt={obj.PName} width={350} height={200} />
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

export default Oneplus