import { FundraiserList, FundraiserTotalInfo } from "@/components/dashboard";
import { TotalCashInfo } from "@/components/shared";


export default function FundraiserHomePage() {
    return( 
        <div className=" w-full h-full flex flex-col gap-8 text-headtext " >
            <FundraiserTotalInfo /> 
            <TotalCashInfo />
            <FundraiserList />
        </div>
    )
}