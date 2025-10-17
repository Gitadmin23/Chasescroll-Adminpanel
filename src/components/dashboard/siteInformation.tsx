import { formatNumberWithK } from "@/helpers/utils/formatNumberWithK";  


export default function SiteInformation(
    { totalEvents, totalUsers, totalFundraising } : { totalUsers: number, totalEvents: number, totalFundraising: number }
) {
    
    return(
        <div className=" w-full gap-4 flex " >
            <div className=" w-full rounded-lg h-[122px] bg-white flex flex-col justify-center gap-2 px-4 shadow-sm" >
                <p className=" text-sm text-bodytext " >Users on Chasescroll</p>
                <div className=" w-full flex items-center justify-between " >
                    <p className=" text-3xl font-semibold " >{formatNumberWithK(totalUsers)}</p> 
                </div>
            </div>
            <div className=" w-full rounded-lg h-[122px] bg-white flex flex-col justify-center gap-2 px-4 shadow-sm" >
                <p className=" text-sm text-bodytext " >All Event</p>
                <div className=" w-full flex items-center justify-between " >
                    <p className=" text-3xl font-semibold " >{formatNumberWithK(totalEvents)}</p> 
                </div>
            </div>
            <div className=" w-full rounded-lg h-[122px] bg-white flex flex-col justify-center gap-2 px-4 shadow-sm" >
                <p className=" text-sm text-bodytext " >Fundraising</p>
                <div className=" w-full flex items-center justify-between " >
                    <p className=" text-3xl font-semibold " >{formatNumberWithK(totalFundraising)}</p> 
                </div>
            </div>
            <div className=" w-full rounded-lg h-[122px] bg-white flex flex-col justify-center gap-2 px-4 shadow-sm" >
                <p className=" text-sm text-bodytext " >Website visitor's</p>
                <div className=" w-full flex items-center justify-between " >
                    <p className=" text-3xl font-semibold " >0</p> 
                </div>
            </div>
        </div>
    )
}