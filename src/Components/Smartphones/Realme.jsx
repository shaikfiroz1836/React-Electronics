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
    "Price": 19000,
    "img":"/Photos/Realme Images/realme-10-pro.png"
    
  },
  {
    "id": 4,
    "PName": "REALME NEO GT 5T (VIOLET)",
    "Rate": 4.7,
    "Price": 20000,
    "img":"/Photos/Realme Images/realmeneogt5t.png"
    
  },
  {
    "id": 5,
    "PName": "REALME GT NEO GT 3T (WHITE)",
    "Rate": 4.7,
    "Price": 15000,
    "img":"/Photos/Realme Images/realme-GT-Neo-3T.png"
    
  },
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
    "Price": 19000,
    "img":"/Photos/Realme Images/realme-10-pro.png"
    
  },
  {
    "id": 4,
    "PName": "REALME NEO GT 5T (VIOLET)",
    "Rate": 4.7,
    "Price": 20000,
    "img":"/Photos/Realme Images/realmeneogt5t.png"
    
  },
  {
    "id": 5,
    "PName": "REALME GT NEO GT 3T (WHITE)",
    "Rate": 4.7,
    "Price": 15000,
    "img":"/Photos/Realme Images/realme-GT-Neo-3T.png"
    
  },
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
    "Price": 19000,
    "img":"/Photos/Realme Images/realme-10-pro.png"
    
  },
  {
    "id": 4,
    "PName": "REALME NEO GT 5T (VIOLET)",
    "Rate": 4.7,
    "Price": 20000,
    "img":"/Photos/Realme Images/realmeneogt5t.png"
    
  },
  {
    "id": 5,
    "PName": "REALME GT NEO GT 3T (WHITE)",
    "Rate": 4.7,
    "Price": 15000,
    "img":"/Photos/Realme Images/realme-GT-Neo-3T.png"
    
  },

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