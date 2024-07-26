import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
    {
  name:{
  type:String,
  },
  address:{
  type:String,
  },
  pancard:{
  type:String,
  },
  gst:{
  type:String,
  },
  status:{
  type:String,
  },
  },
    { timestamps:true}
  );
  
  const itemsSchema = new mongoose.Schema(
    {
  name:{
  type:String,
  },
  price:{
  type:String,
  },
  status:{
  type:String,
  },
  },
    { timestamps:true}
  );
  
  const orderSchema = new mongoose.Schema(
    {
  invoiceId:{
  type:String,
  },
  name:{
  type:String,
  },
  customerId:{
    type:String
  },
  amount:{
  type:String,
  },
  items: [
    {
      type: {
        type: String,
        required: true,
      },
      value: {
        type: Number,
        required: true,
      },
  
    },
  ],},
{timestamps:true})

export const Customer = mongoose.models.Customer || mongoose.model("Customer", customerSchema);
export const Item = mongoose.models.Item || mongoose.model("Item", itemsSchema);
export const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);