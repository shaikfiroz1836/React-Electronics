import React from 'react';
import { useNavigate } from 'react-router-dom';

let a = [
  {
    "id": 1,
    "PName": "MOTOROLA EnvisionX 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers",
    "Rate": 4.7,
    "Price": 100000,
    "img": "/Photos/TV_Image.png"
  },
  {
    "id": 2,
    "PName": "SAMSUNG FRAME 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers",
    "Rate": 4.7,
    "Price": 100000,
    "img": "/Photos/TV2.png"
  },
  {
    "id": 3,
    "PName": "LG 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers",
    "Rate": 4.7,
    "Price": 100000,
    "img": "/Photos/TV3.png"
  },
  {
    "id": 1,
    "PName": "MOTOROLA EnvisionX 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers",
    "Rate": 4.7,
    "Price": 100000,
    "img": "/Photos/TV_Image.png"
  },
  {
    "id": 2,
    "PName": "SAMSUNG FRAME 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers",
    "Rate": 4.7,
    "Price": 100000,
    "img": "/Photos/TV2.png"
  },
  {
    "id": 3,
    "PName": "LG 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers",
    "Rate": 4.7,
    "Price": 100000,
    "img": "/Photos/TV3.png"
  },
  {
    "id": 1,
    "PName": "MOTOROLA EnvisionX 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers",
    "Rate": 4.7,
    "Price": 100000,
    "img": "/Photos/TV_Image.png"
  },
  {
    "id": 2,
    "PName": "SAMSUNG FRAME 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers",
    "Rate": 4.7,
    "Price": 100000,
    "img": "/Photos/TV2.png"
  },
  {
    "id": 3,
    "PName": "LG 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers",
    "Rate": 4.7,
    "Price": 100000,
    "img": "/Photos/TV3.png"
  },
  {
    "id": 1,
    "PName": "MOTOROLA EnvisionX 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers",
    "Rate": 4.7,
    "Price": 100000,
    "img": "/Photos/TV_Image.png"
  },
  {
    "id": 2,
    "PName": "SAMSUNG FRAME 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers",
    "Rate": 4.7,
    "Price": 100000,
    "img": "/Photos/TV2.png"
  },
  {
    "id": 3,
    "PName": "LG 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers",
    "Rate": 4.7,
    "Price": 100000,
    "img": "/Photos/TV3.png"
  },
  {
    "id": 1,
    "PName": "MOTOROLA EnvisionX 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers",
    "Rate": 4.7,
    "Price": 100000,
    "img": "/Photos/TV_Image.png"
  },
  {
    "id": 2,
    "PName": "SAMSUNG FRAME 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers",
    "Rate": 4.7,
    "Price": 100000,
    "img": "/Photos/TV2.png"
  },
  {
    "id": 3,
    "PName": "LG 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers",
    "Rate": 4.7,
    "Price": 100000,
    "img": "/Photos/TV3.png"
  },
];

const Television = ({ isDarkMode, toggleTheme ,addToCart}) => {
  const navigate = useNavigate();

  function onClickImage(event, obj) {
    console.log("clicked");
    console.log(obj.PName);
    // Add your navigation logic here
  }

  return (
    <div className={`container mt-5 ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className="row">
        {a.map((obj) => (
          <div key={obj.id} className="col-lg-4 mb-4">
            <div className={`card ${isDarkMode ? 'bg-secondary' : ''}`}>
              <img
                src={obj.img}
                className="card-img-top"
                alt={obj.PName}
                width={350}
                height={200}
                onClick={(event) => onClickImage(event, obj)}
              />
              <div className="card-body">
                <h5 className={`card-title ${isDarkMode ? 'text-white' : 'text-dark'}`}>{obj.PName}</h5>
                <p className={`card-text ${isDarkMode ? 'text-white' : 'text-dark'}`}>Rating: {obj.Rate}</p>
                <p className={`card-text ${isDarkMode ? 'text-white' : 'text-dark'}`}>Price: ₹{obj.Price}</p>
                <button className='btn btn-warning' onClick={() => addToCart(obj)}>Add To Cart</button>
                <button className='btn btn-warning ml-2'>BUY</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Television;
