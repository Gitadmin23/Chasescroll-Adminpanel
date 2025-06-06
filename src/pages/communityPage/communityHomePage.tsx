import { CommunityTable, CommunityTotaIInfo } from "@/components/dashboard";
import { TotalCashInfo } from "@/components/shared";


export default function CommunityHomePage() {
    return( 
        <div className=" w-full h-full flex flex-col gap-8 text-headtext " >
            <CommunityTotaIInfo />
            <TotalCashInfo /> 
            <CommunityTable />
        </div>
    )
}