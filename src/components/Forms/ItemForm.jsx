// 'use client';

import React from 'react';
import { fetchItem } from '@/lib/data';
import { addItem } from '@/lib/action';
const ItemForm = async({id}) => {
  const item = await fetchItem(id);
  return (
    <div className="form-container">
      <h2>Add New Item</h2>
      {id === "" ?
        <form action={addItem}>
        <div className="form-group">
          <label htmlFor="itemName">Item Name</label>
          <input type="text" id="name" name="name"  />
        </div>
        <div className="form-group">
          <label htmlFor="itemDescription">Item Description</label>
          <input type="text" id="itemDescription" name="price"  />
        </div>
        <div className="form-group">
          <label htmlFor="itemStatus">Item Status</label>
          <select id="itemStatus" name="itemStatus">
            <option value="Y">Available</option>
            <option value="N">Out of Stock</option>
          </select>
        </div>
        <div className="form-actions">
          <button type="button" className="cancel-button">Cancel</button>
          <button type="submit" className="create-button">Create</button>
        </div>
      </form>
      :
      <form action="">
        <div className="form-group">
          <label htmlFor="itemName">Item Name</label>
          <input type="text" id="itemName" name="name" placeholder={item.name} />
        </div>
        <div className="form-group">
          <label htmlFor="itemDescription">Item Price</label>
          <input type="text" id="price" name="itemDescription" placeholder={item.price}/>
        </div>
        <div className="form-group">
          <label htmlFor="itemStatus">Item Status</label>
          <select id="itemStatus" name="status">
            <option value="Y">Available</option>
            <option value="N">Out of Stock</option>
          </select>
        </div>
        <div className="form-actions">
          <button type="button" className="cancel-button">Cancel</button>
          <button type="submit" className="create-button">Create</button>
        </div>
      </form>}
      {/* <style jsx>{`
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
      `}</style> */}
    </div>
  );
};

export default ItemForm;
