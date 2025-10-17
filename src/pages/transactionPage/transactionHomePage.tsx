import { TransactionTable } from "@/components/dashboard";


export default function TransactionHomePage() {
    return( 
        <div className=" w-full h-full flex flex-col gap-8 text-headtext " >
            <TransactionTable />
        </div>
    )
}