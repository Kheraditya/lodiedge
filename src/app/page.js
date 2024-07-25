import Image from "next/image";
import { fetchUsers } from "@/lib/data";
import Header from "@/components/Header";
// import Sidebar from "@/components/Sidebar";
import BillingDetails from "@/components/BillingDetails";


export default async function Home() {
  const customer = await fetchUsers();
  console.log({customer});
  return (
    <>
    <Header />
    {/* <Sidebar/> */}
    <BillingDetails />
      <div>
        {customer.map((item)=>(
         
          <div>
            <p> {item.name}</p>
            <p>{item.address}</p>
          </div>
        ))}
      </div>
    </>
  );
}
