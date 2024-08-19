import React from 'react'
import { useNavigate } from 'react-router-dom';

let a=[
  {
    "id": 1,
    "PName": "OPPO N3 FLIP (GOLD)",
    "Rate": 4.7,
    "Price": 85000,
    "img":"/Photos/Oppo Images/find-n3-flip.png"
    
  },
  {
    "id": 2,
    "PName": "OPPO FIND X6 PRO",
    "Rate": 4.7,
    "Price": 100000,
    "img":"/Photos/Oppo Images/oppo-find-x6-pro.png"
    
  },
  {
    "id": 3,
    "PName": "OPPO RENO 2F (BLACKISH GREEN)",
    "Rate": 4.7,
    "Price": 15000,
    "img":"/Photos/Oppo Images/oppo-reno-2f.png"
    
  },
  {
    "id": 4,
    "PName": "OPPO RENO 12 PRO (GREEN)",
    "Rate": 4.7,
    "Price": 45000,
    "img":"/Photos/Oppo Images/oppo-reno-12-pro.png"
    
  },
  {
    "id": 5,
    "PName": "OPPO RENO 8 PRO (BLACK & GREEN)",
    "Rate": 4.7,
    "Price": 30000,
    "img":"/Photos/Oppo Images/oppo-reno8-pro.png"
    
  },
  {
    "id": 6,
    "PName": "OPPO RENO 5 PRO (BLACK & BLUE)",
    "Rate": 4.7,
    "Price": 50000,
    "img":"/Photos/Oppo Images/opporeno5pro.png"
    
  },
  {
    "id": 7,
    "PName": "OPPO RENO 10 5g (METALLIC GREY)", 
    "Rate": 4.7,
    "Price": 25000,
    "img":"/Photos/Oppo Images/reno10-5g.png"
    
  },
  {
    "id": 8,
    "PName": "OPPO RENO 12 PRO 5g (SILVER)",
    "Rate": 4.7,
    "Price": 45000,
    "img":"/Photos/Oppo Images/reno12pro_silver.png"
    
  },
  {
    "id": 1,
    "PName": "OPPO N3 FLIP (GOLD)",
    "Rate": 4.7,
    "Price": 85000,
    "img":"/Photos/Oppo Images/find-n3-flip.png"
    
  },
  {
    "id": 2,
    "PName": "OPPO FIND X6 PRO",
    "Rate": 4.7,
    "Price": 100000,
    "img":"/Photos/Oppo Images/oppo-find-x6-pro.png"
    
  },
  {
    "id": 3,
    "PName": "OPPO RENO 2F (BLACKISH GREEN)",
    "Rate": 4.7,
    "Price": 15000,
    "img":"/Photos/Oppo Images/oppo-reno-2f.png"
    
  },
  {
    "id": 4,
    "PName": "OPPO RENO 12 PRO (GREEN)",
    "Rate": 4.7,
    "Price": 45000,
    "img":"/Photos/Oppo Images/oppo-reno-12-pro.png"
    
  }

];
const Oppo = ({ isDarkMode, toggleTheme, addToCart }) => {

  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="row">
      {a.map((obj) => (
          <div key={obj.id} className="col-lg-4 mb-4">
            <div className={`card ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
              <img src={obj.img} className="card-img-top" alt={obj.PName} width={350} height={250} />
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

export default Oppo