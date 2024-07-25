'use client';

import React from 'react';

const Invoice = () => {
  return (
    <div className="invoice-container">
      <h1>Invoice Details</h1>
      <div className="customer-details">
        <div className="left">
          <p><strong>Name:</strong> Gupta Enterprize Pvt. Ltd.</p>
          <p><strong>Address:</strong> Gurgaon, Haryana</p>
          <p><strong>Pan Card:</strong> BCNGS1234H</p>
          <p><strong>GST Num:</strong> 06BCNGS1234H1Z5</p>
        </div>
        <div className="right">
          <p><strong>Invoice ID:</strong> INVC224830</p>
        </div>
      </div>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Laptop</td>
            <td>1</td>
            <td>85000</td>
          </tr>
          <tr>
            <td colSpan="2" className="total-label">Total</td>
            <td className="total-amount">85000</td>
          </tr>
        </tbody>
      </table>

      <style jsx>{`
        .invoice-container {
          width: 80%;
          margin: 0 auto;
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: left;
        }

        .customer-details {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .customer-details .left p, .customer-details .right p {
          margin: 5px 0;
        }

        .invoice-table {
          width: 100%;
          border-collapse: collapse;
        }

        .invoice-table th, .invoice-table td {
          padding: 15px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        .invoice-table th {
          background-color: #f4f4f4;
        }

        .total-label {
          text-align: right;
          font-weight: bold;
        }

        .total-amount {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Invoice;
