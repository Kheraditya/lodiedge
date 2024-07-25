import { Customer, Order, Item } from "./models";
import { connectToDB } from "./db";

export const fetchUsers = async () => {
    const regex = new RegExp("", "i");
    try {
      connectToDB();
      const customer = await Customer.find({ name: { $regex: regex } })
      return  customer ;
    } catch (err) {
      console.log(err);
      // throw new Error("Failed to fetch users!");
    }
  };
export const fetchUser = async (name) => {
    try {
      connectToDB();
      const customer = await Customer.findOne({ name: name })
      return  customer ;
    } catch (err) {
      console.log(err);
      // throw new Error("Failed to fetch users!");
    }
  };
export const fetchUserId = async (id) => {
    try {
      connectToDB();
      const customer = await Customer.findById(id)
      return  customer ;
    } catch (err) {
      console.log(err);
      // throw new Error("Failed to fetch users!");
    }
  };
export const fetchItems = async () => {
    const regex = new RegExp("", "i");
    try {
      connectToDB();
      const customer = await Item.find({ name: { $regex: regex } })
      return  customer ;
    } catch (err) {
      console.log(err);
      // throw new Error("Failed to fetch users!");
    }
  };
export const fetchItem = async (name) => {
    try {
      connectToDB();
      const customer = await Item.findOne({ name: name })
      return  customer ;
    } catch (err) {
      console.log(err);
      // throw new Error("Failed to fetch users!");
    }
  };
export const fetchItemsId = async (id) => {
    try {
      connectToDB();
      const customer = await Item.findById(id)
      return  customer ;
    } catch (err) {
      console.log(err);
      // throw new Error("Failed to fetch users!");
    }
  };



  export const fetchOrders= async (q, page) => {
    const regex = new RegExp(q, "i");
  
    const ITEM_PER_PAGE = 5;
  
    try {
      connectToDB();
      const count = await Order.find({ invoiceId:{ $regex: regex } }).count();
      const orders = await Order.find({ invoiceId:{ $regex: regex }})
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
      return { count, orders };
    } catch (err) {
      console.log(err);
      // throw new Error("Failed to fetch users!");
    }
  };

  export const fetchOrder = async (id, invoiceId) => {
    try {
      connectToDB();
      console.log({ userId, courseId });
      const order = await Order.findOne({invoiceId: invoiceId });
      const customer = await Customer.findById(id);
      console.log(order);
      return {order,customer};
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch order!");
    }
  };
