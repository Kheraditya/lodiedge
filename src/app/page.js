import Image from "next/image";
import styles from "./page.module.css";
import { fetchUsers } from "@/lib/data";

export default async function Home() {
  const customer = await fetchUsers();
  console.log({customer});
  return (
    <>
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
