'use client';

import React from 'react';
// import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>

          <li className="sidebar-item">
            <span className="icon">🏠</span>
            <span className="label">Dashboard</span>
          </li>


          <li className="sidebar-item">
            <span className="icon">📁</span>
            <span className="label">Master</span>
          </li>



          <li className="sidebar-item">
            <span className="icon">🧾</span>
            <span className="label">Billing</span>
          </li>

      </ul>
      <style jsx>{`
        .sidebar {
          width: 200px;
          height: 100vh;
          background-color: #f5f5f5;
          padding: 20px;
          box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .sidebar ul {
          list-style-type: none;
          padding: 0;
          width: 100%;
        }
        
        .sidebar-item {
          display: flex;
          align-items: center;
          padding: 10px 15px;
          margin-bottom: 10px;
          border-radius: 4px;
          transition: background-color 0.3s ease;
          cursor: pointer;
          color: #333;
        }
        
        .sidebar-item:hover {
          background-color: #e0e0e0;
        }
        
        .icon {
          margin-right: 10px;
          font-size: 20px;
        }
        
        .label {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
