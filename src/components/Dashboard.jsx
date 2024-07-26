// 'use client';

import Link from 'next/link';
import React from 'react';
import { fetchUser } from '@/lib/data';

const Dashboard = async({invoiceId,name}) => {
// const order = await fetchOrder()
// const customer = await fetchUser(name)
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <input
        type="text"
        placeholder="Search by Invoice ID"
        className="search-input"
      />
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Customer name</th>
            <th>Item name (s)</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>INVC224830</td>
            <td>Gupta Enterprize Pvt. Ltd.</td>
            <td>Laptop</td>
            <td>85000</td>
            <td>
            <Link href={`/dashboard/${invoiceId}?id=${name}`}>
                <button className="view-button">View</button>
                </Link>
            </td>
          </tr>
        </tbody>
      </table>

      {/* <style jsx>{`
        .dashboard-container {
          width: 80%;
          margin: 0 auto;
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: left;
        }

        .search-input {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .dashboard-table {
          width: 100%;
          border-collapse: collapse;
        }

        .dashboard-table th, .dashboard-table td {
          padding: 15px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        .dashboard-table th {
          background-color: #1A237E;
          color: white;
        }

        .view-button {
          padding: 10px 15px;
          color: white;
          background-color: #1A237E;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .view-button:hover {
          background-color: #1f193d;
        }
      `}</style> */}
    </div>
  );
};

export default Dashboard;
