"use server";
import {Customer,Order,Item } from "./models";
import { connectToDB } from "./db";
import { redirect } from "next/navigation";

export const addCustomer = async (formData) => {
    const { name, address, pancard, gst, status } = Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const newCustomer = new Customer({
        name, address, pancard, gst, status
      });
  
      await newCustomer.save();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create user!");
    }
  
    // revalidatePath("/dashboard/users");
    redirect("/master");
  };
export const updateCustomer = async (formData) => {
    const { name, address, pancard, gst, status,id } = Object.fromEntries(formData);
    // const objId = JSON.parse(id);
    // const objId = eval(`(${id})`)
    // console.log({objId});
    console.log({id});
  
    try {
      connectToDB();
  
      const updateFields = new Customer({
        name, address, pancard, gst, status
      });
  
      await Customer.findByIdAndUpdate(id, updateFields, { new: true });
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update product!");
    }
  
    // revalidatePath("/dashboard/users");
    redirect("/master");
  };
export const addItem = async (formData) => {
    const { name, price, status } = Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const newItem = new Item({
        name, price, status
      });
  
      await newItem.save();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create user!");
    }
  
    // revalidatePath("/dashboard/users");
    redirect("/master");
  };

  export const billing = async(formData) =>{
    const {  items, amount } = Object.fromEntries(formData);
    try {
        connectToDB();
    
        const newItem = new Order({
          amount,
          items
        });
    
        await newItem.save();
      } catch (err) {
        console.log(err);
        throw new Error("Failed to create user!");
      }
  }