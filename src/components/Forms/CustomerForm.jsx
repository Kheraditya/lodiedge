'use client';

import React from 'react';

const AddCustomerForm = () => {
  return (
    <div className="form-container">
      <h2>Add New Customer</h2>
      <form>
        <div className="form-group">
          <label htmlFor="customerName">Customer Name</label>
          <input type="text" id="customerName" name="customerName" />
        </div>
        <div className="form-group">
          <label htmlFor="customerAddress">Customer Address</label>
          <input type="text" id="customerAddress" name="customerAddress" />
        </div>
        <div className="form-group">
          <label htmlFor="customerPan">Customer Pan Card Number</label>
          <input type="text" id="customerPan" name="customerPan" />
        </div>
        <div className="form-group">
          <label htmlFor="customerGst">Customer GST Number</label>
          <input type="text" id="customerGst" name="customerGst" />
        </div>
        <div className="form-group">
          <label htmlFor="customerStatus">Customer Status</label>
          <select id="customerStatus" name="customerStatus">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="form-actions">
          <button type="button" className="cancel-button">Cancel</button>
          <button type="submit" className="create-button">Create</button>
        </div>
      </form>
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
        }

        .form-container {
          width: 600px;
          padding: 20px;
        }

        h2 {
          text-align: left;
          margin-bottom: 20px;
          font-size: 24px;
        }

        form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-bottom: 5px;
          font-weight: bold;
        }

        input, select {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }

        #customerStatus {
          width: 100%;
        }

        .form-actions {
          grid-column: span 2;
          display: flex;
          justify-content: flex-start;
          margin-top: 20px;
        }

        .cancel-button, .create-button {
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
        }

        .cancel-button {
          background-color: white;
          color: red;
          border: 1px solid red;
          margin-right: 10px;
        }

        .create-button {
          background-color: navy;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default AddCustomerForm;
