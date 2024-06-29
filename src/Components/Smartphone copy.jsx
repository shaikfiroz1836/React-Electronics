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
    "id": 3,
    "PName": "Oneplus",
    "Rate": 4.7,
    "Price": 100000,
    "img":"/Photos/oneplus-12.png"
    
  },
  {
    "id": 3,
    "PName": "Oneplus",
    "Rate": 4.7,
    "Price": 100000,
    "img":"/Photos/oneplus-12.png"
    
  },
  {
    "id": 3,
    "PName": "Oneplus",
    "Rate": 4.7,
    "Price": 100000,
    "img":"/Photos/oneplus-12.png"
    
  },{
    "id": 3,
    "PName": "Oneplus",
    "Rate": 4.7,
    "Price": 100000,
    "img":"/Photos/oneplus-12.png"
    
  },{
    "id": 3,
    "PName": "Oneplus",
    "Rate": 4.7,
    "Price": 100000,
    "img":"/Photos/oneplus-12.png"
    
  }

];
const Smartphone = () => {

  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="row">
        {a.map((obj) => (
          <div key={obj.id} className="col-lg-4 mb-4">
            <div className="card">
              <img src={obj.img} className="card-img-top" alt={obj.PName} width={350} height={200} onClick={onClickImage}  />
              <div className="card-body">
                <h5 className="card-title">{obj.PName}</h5>
                <p className="card-text">Rating: {obj.Rate}</p>
                <p className="card-text">Price: ₹{obj.Price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Smartphone


function onClickImage(obj){
  if(obj.PName == "Iphone15"){
    
  }
}
