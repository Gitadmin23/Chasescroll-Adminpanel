import { ActivitySection, SiteInformation } from "@/components/dashboard"; 
import { TotalCashInfo } from "@/components/shared";


export default function DashboardPage() {
    return ( 
        <div className=" w-full h-full flex flex-col gap-8 text-headtext " > 
            <SiteInformation />
            <TotalCashInfo />
            <ActivitySection />
        </div>
    )
}