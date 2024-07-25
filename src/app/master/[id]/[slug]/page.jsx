import AddCustomerForm from "@/components/Forms/CustomerForm";
import ItemForm from "@/components/Forms/ItemForm";

export default function Page({params}) {
    const {slug} = params;

    return (
        <>
            {slug ==="customerForm" && <AddCustomerForm/>}
            {slug ==="itemForm" && <ItemForm/>}
        </>
    );
}