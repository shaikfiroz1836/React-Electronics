import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

let a=[
  {
    "id": 1,
    "PName": "Iphone15",
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
    "id": 1,
    "PName": "Iphone15",
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
    "id": 1,
    "PName": "Iphone15",
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
    "id": 1,
    "PName": "Iphone15",
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
    "id": 1,
    "PName": "Iphone15",
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
    
  }

];
const Smartphone = ({ isDarkMode, toggleTheme }) => {

  const navigate = useNavigate();

  function onClickImage(event,obj){
    console.log("clicked")
    console.log(obj.PName)
    if(obj.PName === "Iphone15"){
      navigate("/Iphone")
      console.log("called")
    }
    else if(obj.PName === "Samsung"){
      navigate("/samsungs")
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



