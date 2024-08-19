import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

let a=[
  {
    "id": 1,
    "PName": "Iphone 15 pro max (NATURAL TITANIUM)",
    "Rate": 4.7,
    "Price": 150000,
    "img":"/Photos/IphoneImages/natural-tit.png"
    
  },
  {
    "id": 2,
    "PName": "Iphone 15 pro max (BLUE TITANIUM)",
    "Rate": 4.7,
    "Price": 150000,
    "img":"/Photos/IphoneImages/blue-tit.png"
    
  },
  {
    "id": 3,
    "PName": "Iphone 15 pro max (WHITE TITANIUM)",
    "Rate": 4.7,
    "Price": 150000,
    "img":"/Photos/IphoneImages/white-tit.png"
    
  },
  {
    "id": 4,
    "PName": "Iphone 15 pro max (BLACK TITANIUM)",
    "Rate": 4.7,
    "Price": 150000,
    "img":"/Photos/IphoneImages/black-tit.png"
    
  },
  {
    "id": 5,
    "PName": "Iphone 14 Pro Max (PURPLE STAINLESS STEEL)",
    "Rate": 4.7,
    "Price": 90000,
    "img":"/Photos/IphoneImages/Iphone14S/iphone-14-Pro-Max.png"
    
  },
  {
    "id": 6,
    "PName": "Iphone 14 Pro (PURPLE STAINLESS STEEL)",
    "Rate": 4.7,
    "Price": 80000,
    "img":"/Photos/IphoneImages/Iphone14S/iphone-14-Pro.png"
    
  },
  {
    "id": 7,
    "PName": "Iphone 14 (Black Aluminium)", 
    "Rate": 4.7,
    "Price": 50000,
    "img":"/Photos/IphoneImages/Iphone14S/iphone14.png"
    
  },
  {
    "id": 8,
    "PName": "Iphone 13 Pro Max (SAPHIRE BLUE STAINLESS STEEL)",
    "Rate": 4.7,
    "Price": 70000,
    "img":"/Photos/IphoneImages/Iphone13S/iphone-13-pro-max.png"
    
  },{
    "id": 9,
    "PName": "Iphone 13 Pro (BLACK STAINLESS STEEL)",
    "Rate": 4.7,
    "Price": 65000,
    "img":"/Photos/IphoneImages/Iphone13S/iphone-13-pro.png"
    
  },
  {
    "id": 10,
    "PName": "Iphone 12 Pro (BLUE STAINLESS STEEL)",
    "Rate": 4.7,
    "Price": 55000,
    "img":"/Photos/IphoneImages/Iphone 12/iphone-12-pro.png"
    
  },
  {
    "id": 11,
    "PName": "Iphone 12 (BLUE ALUMINIUM)",
    "Rate": 4.7,
    "Price": 30000,
    "img":"/Photos/IphoneImages/Iphone 12/iphone12.png"
    
  },
  {
    "id": 12,
    "PName": "Iphone XS Max (GOLD STAINLESS STEEL)",
    "Rate": 4.7,
    "Price": 15000,
    "img":"/Photos/IphoneImages/IphoneXS/iphone-XS-MAX-gold.png"
    
  }

];
const Iphone = ({ isDarkMode, toggleTheme, addToCart }) => {

  const navigate = useNavigate();

  // function onClickImage(event,obj){
  //   console.log("clicked")
  //   console.log(obj.PName)
  //   if(obj.PName === "Iphone15"){
  //     navigate("/Iphone")
  //     console.log("called")
  //   }
  //   else if(obj.PName === "Samsung"){
  //     navigate("/samsungs")
  //   }
  //   else if(obj.PName === "Oneplus"){
  //     navigate("/Oneplus")
  //   }
  // }

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

export default Iphone