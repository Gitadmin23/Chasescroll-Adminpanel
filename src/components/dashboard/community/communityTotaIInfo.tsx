
export default function CommunityTotalInfo() {

    const labelTotal = [
        {
            name: "Communities Created"
        },
        {
            name: "Private Communities"
        },
        {
            name: "Public Communities"
        },
        {
            name: "Communities Members"
        }
    ]

    return (
        <div className=" w-full gap-4 flex text-headtext " >
            {labelTotal?.map((item, index) => {
                return (
                    <div key={index} className=" w-full h-[116px] rounded-lg bg-white shadow-lg " >
                        <div className=" w-full p-4 flex flex-col " >
                            <div className=" w-full flex items-center justify-between " >
                                <div className=" flex flex-col gap-1 " >
                                    <p className=" text-bodytext text-xs " >{item?.name}</p>
                                    <p className=" text-2xl font-semibold " >8,265</p>
                                </div>
                                <div className=" w-[46px] h-[46px] rounded-full bg-blue-600  " >

                                </div>
                            </div>
                            <div className=" flex items-center gap-2 " >
                                <div className=" bg-[#DEFFEE] text-customgreen rounded-lg h-[24px] flex justify-center items-center px-2 text-[10px] font-bold " >
                                    +13%
                                </div>
                                <p className=" text-[10px] font-medium text-bodytext " >since last month</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}