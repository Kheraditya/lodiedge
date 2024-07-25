'use client';

import React, { useState } from 'react';
import CustomCard from './Cards/CustomCard';

const Billing = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const openOverlay = () => {
    setIsOverlayVisible(true);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
  };

  const handleClickOutside = (e) => {
    if (e.target.className === 'overlay') {
      closeOverlay();
    }
  };

  const customers = [
    { name: 'Gupta Enterprise Pvt. Ltd.', status: 'Active', statusClass: 'active' },
    { name: 'Mahesh Industries Pvt. Ltd.', status: 'Active', statusClass: 'active' },
    { name: 'Bhuwan Infotech.', status: 'Active', statusClass: 'active' },
    { name: 'Swastik Software Pvt. Ltd.', status: 'Active', statusClass: 'active' },
    { name: 'Omkar and Brothers Pvt. Ltd.', status: 'In-Active', statusClass: 'inactive' },
  ];

  return (
    <div className="billing">
      <h1>Billing</h1>
      <span className="customer-details">Customer Details</span>
      <div className="button-container">
        <button className="button1" onClick={openOverlay}>
          <span className="plus-icon">+</span> ADD
        </button>
      </div>
      {isOverlayVisible && (
        <div className="overlay" onClick={handleClickOutside}>
          <div className="overlay-content">
            <div className="header-container">
              <h1 className="header-title">Select Customer</h1>
              <button className="close-button" onClick={closeOverlay}>
                Close
              </button>
            </div>
            <div className="customer-selector-container">
              <div className="customer-selector-grid">
                {customers.map((customer, index) => (
                  <CustomCard
                    key={index}
                    companyName={customer.name}
                    status={customer.status}
                    statusClass={customer.statusClass}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .billing {
          padding: 20px;
          width: 100%;
          height: 100%;   
        }

        .billing h1 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .customer-details {
          font-size: 18px;
          font-weight: bold;
        }

        .button-container {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .button1 {
          background-color: #1e293b;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          display: flex;
          align-items: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          margin: auto;
        }

        .button1:hover {
          background-color: #14203b;
        }

        .plus-icon {
          margin-right: 5px;
          font-size: 20px;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .overlay-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          z-index: 1001;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 20px;
        }

        .header-title {
          font-size: 24px;
          font-weight: bold;
        }

        .close-button {
          background-color: transparent;
          border: 2px solid #f44336;
          border-radius: 5px;
          padding: 5px 10px;
          cursor: pointer;
          font-size: 16px;
          color: #f44336;
          transition: background-color 0.3s, color 0.3s;
        }

        .close-button:hover {
          background-color: #f44336;
          color: white;
        }

        .customer-selector-container {
          text-align: center;
        }

        .customer-selector-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 20px;
          justify-content: center;
        }

        .custom-card {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }

        .custom-card:hover {
          transform: scale(1.05);
        }

        .custom-card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .company-name {
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Billing;
