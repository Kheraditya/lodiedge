'use client';
import React, { useState } from 'react';
import ItemCard from './Cards/ItemCard';
import Link from 'next/link';
// import { fetchUser } from '@/lib/data';
// import { billing } from '@/lib/action';

const BillingDetails = ({name}) => {
  // const customer = await fetchUser(name);
  const customer = {
    name: 'Gupta Enterprise Pvt. Ltd.',
    address: 'Gurgaon, Haryana',
    panCard: 'BCNSG01234H',
    gstNum: '06BCNSG01234H1Z5',
  };

  const items = [
    { name: 'Laptop', status: 'Active' },
    { name: 'Headphone', status: 'Active' },
    { name: 'LED Monitor', status: 'Active' },
    { name: 'Pendrive', status: 'Active' },
    { name: 'Mobile', status: 'In-Active' },
  ];

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

  const handleAddItems = () => {
    // Implement the logic to add selected items
    closeOverlay();
  };

  return (
    <>
      <div className="billing-details">
        <h1>Billing</h1>
        <div className="customer-details-card">
          <span className="customer-details-title">Customer Details</span>
          <div className="customer-detail">
            <span className="detail-label">Name</span> : <span className="detail-value">{customer.name}</span>
          </div>
          <div className="customer-detail">
            <span className="detail-label">Address</span> : <span className="detail-value">{customer.address}</span>
          </div>
          <div className="customer-detail">
            <span className="detail-label">Pan Card</span> : <span className="detail-value">{customer.panCard}</span>
          </div>
          <div className="customer-detail">
            {/* <span className="detail-label">GST Num</span> : <span className="detail-value">{customer.gst}</span> */}
            <span className="detail-label">GST Num</span> : <span className="detail-value">{customer.gstNum}</span>
          </div>
        </div>
        <div className="button-container">
          <button className="main-add-button" onClick={openOverlay}>
            <span className="plus-icon">+</span> ADD
          </button>
        </div>
      </div>
      {isOverlayVisible && (
        <div className="overlay" onClick={handleClickOutside}>
          <div className="overlay-content">
            <div className="header-container">
              <h1 className="header-title">Select Items</h1>
              <div>
                <button className="overlay-add-button" onClick={handleAddItems}>
                  ADD
                </button>
                <button className="close-button" onClick={closeOverlay}>
                  Close
                </button>
              </div>
            </div>
            <div className="customer-selector-container">
                <div className="customer-selector-grid">
                  {items.map((item, index) => (
                    <ItemCard
                      key={index}
                      name={item.name}
                      status={item.status}
                    />
                  ))}
                </div>
            </div>
          </div>
        </div>
      )}

      <div>
      <div className="items">
        <h2>Items</h2>
        <div className="item-row">
          <span>Name</span>
          <span>Amount</span>
          <span>Amount</span>
        </div>
        <div className="item-row">
          <span>Laptop</span>
          <span className="amount-controls">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </span>
          <span>85000</span>
        </div>
        <div className="total-row">
          <span>Total</span>
          <span>85000</span>
        </div>
      </div>
      <div className="action-buttons">
        <button className="cancel">Cancel</button>
        <Link href="/billing/test/test">
        <button className="create">Create</button>
        </Link>
      </div>
    </div>
      

      <style jsx>{`
        .billing-details {
          padding: 20px;
          width: 100%;
          height: 100%;
        }

        .billing-details h1 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .customer-details-card {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .customer-details-title {
          display: block;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
          border-bottom: 1px solid #ddd;
          padding-bottom: 10px;
        }

        .customer-detail {
          display: flex;
          margin-bottom: 10px;
        }

        .detail-label {
          font-weight: bold;
          margin-right: 5px;
        }

        .detail-value {
          font-weight: normal;
        }

        .detail-label::after {
          content: ":";
          margin-right: 5px;
        }

        .button-container {
          margin-top: 20px;
          text-align: right;
        }

        .main-add-button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
          font-size: 16px;
        }

        .main-add-button:hover {
          background-color: #0056b3;
        }

        .plus-icon {
          margin-right: 5px;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .overlay-content {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          width: 80%;
          max-width: 600px;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .header-title {
          font-size: 20px;
          font-weight: bold;
        }

        .overlay-add-button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 5px 10px;
          margin-right: 10px;
          cursor: pointer;
          border-radius: 5px;
        }

        .overlay-add-button:hover {
          background-color: #0056b3;
        }

        .close-button {
          background-color: #dc3545;
          color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          border-radius: 5px;
        }

        .close-button:hover {
          background-color: #c82333;
        }

        .customer-selector-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .customer-selector-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
      `}</style>
    </>
  );
};

export default BillingDetails;
