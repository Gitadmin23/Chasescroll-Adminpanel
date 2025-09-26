import LoadingAnimation from "@/components/shared/loadingAnimation";
import { useFetchData } from "@/hooks/useFetchData";
import { TbPaint } from "react-icons/tb";
import { BiStoreAlt } from "react-icons/bi";
import { AiOutlineCar } from "react-icons/ai";

export default function BusinessInfo() {

    const data = [
        {
            name: "Service Created",
            bgcolor: "#FB83A2",
            icon: TbPaint
        },
        {
            name: "Kiosk Created",
            bgcolor: "#4C6FFF",
            icon: BiStoreAlt
        },
        {
            name: "Rentals Created",
            bgcolor: "#12163C",
            icon: AiOutlineCar
        }
    ]

    const { data: analytics, isLoading } = useFetchData<{
        "totalBusinesses": number,
        "totalProducts": number,
        "totalRentals": number,
        "totalBookings": number,
        "totalOrders": number,
        "totalReciepts": number
    }>({
        endpoint: `/booking/admin/analytics`, name: "user"
    });

    return (
        <LoadingAnimation loading={isLoading} >
            <div className=" w-full h-fit " >
                <div className=" w-full flex bg-white rounded-lg h-[179px] justify-center items-center " >
                    {data?.map((item, index) => {
                        return (
                            <>
                                <div key={index} className=" w-full flex flex-col items-center gap-3 " >
                                    <div style={{ backgroundColor: item?.bgcolor }} className=" w-[46px] h-[46px] rounded-full flex justify-center items-center " >
                                        <item.icon size={"20px"} color="white" />
                                    </div>
                                    <p className=" text-2xl font-semibold " >{item?.name === "Service Created" ? analytics?.totalBusinesses : item?.name === "Kiosk Created" ? analytics?.totalProducts : analytics?.totalRentals}</p>
                                    <p className=" font-semibold text-bodytext " >{item?.name}</p>
                                </div>
                                {data?.length - 1 !== index && (
                                    <div className=" w-fit h-[60%] ">
                                        <div className=" w-[1px] h-full bg-bordercolor " />
                                    </div>
                                )}
                            </>
                        )
                    })}
                </div>
            </div>
        </LoadingAnimation>
    )
}