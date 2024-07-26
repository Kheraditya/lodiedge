// "use client";

import React from "react";
import Card from "./Cards/Card";
import Link from "next/link";

const Master = () => {
  return (
    <div className="master">
      <h1>Master</h1>
      <div className="cards">
      <Link href="/master/customer">
        <Card title="Customer" description="Read or Create customer data" />
        </Link>
        <Link href="/master/items">
        <Card title="Items" description="Read or Create items data" />
        </Link>
      </div>
      {/* <style jsx>{`
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
      `}</style> */}
    </div>
  );
};

export default Master;
