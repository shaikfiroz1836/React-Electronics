import React from 'react';

const AddToCart = ({ cartItems, isDarkMode }) => {
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
                <td>₹{item.Price}</td>
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
