'use client';

import React from "react";
import CustomCard from "./Cards/CustomCard";
import Link from "next/link";

const Customer = () => {
  return (
    <>
      <div className="master">
        <h1>Customer</h1>
        <Link href="/master/customer/customerForm">
        <div className="add-button-container">
            <button className="add-button">ADD</button>
        </div>
        </Link>
        <div className="cards">
        <Link href="/master/customer/customerForm">
            <CustomCard companyName="oss pvt. ltd." status="Active" statusClass="active" />
            </Link>
        </div>
      </div>
      <style jsx>{`
        .master {
          padding: 20px;
          width: 100%;
        }

        .master h1 {
          font-size: 24px;
          margin-bottom: 20px;
        }

        .cards {
          display: flex;
          gap: 20px;
        }

        .add-button-container {
          position: absolute;
          top: 12%;
          right: 5%;
        }

        .add-button {
          background-color: #3b82f6;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          display: flex;
          align-items: center;
        }

        .add-button:hover {
          background-color: #2563eb;
        }

        .add-button::before {
          content: '+';
          margin-right: 5px;
          font-size: 20px;
        }
      `}</style>
    </>
  );
};

export default Customer;
