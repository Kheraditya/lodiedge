'use client';
import React, { useState } from 'react';

const ItemCard = ({ name, status }) => {
  const [count, setCount] = useState(0);

  const handleAddClick = () => {
    setCount(1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className={`item-card ${status === 'In-Active' ? 'inactive' : ''}`}>
      <div className="item-name">{name}</div>
      {status === 'Active' ? (
        count === 0 ? (
          <button className="add-button" onClick={handleAddClick}>ADD</button>
        ) : (
          <div className="counter">
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
        )
      ) : (
        <div className="inactive-label">In-Active</div>
      )}

      <style jsx>{`
        .item-card {
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 10px;
          margin: 10px;
          text-align: center;
        }

        .item-card.inactive {
          background-color: #f9f9f9;
          color: #aaa;
        }

        .item-name {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .add-button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          border-radius: 5px;
        }

        .add-button:hover {
          background-color: #0056b3;
        }

        .counter {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .counter button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          border-radius: 5px;
        }

        .counter span {
          margin: 0 10px;
        }

        .inactive-label {
          color: red;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default ItemCard;
