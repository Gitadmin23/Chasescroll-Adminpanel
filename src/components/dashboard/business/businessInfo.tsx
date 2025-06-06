

export default function BusinessInfo() {

    const data = [
        {
            name: "Service Created"
        },
        {
            name: "Kiosk Created"
        },
        {
            name: "Rentals Created"
        }
    ]

    return (
        <div className=" w-full flex bg-white rounded-lg h-[179px] justify-center items-center " >
            {data?.map((item, index) => {
                return (
                    <>
                        <div key={index} className=" w-full flex flex-col items-center gap-3 " >
                            <div className=" w-[46px] h-[46px] rounded-full bg-[#FB83A2] " >

                            </div>
                            <p className=" text-2xl font-semibold " >8,265</p>
                            <p className=" font-semibold text-bodytext " >{item?.name}</p>
                        </div>
                        {data?.length -1 !== index && ( 
                            <div className=" w-fit h-[60%] ">
                                <div className=" w-[1px] h-full bg-bordercolor " />
                            </div>
                        )}
                    </>
                )
            })}
        </div>
    )
}