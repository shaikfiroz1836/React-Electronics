import React, { useState } from 'react';

const AddToCart = ({ cartItems, isDarkMode }) => {
  const [quantities, setQuantities] = useState(
    cartItems.map(() => 1) // Initialize quantities with 1 for each item
  );

  const handleQuantityChange = (index, change) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = Math.max(1, newQuantities[index] + change); // Prevent quantity from going below 1
      return newQuantities;
    });
  };

  return (
    <div className={`container ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <h3>Cart Items</h3>
      {cartItems.length > 0 ? (
        <table className={`table table-bordered ${isDarkMode ? 'table-dark' : 'table-light'}`}>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Product Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.PName}</td>
                <td>
                  <img src={item.img} alt={item.PName} width={50} height={50} />
                </td>
                <td>
                  <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                  {quantities[index]}
                  <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                </td>
                <td>₹{item.Price * quantities[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
};

export default AddToCart;
