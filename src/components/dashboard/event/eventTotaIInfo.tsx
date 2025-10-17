import LoadingAnimation from "@/components/shared/loadingAnimation"; 
import { formatNumber } from "@/helpers/utils/numberFormat";
import { useFetchData } from "@/hooks/useFetchData";
import { RiHourglassLine, RiIdCardLine, RiTimeLine } from "react-icons/ri"


export default function EventTotalInfo() {

    const labelTotal = [
        {
            name: "Total Event Created",
            color: "#FF92AE",
            icon: RiIdCardLine
        },
        {
            name: "Upcoming Event",
            color: "#4C6FFF",
            icon: RiIdCardLine
        },
        {
            name: "Paid Event",
            color: "#68DBF2",
            icon: RiTimeLine
        },
        {
            name: "Free Event",
            color: "#F7936F",
            icon: RiHourglassLine
        }
    ]

    const { data, isLoading } = useFetchData<{
        "totalEvents": number,
        "upcomingEvents": number,
        "paidEvents": number,
        "freeEvents": number,
        "totalTicketSalesQty": number,
        "totalTicketSalesAmount": number
    }>({
        endpoint: `/events/admin-analytics`, name: "event"
    });

    return (
        <LoadingAnimation loading={isLoading} >

            <div className=" w-full gap-4 flex text-headtext " >
                {labelTotal?.map((item, index) => {
                    return (
                        <div key={index} className=" w-full h-[116px] rounded-lg flex items-center bg-white shadow-lg " >
                            <div className=" w-full p-4 flex flex-col " >
                                <div className=" w-full flex items-center justify-between " >
                                    <div className=" flex flex-col gap-1 " >
                                        <p className=" text-bodytext text-xs " >{item?.name}</p>
                                        <p className=" text-2xl font-semibold " >{formatNumber(item?.name === "Total Event Created" ? data?.totalEvents : item?.name === "Upcoming Event" ? data?.upcomingEvents : item?.name === "Paid Event" ? data?.paidEvents : item?.name === "Free Event" ? data?.freeEvents : "", "")}</p>
                                    </div>
                                    <div style={{ backgroundColor: item?.color }} className=" text-white w-[46px] h-[46px] flex justify-center items-center rounded-full " >
                                        <item.icon size={"18px"} />
                                    </div>
                                </div>
                                {/* <div className=" flex items-center gap-2 " >
                                <div className=" bg-[#DEFFEE] text-customgreen rounded-lg justify-center items-center h-[24px] px-2 text-[10px] font-bold " >
                                    +13%
                                </div>
                                <p className=" text-[10px] font-medium text-bodytext " >since last month</p>
                            </div> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </LoadingAnimation>
    )
}