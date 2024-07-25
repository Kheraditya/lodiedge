'use client';

import React from 'react';

const ItemForm = () => {
  return (
    <div className="form-container">
      <h2>Add New Item</h2>
      <form>
        <div className="form-group">
          <label htmlFor="itemName">Item Name</label>
          <input type="text" id="itemName" name="itemName" />
        </div>
        <div className="form-group">
          <label htmlFor="itemDescription">Item Description</label>
          <input type="text" id="itemDescription" name="itemDescription" />
        </div>
        <div className="form-group">
          <label htmlFor="itemStatus">Item Status</label>
          <select id="itemStatus" name="itemStatus">
            <option value="available">Available</option>
            <option value="out_of_stock">Out of Stock</option>
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

        #itemStatus {
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

export default ItemForm;
