import Invoice from "@/components/Invoice";
export default function Page({params,searchParams}) {
    const invoiceId = params;
    const name = searchParams?.name 
    return (
        <>
            <Invoice invoiceId={invoiceId} name={name}/>
        </>
    );
}