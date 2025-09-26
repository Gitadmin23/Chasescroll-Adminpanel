import { BusinesslInfo, BusinessTable } from "@/components/dashboard";
// import { TotalCashInfo } from "@/components/shared";


export default function BusinessHomePage() {
    return( 
        <div className=" w-full h-full flex flex-col gap-8 text-headtext " >
            <BusinesslInfo />
            {/* <TotalCashInfo /> */}
            <BusinessTable />
        </div>
    )
}