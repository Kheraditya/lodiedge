'use client';

import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <style jsx>{`
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          width: 200px;
          margin: 10px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transform: scale(1.05);
        }
        .card h3 {
          margin: 0 0 10px;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default Card;
