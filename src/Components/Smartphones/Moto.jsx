import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

let a=[
  {
    "id": 1,
    "PName": "MOTOROLA EDGE 50 PRO (VIOLET)",
    "Rate": 4.7,
    "Price": 25000,
    "img":"/Photos/Moto Images/motorola-edge-50-pro.png"
    
  },
  {
    "id": 2,
    "PName": "MOTO EDGE 50 FUSION (BLUE,GREEN,PINK)",
    "Rate": 4.7,
    "Price": 20000,
    "img":"/Photos/Moto Images/motorola-edge-50-fusion.png"
    
  },
  {
    "id": 3,
    "PName": "MOTO EDGE 50 (VEGAN PINK)",
    "Rate": 4.7,
    "Price": 29000,
    "img":"/Photos/Moto Images/motorola-edge-50.png"
    
  },
  {
    "id": 4,
    "PName": "MOTO EDGE 50 ULTRA (GOLD,BLACK,PEACH)",
    "Rate": 4.7,
    "Price": 50000,
    "img":"/Photos/Moto Images/motorola_edge_50_ultra.png"
    
  },
  {
    "id": 5,
    "PName": "MOTO EDGE 40 (GREEN)",
    "Rate": 4.7,
    "Price": 35000,
    "img":"/Photos/Moto Images/moto-edge-40.png"
    
  },
  {
    "id": 1,
    "PName": "MOTO EDGE 30 ULTRA (BLACK)",
    "Rate": 4.7,
    "Price": 45000,
    "img":"/Photos/Moto Images/moto-edge-30-ultra.png"
    
  },
  {
    "id": 2,
    "PName": "MOTO EDGE 30 FUSION (BLACK)",
    "Rate": 4.7,
    "Price": 25000,
    "img":"/Photos/Moto Images/moto-edge-30-fusion.png"
    
  },
  {
    "id": 3,
    "PName": "MOTO G 85 5g (BLUE & GREEN)",
    "Rate": 4.7,
    "Price": 19000,
    "img":"/Photos/Moto Images/motog85.png"
    
  },
  {
    "id": 1,
    "PName": "MOTOROLA EDGE 50 PRO (VIOLET)",
    "Rate": 4.7,
    "Price": 25000,
    "img":"/Photos/Moto Images/motorola-edge-50-pro.png"
    
  },
  {
    "id": 2,
    "PName": "MOTO EDGE 50 FUSION (BLUE,GREEN,PINK)",
    "Rate": 4.7,
    "Price": 20000,
    "img":"/Photos/Moto Images/motorola-edge-50-fusion.png"
    
  },
  {
    "id": 3,
    "PName": "MOTO EDGE 50 (VEGAN PINK)",
    "Rate": 4.7,
    "Price": 29000,
    "img":"/Photos/Moto Images/motorola-edge-50.png"
    
  },
  {
    "id": 4,
    "PName": "MOTO EDGE 50 ULTRA (GOLD,BLACK,PEACH)",
    "Rate": 4.7,
    "Price": 50000,
    "img":"/Photos/Moto Images/motorola_edge_50_ultra.png"
    
  }

];
const Moto = ({ isDarkMode, toggleTheme, addToCart }) => {

  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="row">
        {a.map((obj) => (
          <div key={obj.id} className="col-lg-4 mb-4">
            <div className={`card ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
              <img src={obj.img} className="card-img-top" alt={obj.PName} width={300} height={250} />
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
  );
}

export default Moto;