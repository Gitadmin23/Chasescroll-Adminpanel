// import { filterDate } from "@/assets/databank/dateFilter";
// import { CustomSelect } from "../../shared";
import { RiUserLine, RiUserUnfollowLine } from "react-icons/ri";
import { useFetchData } from "@/hooks/useFetchData";
// import type { IPagination } from "@/helpers/models/pagination";
// import type { IUser } from "@/helpers/models/user";
import LoadingAnimation from "@/components/shared/loadingAnimation";
// import { useFetchData } from "@/hooks/useFetchData";


export default function UserTotalInfo() {



    const labelTotal = [
        {
            name: "Total Users",
            icon: RiUserLine,
            color: "#4C6FFF"
        },
        {
            name: "Email Signin Users",
            icon: RiUserUnfollowLine,
            color: "#F46262"
        },
        {
            name: "Google Signin Users"
        }
    ]

    const { data, isLoading } = useFetchData<{
        "totalUsers": number,
        "totalGoogleSigninUsers": number,
        "totalEmailSigninUsers": number
    }>({
        endpoint: `/auth/analytics`, name: "user"
    });
 
    return (
        <LoadingAnimation loading={isLoading} >
            <div className=" w-full gap-4 flex text-headtext " >
                {labelTotal?.map((item, index) => {
                    return (
                        <div key={index} className=" w-full h-[116px] flex items-center rounded-lg bg-white shadow-lg " >
                            <div className=" w-full flex h-full py-1 " >
                                <div className=" w-full p-4 flex flex-col " >
                                    <div className=" w-full flex items-center justify-between " >
                                        <div className=" flex flex-col gap-1 " >
                                            <p className=" text-bodytext text-xs " >{item?.name}</p>
                                            <p className=" text-2xl font-semibold " >{item?.name === "Total Users" ? data?.totalUsers : item?.name === "Email Signin Users" ? data?.totalEmailSigninUsers : data?.totalGoogleSigninUsers}</p>
                                        </div>
                                        <div style={{ backgroundColor: item?.color }} className={` w-[46px] h-[46px] flex justify-center items-center text-white rounded-full  `} >
                                            {item?.icon && (
                                                <item.icon size={"18px"} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </LoadingAnimation>
    )
}