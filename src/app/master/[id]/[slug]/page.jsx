
import AddCustomerForm from "@/components/Forms/CustomerForm";
import ItemForm from "@/components/Forms/ItemForm";

export default function Page({params,searchParams}) {
    const {slug} = params;
    const id = searchParams?.id || "";

    return (
        <>
            {slug ==="customerForm" && <AddCustomerForm id={id}/>}
            {slug ==="itemForm" && <ItemForm id={id}/>}
        </>
    );
}