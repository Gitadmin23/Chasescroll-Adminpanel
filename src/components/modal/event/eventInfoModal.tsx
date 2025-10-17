import CustomButton from "@/components/shared/customButton";
import UserImage from "@/components/shared/userImage";
import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import type { IEvent } from "@/helpers/models/event";
import { IMAGE_URL } from "@/helpers/services/urls";
import { dateFormat, timeFormat } from "@/helpers/utils/dateFormat";
import { formatNumber } from "@/helpers/utils/numberFormat";
import useSuspend from "@/hooks/useSuspend";
import { IoMdCalendar, IoMdTime } from "react-icons/io";

export default function EventInfoModal({
    data,
    past, 
}: {
    data: IEvent,
    past: boolean,
}) {
    
    const { deleteEvent, downloadEvent } = useSuspend()

    return (
        <div className=" w-full flex flex-col gap-6 px-4 pb-4 " >
            <div className=" h-[233px] rounded-md " >
                <img alt="eventimage" src={IMAGE_URL + data?.currentPicUrl} className=" rounded-md w-full h-full object-cover " />
            </div>
            <div className=" w-full flex flex-col gap-4 " >
                <p className=" font-medium text-xs text-brand " >Event information</p>
                <div className=" w-full flex flex-col gap-1 " >
                    <p className=" font-medium text-bodytext text-sm " >Event Name</p>
                    <div className=" w-full h-[47px] flex items-center rounded-xl bg-[#F9F9FB] px-3 " >
                        <p className=" text-sm " >{data?.eventName}</p>
                    </div>
                </div>
                <div className=" w-full flex gap-4 " >
                    <div className=" w-full flex flex-col gap-1 " >
                        <p className=" font-medium text-bodytext text-sm " >Date</p>
                        <div className=" w-full h-[47px] flex gap-2 items-center rounded-xl bg-[#F9F9FB] px-3 " >
                            <IoMdCalendar size={"20px"} />
                            <p className=" text-xs " >{dateFormat(data?.startDate)}</p>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col gap-1 " >
                        <p className=" font-medium text-bodytext text-sm " >Time</p>
                        <div className=" w-full h-[47px] flex gap-2 items-center rounded-xl bg-[#F9F9FB] px-3 " >
                            <IoMdTime />
                            <p className=" text-xs " >{timeFormat(data?.startDate)}</p>
                        </div>
                    </div>
                </div>
                <div className=" w-full flex flex-col gap-1 " >
                    <p className=" font-medium text-bodytext text-sm " >Event Description</p>

                    <div className=" w-full py-2 flex gap-3 items-center rounded-xl bg-[#F9F9FB] px-3 " >
                        <div className="  text-sm" dangerouslySetInnerHTML={{ __html: data?.eventDescription }} />
                    </div>
                    {/* <Textarea placeholder="@Miracle20" className=" bg-[#F6F6F8] h-[16px] rounded-2xl border-[#F6F6F8] outline-none " /> */}
                </div> 
                {data?.interestedUsers?.length > 0 && (
                    <CustomButton onClick={()=> downloadEvent?.mutate(data?.id)} isLoading={downloadEvent?.isPaused} className=" rounded-full " >Download Event Attendee List</CustomButton>
                )}

            </div>

            <div className=" w-full flex gap-4 " >
                <div className=" flex flex-col gap-2 " >
                    <div className=" w-fit flex flex-col gap-1 " >
                        <p className=" text-xs " >Organizer</p>
                        <div className=" px-2 py-1 flex items-center gap-2 border border-bordercolor rounded-full " >
                            <div className=" w-fit " >
                                <div className=" w-6 h-6 rounded-full bg-amber-400 " >
                                    <UserImage data={data?.createdBy} size="24px" fontsize="14px" />
                                </div>
                            </div>
                            <p className=" font-medium text-xs text-brand " >{data?.createdBy?.firstName + " " + data?.createdBy?.lastName}</p>
                        </div>
                    </div>
                    <div className=" w-fit flex flex-col gap-1 " >
                        <p className=" text-xs " >Attendance</p>
                        <div className=" px-2 py-1 flex items-center gap-2 border border-bordercolor rounded-full " >
                            {/* <div className=" w-fit " >
                                <div className=" w-6 h-6 rounded-full bg-amber-400 " />
                            </div> */}
                            <p className=" font-medium text-xs text-brand " >{data?.interestedUsers?.length} people</p>
                        </div>
                    </div>
                    <div className=" w-fit flex flex-col gap-1 " >
                        <p className=" text-xs " >Collabrators</p>
                        {/* <div className=" px-2 py-1 flex items-center gap-2 border border-bordercolor rounded-full " >
                            <div className=" w-fit " >
                                <div className=" w-6 h-6 rounded-full bg-amber-400 " />
                            </div>
                            <p className=" font-medium text-xs text-brand " >David X Jessica</p>
                        </div> */}
                    </div>
                </div>
                <div className=" flex flex-1 flex-col gap-2 " >
                    <div className=" w-full flex flex-col gap-1 " >
                        <p className=" text-xs " >Ticket Types & Ticket Available</p>
                        <div className=" p-3 gap-3 flex flex-col border border-bordercolor rounded-2xl " >
                            {data?.productTypeData?.map((item, index) => {
                                return (
                                    <div key={index} className=" w-full flex justify-between " >
                                        <p className=" text-xs " >{item?.ticketType}</p>
                                        <p className=" text-brand text-xs " >{formatNumber(item?.ticketsSold, "")} sold</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {/* <div className=" w-full flex flex-col gap-1 " >
                        <p className=" text-xs " >Community Tied to the Event</p>
                        <div className=" w-full flex justify-between gap-2 items-center " >
                            <div className=" px-2 py-1 flex items-center gap-2 border border-bordercolor rounded-full " >
                                <div className=" w-fit " >
                                    <div className=" w-6 h-6 rounded-full bg-amber-400 " />
                                </div>
                                <p className=" font-medium text-xs " >Mexico danc... </p>
                            </div>
                            <p className=" text-xs text-brand " >View</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className=" w-full flex justify-between gap-2 " >
                {(!past && !data?.isDeleted) && (
                    <CustomButton onClick={() => deleteEvent.mutate(data?.id)} isLoading={deleteEvent.isPending} className=" w-[50%] h-[48px] bg-[#FDD7D766] text-[#F62727] hover:bg-[#FDD7D766] hover:text-[#F62727] rounded-full " >Delete Event</CustomButton>
                    // <Button onClick={()=> deleteEvent.mutate(data?.id)} className=" w-[50%] h-[44px] text-sm rounded-full " >Suspend Event</Button>
                )}

                <SheetTrigger asChild>
                    <Button variant="outline" className=" w-[50%] h-[44px] text-sm rounded-full border-brand text-brand " >Close</Button>
                </SheetTrigger>
            </div>
        </div>
    )
}       