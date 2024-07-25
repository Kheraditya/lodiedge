'use client';

import React from "react";

const CustomCard = ({ companyName, status, statusClass }) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="company-name">{companyName}</span>
        <span className={`status ${statusClass}`}>{status}</span>
      </div>
      <style jsx>{`
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          width: 250px;
          margin: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s, transform 0.3s;
        }

        .card:hover {
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transform: scale(1.05);
        }

        .card-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .company-name {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .status {
          padding: 5px 10px;
          border-radius: 4px;
          font-weight: bold;
        }

        .status.active {
          background-color: #ccffcc;
          color: #008000;
        }

        .status.inactive {
          background-color: #f8d7da;
          color: #721c24;
        }
      `}</style>
    </div>
  );
};

export default CustomCard;
