'use client';
import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h1>Billing Dashboard</h1>
      <style jsx>{`
        .header {
          width: 100%;
          height: 60px;
          background-color: #1A237E;
          color: white;
          display: flex;
          align-items: center;
          padding: 0 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default Header;
