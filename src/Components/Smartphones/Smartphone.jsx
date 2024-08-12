import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

let a=[
  {
    "id": 1,
    "PName": "Iphone",
    "Rate": 4.7,
    "Price": 100000,
    "img":"/Photos/Iphone15promax.png"
    
  },
  {
    "id": 2,
    "PName": "Samsung",
    "Rate": 4.7,
    "Price": 100000,
    "img":"/Photos/Samsung-Galaxy-S24-Ultra.png"
    
  },
  {
    "id": 3,
    "PName": "Oneplus",
    "Rate": 4.7,
    "Price": 100000,
    "img":"/Photos/oneplus-12.png"
    
  },
  {
    "id": 4,
    "PName": "Realme",
    "Rate": 4.7,
    "Price": 15000,
    "img":"/Photos/Realme Images/realme-gt-6-colour-variants.png"
    
  },
  {
    "id": 5,
    "PName": "Oppo",
    "Rate": 4.7,
    "Price": 20000,
    "img":"/Photos/Oppo Images/find-n3-flip.png"
    
  },
  {
    "id": 6,
    "PName": "Motorola",
    "Rate": 4.7,
    "Price": 50000,
    "img":"/Photos/Moto Images/motorola_edge_50_ultra.png"
    
  },
  {
    "id": 1,
    "PName": "Iphone",
    "Rate": 4.7,
    "Price": 100000,
    "img":"/Photos/Iphone15promax.png"
    
  },
  {
    "id": 2,
    "PName": "Samsung",
    "Rate": 4.7,
    "Price": 100000,
    "img":"/Photos/Samsung-Galaxy-S24-Ultra.png"
    
  },
  {
    "id": 3,
    "PName": "Oneplus",
    "Rate": 4.7,
    "Price": 100000,
    "img":"/Photos/oneplus-12.png"
    
  },
  {
    "id": 4,
    "PName": "Realme",
    "Rate": 4.7,
    "Price": 15000,
    "img":"/Photos/Realme Images/realme-gt-6-colour-variants.png"
    
  },
  {
    "id": 5,
    "PName": "Oppo",
    "Rate": 4.7,
    "Price": 20000,
    "img":"/Photos/Oppo Images/find-n3-flip.png"
    
  },
  {
    "id": 6,
    "PName": "Motorola",
    "Rate": 4.7,
    "Price": 50000,
    "img":"/Photos/Moto Images/motorola_edge_50_ultra.png"
    
  }

];
const Smartphone = ({ isDarkMode, toggleTheme }) => {

  const navigate = useNavigate();

  function onClickImage(event,obj){
    console.log("clicked")
    console.log(obj.PName)
    if(obj.PName === "Iphone"){
      navigate("/Iphone")
      console.log("called")
    }
    else if(obj.PName === "Samsung"){
      navigate("/samsungs")
    }
    else if(obj.PName === "Oneplus"){
      navigate("/Oneplus")
    }
    else if(obj.PName === "Motorola"){
      navigate("/Moto")
    }
    else if(obj.PName === "Oppo"){
      navigate("/Oppo")
    }
    else if(obj.PName === "Realme"){
      navigate("/Realme")
    }
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {a.map((obj) => (
          <div key={obj.id} className="col-lg-4 mb-4">
            <div className="card">
              <img src={obj.img} className="card-img-top" alt={obj.PName} width={350} height={200}  onClick={(event) => onClickImage(event,obj)}  />
              <div className="card-body">
                <h5 className={`nav-link ${isDarkMode ? 'text-white' : 'text-dark'} card-title`}>{obj.PName}</h5>
                <p  className={`nav-link ${isDarkMode ? 'text-white' : 'text-dark'} card-text`}>Rating: {obj.Rate}</p>
                <p  className={`nav-link ${isDarkMode ? 'text-white' : 'text-dark'} card-text`}>Price: ₹{obj.Price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Smartphone



