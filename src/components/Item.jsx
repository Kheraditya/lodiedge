// 'use client';

import React from "react";
import CustomCard from "./Cards/CustomCard";
import Link from "next/link";
import { fetchItems } from "@/lib/data";

const Item = async() => {
  let items = await fetchItems();
  if(items === null || undefined){
    items=[];
    console.log({items});
  }
  return (
    <>
      <div className="master">
        <h1>Items</h1>
        <Link href="/master/items/itemForm">
        <div className="add-button-container">
            <button className="add-button">ADD</button>
        </div>
            </Link>
        <div className="cards">
        {items.map((item)=>(
        <Link href={`/master/items/itemForm?id=${item.name}`}>
          <CustomCard companyName={item.name} status={item.status} statusClass="active" />
            </Link>
        ))}
            {/* <CustomCard
              companyName="Laptop"
              status="Active"
              statusClass="active"
            /> */}
        </div>
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
      `}</style> */}
    </>
  );
};

export default Item;
