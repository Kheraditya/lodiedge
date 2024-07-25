"use client";

import React from "react";
import Card from "./Cards/Card";

const Master = () => {
  return (
    <div className="master">
      <h1>Master</h1>
      <div className="cards">
        <Card title="Customer" description="Read or Create customer data" />
        <Card title="Items" description="Read or Create items data" />
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
      `}</style>
    </div>
  );
};

export default Master;
