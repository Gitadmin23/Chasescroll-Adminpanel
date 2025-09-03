import { BarGraph } from "@/components/graphs";
import DoughnutChart from "@/components/graphs/doughnutGraph";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TransactionInfo() {
    return (
        <div className=" w-full flex gap-4 " >
            <BarGraph />
            <div className=" w-full flex flex-col gap-4 " >
                <div className=" py-6 px-6 bg- shadow-md rounded-2xl w-full flex flex-col " >
                    <p className=" text-sm font-bold " >Total Transaction</p>
                    <div className=" w-full flex justify-between items-center rounded-2xl " >
                        <div className=" " >
                            <div className=" w-[130px] flex flex-col gap-4 " >
                                <div className=" flex flex-col " >
                                    <div className=" flex gap-2 items-center " >
                                        <div className=" w-2 h-2 rounded-full bg-[#F04438] " />
                                        <p>20%</p>
                                    </div>
                                    <p className=" text-xs text-bodytext " >Completed</p>
                                </div>
                                <div className=" flex flex-col " >
                                    <div className=" flex gap-2 items-center " >
                                        <div className=" w-2 h-2 rounded-full bg-[#1570EF] " />
                                        <p>Pending</p>
                                    </div>
                                    <p className=" text-xs text-bodytext " >237 Users </p>
                                </div> 
                            </div>
                        </div>
                        <DoughnutChart />
                    </div>
                </div>
                <div className=" w-full h-full rounded-2xl px-6 flex justify-center items-center flex-col gap-3 bg-white shadow-md " >
                    <div className=" relative w-full h-[50px] " >
                        <Input className=" border-0 outline-none focus:border-0 active:border-0 h-[50px] bg-[#EDF2F7] " />
                        <div className=" w-fit absolute inset-y-0 flex justify-center items-center h-[50px] right-[5px] " >
                            <Button className=" font-semibold rounded-lg h-[40px] " >Send Report</Button>
                        </div>
                    </div>
                    <p className=" font-medium text-sm text-left mr-auto " >Follow your Account.</p>
                </div>
            </div>
        </div>
    )
}