import BillingDetails from "@/components/BillingDetails";
export default function Page({params}) {
    const name = params;
    return (
        <>
           <BillingDetails name={name}/>
        </>
    );
}