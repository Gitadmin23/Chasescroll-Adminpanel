import { filterDate } from "@/assets/databank/dateFilter";
import { AreaGraph } from "../../graphs";
import { CustomSelect } from "../../shared";

export default function UserGraph(){ 
    return (
        <div className=" w-full py-8 px-6 rounded-[12px] flex flex-col gap-3 bg-white " >
            <div className=" w-full flex justify-between items-center " >
                <p className=" font-medium " >Total Users on Chasecroll</p>
                <div className=" w-[114px] " >
                    <CustomSelect placeholder="Month" data={filterDate} />
                </div>
            </div>
            <div className=" w-full flex gap-2 items-center " >
                <p className=" font-bold text-2xl " >$89,000</p>
                <p className=" text-sm text-bodytext " ><span className=" text-error " >4.3%</span> Down from yesterday</p>
            </div>
            <AreaGraph />
        </div>
    )
}