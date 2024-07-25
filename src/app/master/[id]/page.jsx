import Customer from "@/components/Customer";
import Item from "@/components/Item";
export default function Page({params}) {
    const {id} = params;
    console.log({id});
    return (
       <>
       {id === "customer" && <Customer/>}
       {id === "items" && <Item/>}
        
       </>
    );
}