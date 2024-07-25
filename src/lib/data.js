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

