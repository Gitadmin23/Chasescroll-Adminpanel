import { AreaGraph } from "../graphs";


export default function TotalCashInfo() {
    return(
        <div className=" w-full flex gap-4 " >
            <div className=" w-full py-8 px-6 rounded-[12px] flex flex-col gap-3 bg-white " >
                <p className=" font-medium " >Total Revenue</p>
                <div className=" w-full flex gap-2 items-center " >
                    <p className=" font-bold text-2xl " >$89,000</p>
                    <p className=" text-sm text-bodytext " ><span className=" text-error " >4.3%</span> Down from yesterday</p>
                </div>
                <AreaGraph />
            </div>
            <div className=" w-fit h-full  " >
                <div className=" w-[400px] h-full bg-white flex flex-col justify-center px-6 pt-8 pb-14 rounded-[12px] " >
                    <div className=" flex w-full justify-between  " >
                        <div className=" flex flex-col gap-3 " >
                            <p className=" font-medium " >Total Fundraising</p>
                            <p className=" font-bold text-2xl " >$89,000</p>
                        </div>
                        <div className=" w-[75px] h-[71px] bg-[#FFDEF1] flex justify-center items-center rounded-2xl " >

                        </div>
                    </div> 
                    <p className=" text-sm text-bodytext mt-auto " ><span className=" text-customgreen " >4.3%</span> Down from yesterday</p>
                </div>
            </div>
        </div>
    )
}