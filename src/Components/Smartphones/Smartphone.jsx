import React from 'react';
import { useNavigate } from 'react-router-dom';

const smartphoneData = [
  {
    id: 1,
    PName: "Iphone",
    Rate: 4.7,
    Price: 100000,
    img: "/Photos/Iphone15promax.png"
  },
  {
    id: 2,
    PName: "Samsung",
    Rate: 4.7,
    Price: 100000,
    img: "/Photos/Samsung-Galaxy-S24-Ultra.png"
  },
  {
    id: 3,
    PName: "Oneplus",
    Rate: 4.7,
    Price: 100000,
    img: "/Photos/oneplus-12.png"
  },
  {
    id: 4,
    PName: "Realme",
    Rate: 4.7,
    Price: 15000,
    img: "/Photos/Realme Images/realme-gt-6-colour-variants.png"
  },
  {
    id: 5,
    PName: "Oppo",
    Rate: 4.7,
    Price: 20000,
    img: "/Photos/Oppo Images/find-n3-flip.png"
  },
  {
    id: 6,
    PName: "Motorola",
    Rate: 4.7,
    Price: 50000,
    img: "/Photos/Moto Images/motorola_edge_50_ultra.png"
  },
  {
    id: 1,
    PName: "Iphone",
    Rate: 4.7,
    Price: 100000,
    img: "/Photos/Iphone15promax.png"
  },
  {
    id: 2,
    PName: "Samsung",
    Rate: 4.7,
    Price: 100000,
    img: "/Photos/Samsung-Galaxy-S24-Ultra.png"
  },
  {
    id: 3,
    PName: "Oneplus",
    Rate: 4.7,
    Price: 100000,
    img: "/Photos/oneplus-12.png"
  },
  {
    id: 4,
    PName: "Realme",
    Rate: 4.7,
    Price: 15000,
    img: "/Photos/Realme Images/realme-gt-6-colour-variants.png"
  },
  {
    id: 5,
    PName: "Oppo",
    Rate: 4.7,
    Price: 20000,
    img: "/Photos/Oppo Images/find-n3-flip.png"
  },
  {
    id: 6,
    PName: "Motorola",
    Rate: 4.7,
    Price: 50000,
    img: "/Photos/Moto Images/motorola_edge_50_ultra.png"
  }
];

const Smartphone = ({ isDarkMode }) => {
  const navigate = useNavigate();

  const onClickImage = (event, obj) => {
    switch (obj.PName) {
      case "Iphone":
        navigate("/Iphone");
        break;
      case "Samsung":
        navigate("/samsungs");
        break;
      case "Oneplus":
        navigate("/Oneplus");
        break;
      case "Motorola":
        navigate("/Moto");
        break;
      case "Oppo":
        navigate("/Oppo");
        break;
      case "Realme":
        navigate("/Realme");
        break;
      default:
        break;
    }
  };

  return (
    <div className={`container mt-5 ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <div className="row">
        {smartphoneData.map((obj) => (
          <div key={obj.id} className="col-lg-4 mb-4">
            <div className={`card ${isDarkMode ? 'bg-secondary text-white' : 'bg-white text-dark'}`}>
              <img 
                src={obj.img} 
                className="card-img-top" 
                alt={obj.PName} 
                width={350} 
                height={200}  
                onClick={(event) => onClickImage(event, obj)} 
              />
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
  );
};

export default Smartphone;
