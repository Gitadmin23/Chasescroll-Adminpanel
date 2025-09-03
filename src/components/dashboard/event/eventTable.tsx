import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "../../ui/button"
import { CustomPagination, DrawerSheet } from "../../shared"
import { EventInfoModal } from "@/components/modal"
import { useFetchData } from "@/hooks/useFetchData"
import type { IPagination } from "@/helpers/models/pagination"
import type { IEvent } from "@/helpers/models/event"
import LoadingAnimation from "@/components/shared/loadingAnimation"
import { dateFormat } from "@/helpers/utils/dateFormat"
import { numberFormatNaire } from "@/helpers/utils/formatNumberWithK"
import UserImage from "@/components/shared/userImage"

// const event = [
//     {
//         name: "Chivido2024",
//         createby: "Bradford",
//         date: "03/04/2024",
//         price: "$100-$200",
//         attendee: "2,230 People "
//     },
//     {
//         name: "Chivido2024",
//         createby: "Bradford",
//         date: "03/04/2024",
//         price: "$100-$200",
//         attendee: "2,230 People "
//     },
//     {
//         name: "Chivido2024",
//         createby: "Bradford",
//         date: "03/04/2024",
//         price: "$100-$200",
//         attendee: "2,230 People "
//     },
//     {
//         name: "Chivido2024",
//         createby: "Bradford",
//         date: "03/04/2024",
//         price: "$100-$200",
//         attendee: "2,230 People "
//     },
//     {
//         name: "Chivido2024",
//         createby: "Bradford",
//         date: "03/04/2024",
//         price: "$100-$200",
//         attendee: "2,230 People "
//     },
//     {
//         name: "Chivido2024",
//         createby: "Bradford",
//         date: "03/04/2024",
//         price: "$100-$200",
//         attendee: "2,230 People "
//     },
// ]

export default function EventTable() {


    const { data, isLoading } = useFetchData<IPagination<IEvent>>(`/events/events`, "event",
        // {
        //     page: page,
        //     size: size
        // }
    ); 

    return (
        <div className=" w-full flex flex-col gap-1 " >
            <div className=" w-full flex justify-between items-center rounded-md py-3 px-4 bg-white " >
                <p className=" text-sm font-semibold " >Recent Activities</p>
                <div className=" flex gap-2 items-center " >
                    <div className=" w-fit px-4 h-[40px] text-brand bg-[#F3FAFE] text-xs font-medium rounded-[20px] flex justify-center items-center " >
                        Upcoming
                    </div>
                    <div className=" w-fit px-4 h-[40px] gap-2 text-xs font-medium rounded-[20px] flex justify-center items-center " >
                        Past Event
                        <div className=" w-2 h-2 rounded-full bg-brand " />
                    </div>
                </div>
                <Button className=" w-fit px-4 h-[40px] text-sm rounded-full " >
                    View All
                </Button>
            </div>
            <LoadingAnimation loading={isLoading} length={data?.content?.length} > 
                <Table>
                    <TableHeader>
                        <TableRow className=" h-[47px] border-white uppercase " >
                            <TableHead>Event Name</TableHead>
                            <TableHead>Created By</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Ticket Price</TableHead>
                            <TableHead>attendance</TableHead>
                            <TableHead>ACTION</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className=" bg-white "  >
                        {data?.content?.map((item, index) => (
                            <TableRow className=" h-[47px] border-white " key={index}>
                                <TableCell >{item.eventName}</TableCell>
                                <TableCell >
                                    <div className=" flex gap-2 items-center " >
                                        <div className=" w-fit h-fit rounded-full " >
                                            <UserImage data={item?.createdBy}  />
                                        </div>
                                        {item.createdBy?.firstName+" "+item?.createdBy?.lastName}
                                    </div>
                                </TableCell>
                                <TableCell >{dateFormat(item?.startDate)}</TableCell>
                                <TableCell >{numberFormatNaire(item.maxPrice)}</TableCell>
                                <TableCell >{item?.interestedUsers?.length} People</TableCell>
                                <TableCell >
                                    <DrawerSheet header="Event" >
                                        <EventInfoModal data={item} />
                                    </DrawerSheet>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </LoadingAnimation>
            <CustomPagination />
            <div className=" h-9 w-full " />
        </div>
    )
}