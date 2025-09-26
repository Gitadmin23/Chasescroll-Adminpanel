// import { useFetchData } from "@/hooks/useFetchData";
import { CiCreditCard1 } from "react-icons/ci";
import { BsClockHistory, BsFillFileBarGraphFill } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
// import LoadingAnimation from "@/components/shared/loadingAnimation";

export default function CommunityTotalInfo() {

    const labelTotal = [
        {
            name: "Communities Created",
            bgcolor: "#FF92AE",
            icon: CiCreditCard1
        },
        {
            name: "Private Communities",
            bgcolor: "#4C6FFF",
            icon: BsFillFileBarGraphFill
        },
        {
            name: "Public Communities",
            bgcolor: "#68DBF2",
            icon: BsClockHistory
        },
        {
            name: "Communities Members",
            bgcolor: "#F7936F",
            icon: CgSandClock
        }
    ]


    // const { data: analytics, isLoading } = useFetchData<{
    //     "totalBusinesses": number,
    //     "totalProducts": number,
    //     "totalRentals": number,
    //     "totalBookings": number,
    //     "totalOrders": number,
    //     "totalReciepts": number
    // }>({
    //     endpoint: `/group/admin/analytics/get-total`, name: "groupanalytics"
    // });

    // console.log(analytics);


    return (
        // <LoadingAnimation loading={isLoading} > 
            <div className=" w-full gap-4 flex text-headtext " >
                {labelTotal?.map((item, index) => {
                    return (
                        <div key={index} className=" w-full h-fit items-center justify-center rounded-lg bg-white shadow-lg " >
                            <div className=" w-full p-4 flex flex-col " >
                                <div className=" w-full flex items-center justify-between " >
                                    <div className=" flex flex-col gap-1 " >
                                        <p className=" text-bodytext text-xs " >{item?.name}</p>
                                        <p className=" text-2xl font-semibold " >0</p>
                                    </div>
                                    <div style={{ backgroundColor: item?.bgcolor }} className=" flex justify-center items-center w-[46px] h-[46px] rounded-full " >
                                        <item.icon size={"18px"} color="white" />
                                    </div>
                                </div>
                                {/* <div className=" flex items-center gap-2 " >
                                <div className=" bg-[#DEFFEE] text-customgreen rounded-lg h-[24px] flex justify-center items-center px-2 text-[10px] font-bold " >
                                    +13%
                                </div>
                                <p className=" text-[10px] font-medium text-bodytext " >since last month</p>
                            </div> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        // </LoadingAnimation>
    )
} 
