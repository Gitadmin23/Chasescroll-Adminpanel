import DoughnutChart from "../graphs/doughnutGraph";
import { EventCard } from "../shared";
import { Button } from "../ui/button";


export default function ActivitySection() {
    return (
        <div className=" w-full flex gap-4 text-headtext " >
            <div className=" w-full py-8 px-6 rounded-[12px] flex flex-col gap-3 " >
                <div className=" w-full flex justify-between items-center " >
                    <p className=" font-medium " >Recent Activity</p>
                    <div className=" flex gap-3 " >
                        <div className=" w-[130px] h-[40px] bg-[#F3FAFE] flex text-brand rounded-2xl justify-center items-center font-medium text-sm " >
                            Upcoming
                        </div>
                        <div className=" w-[122px] h-[40px] bg-white flex text-bodytext rounded-2xl gap-2 justify-center items-center font-medium text-sm " >
                            Past Event 
                            <div className=" w-2 h-2 rounded-full bg-brand " />
                        </div>
                    </div>
                </div>
                <div className=" w-full py-8 px-3 rounded-[12px] flex flex-col gap-3 bg-white " >
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </div>
            <div className=" w-fit h-fit  " >
                <div className=" w-[400px] h-fit bg-white flex flex-col justify-center px-6 pt-8 pb-14 rounded-[12px] " >
                    <div className=" w-full flex items-center justify-between " >
                        <p className=" font-medium ">Statistics</p>
                        <Button variant={"outline"} className=" w-[64px] h-[26px] rounded-md text-xs font-semibold " >Export</Button>
                    </div>
                    <div className=" w-full flex justify-between items-center py-6 " >
                        <div className=" w-fit " >
                            <div className=" w-[130px] flex flex-col gap-4 " >
                                <p className="text-lg " >230 Request</p>
                                <div className=" flex flex-col " >
                                    <div className=" flex gap-2 items-center " >
                                        <div className=" w-2 h-2 rounded-full bg-[#FDA21C] " />
                                        <p>Pending</p>
                                    </div>
                                    <p className=" text-xs text-bodytext " >237 Users </p>
                                </div>
                                <div className=" flex flex-col " >
                                    <div className=" flex gap-2 items-center " >
                                        <div className=" w-2 h-2 rounded-full bg-customgreen " />
                                        <p>Approved</p>
                                    </div>
                                    <p className=" text-xs text-bodytext " >237 Users </p>
                                </div>
                            </div> 
                        </div>
                        <DoughnutChart />
                    </div>
                </div>  
            </div>
        </div>
    )
}