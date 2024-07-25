import Image from "next/image";
import { fetchUsers } from "@/lib/data";
import BillingDetails from "@/components/BillingDetails";
import Dashboard from "@/components/Dashboard";


export default async function Home() {
  const customer = await fetchUsers();
  console.log({customer});
  return (
    <>
    <Dashboard/>
    </>
  );
}
