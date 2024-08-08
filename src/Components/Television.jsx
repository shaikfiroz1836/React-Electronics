import React from 'react'
import { useNavigate } from 'react-router-dom';


let a=[
    {
      "id": 1,
      "PName": "MOTOROLA EnvisionX 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers (65UHDGDMBSXP)#JustHere",
      "Rate": 4.7,
      "Price": 100000,
      "img":"/Photos/TV_Image.png"
      
    },
    {
      "id": 2,
      "PName": "SAMSUNG FRAME 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers (65UHDGDMBSXP)#JustHere",
      "Rate": 4.7,
      "Price": 100000,
      "img":"/Photos/TV2.png"
      
    },
    {
      "id": 3,
      "PName": "LG 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers (65UHDGDMBSXP)#JustHere",
      "Rate": 4.7,
      "Price": 100000,
      "img":"/Photos/TV3.png"
      
    },
    {
        "id": 1,
        "PName": "MOTOROLA EnvisionX 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers (65UHDGDMBSXP)#JustHere",
        "Rate": 4.7,
        "Price": 100000,
        "img":"/Photos/TV_Image.png"
        
      },
      {
        "id": 2,
        "PName": "SAMSUNG FRAME 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers (65UHDGDMBSXP)#JustHere",
        "Rate": 4.7,
        "Price": 100000,
        "img":"/Photos/TV2.png"
        
      },
      {
        "id": 3,
        "PName": "LG 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers (65UHDGDMBSXP)#JustHere",
        "Rate": 4.7,
        "Price": 100000,
        "img":"/Photos/TV3.png"
        
      },
      {
        "id": 1,
        "PName": "MOTOROLA EnvisionX 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers (65UHDGDMBSXP)#JustHere",
        "Rate": 4.7,
        "Price": 100000,
        "img":"/Photos/TV_Image.png"
        
      },
      {
        "id": 2,
        "PName": "SAMSUNG FRAME 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers (65UHDGDMBSXP)#JustHere",
        "Rate": 4.7,
        "Price": 100000,
        "img":"/Photos/TV2.png"
        
      },
      {
        "id": 3,
        "PName": "LG 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers (65UHDGDMBSXP)#JustHere",
        "Rate": 4.7,
        "Price": 100000,
        "img":"/Photos/TV3.png"
        
      },
      {
        "id": 1,
        "PName": "MOTOROLA EnvisionX 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers (65UHDGDMBSXP)#JustHere",
        "Rate": 4.7,
        "Price": 100000,
        "img":"/Photos/TV_Image.png"
        
      },
      {
        "id": 2,
        "PName": "SAMSUNG FRAME 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers (65UHDGDMBSXP)#JustHere",
        "Rate": 4.7,
        "Price": 100000,
        "img":"/Photos/TV2.png"
        
      },
      {
        "id": 3,
        "PName": "LG 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers (65UHDGDMBSXP)#JustHere",
        "Rate": 4.7,
        "Price": 100000,
        "img":"/Photos/TV3.png"
        
      },
      {
        "id": 1,
        "PName": "MOTOROLA EnvisionX 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers (65UHDGDMBSXP)#JustHere",
        "Rate": 4.7,
        "Price": 100000,
        "img":"/Photos/TV_Image.png"
        
      },
      {
        "id": 2,
        "PName": "SAMSUNG FRAME 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers (65UHDGDMBSXP)#JustHere",
        "Rate": 4.7,
        "Price": 100000,
        "img":"/Photos/TV2.png"
        
      },
      {
        "id": 3,
        "PName": "LG 165 cm (65 inch) Ultra HD (4K) LED Smart Google TV with Inbuilt Box Speakers (65UHDGDMBSXP)#JustHere",
        "Rate": 4.7,
        "Price": 100000,
        "img":"/Photos/TV3.png"
        
      }
  ];
  const Television = () => {
  
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

export default Television
