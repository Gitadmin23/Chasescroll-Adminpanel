import { EventTable, EventTotalInfo } from "@/components/dashboard";
// import { TotalCashInfo } from "@/components/shared";


export default function EventHomePage() {
    return( 
        <div className=" w-full h-full flex flex-col gap-8 text-headtext " >
            <EventTotalInfo /> 
            {/* <TotalCashInfo /> */}
            <EventTable show={true} />
        </div>
    )
}