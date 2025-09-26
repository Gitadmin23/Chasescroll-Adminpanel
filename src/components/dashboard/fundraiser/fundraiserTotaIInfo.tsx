import LoadingAnimation from "@/components/shared/loadingAnimation";
import { useFetchData } from "@/hooks/useFetchData";
import { TbCurrencyNaira } from "react-icons/tb"

export default function FundraiserTotalInfo() {

    const labelTotal = [
        {
            name: "Total Fundraising",
            color: "#34C759"
        },
        {
            name: "Completed",
            color: "#4C6FFF"
        },
        {
            name: "Ongoing",
            color: "#FF9500"
        }
    ]

    const { data, isLoading } = useFetchData<{
        "totalFundraiser": number,
        "totalCompleted": number,
        "totalOngoing": number
    }>({
        endpoint: `/fund-raiser/admin/analytics`, name: "user"
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
                                        <p className=" text-2xl font-semibold " >{item?.name === "Total Fundraising" ? data?.totalFundraiser : item?.name === "Completed" ? data?.totalCompleted : data?.totalOngoing}</p>
                                    </div>
                                    <div style={{ backgroundColor: item?.color }} className=" w-[46px] h-[46px] flex justify-center items-center rounded-full bg-blue-600  " >
                                        <TbCurrencyNaira size={"18px"} color="white" />
                                    </div>
                                </div>
                                {/* <div className=" flex items-center gap-2 " >
                                <div className=" bg-[#DEFFEE] text-customgreen rounded-lg h-[24px] justify-center items-center px-2 text-[10px] font-bold " >
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