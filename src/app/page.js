import Image from "next/image";
import { fetchOrders } from "@/lib/data";
import BillingDetails from "@/components/BillingDetails";
import Dashboard from "@/components/Dashboard";


export default async function Home({searchParams}) {
  const q = searchParams?.id || "";
  const page = searchParams?.page || 1;
  // const { count, orders } = await fetchOrders(q,page);
  // console.log({customer});
  return (
    <>
    
    <Dashboard invoiceId="qwertyu" name="something"/>

    {/* {orders.map((order)=>{
    <Dashboard invoiceId="qwertyu" name="something"/>

    })} */}
    </>
  );
}
