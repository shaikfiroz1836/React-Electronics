import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

let a=[
  {
    "id": 1,
    "PName": "REALME 12 (BLUE)",
    "Rate": 4.7,
    "Price": 25000,
    "img":"/Photos/Realme Images/realme-12-pro-5g.png"
    
  },
  {
    "id": 2,
    "PName": "REALME 11 PRO (WHITE VEGAN)",
    "Rate": 4.7,
    "Price": 20000,
    "img":"/Photos/Realme Images/realme-11-pro.png"
    
  },
  {
    "id": 3,
    "PName": "REALME 10 PRO (RAINBOW)",
    "Rate": 4.7,
    "Price": 65000,
    "img":"/Photos/Realme Images/realme-10-pro.png"
    
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
const Realme = ({ isDarkMode, toggleTheme }) => {

  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="row">
        {a.map((obj) => (
          <div key={obj.id} className="col-lg-4 mb-4">
            <div className="card">
            <img src={obj.img} className="card-img-top" alt={obj.PName} width={350} height={300}  />
              <div className="card-body">
                <h5 className={`nav-link ${isDarkMode ? 'text-white' : 'text-dark'} card-title`}>{obj.PName}</h5>
                <p  className={`nav-link ${isDarkMode ? 'text-white' : 'text-dark'} card-text`}>Rating: {obj.Rate}</p>
                <p  className={`nav-link ${isDarkMode ? 'text-white' : 'text-dark'} card-text`}>Price: ₹{obj.Price}</p>
                <button className='btn btn-warning'>Add To Cart</button>
                <button className='btn btn-warning ml-2'>BUY</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Realme