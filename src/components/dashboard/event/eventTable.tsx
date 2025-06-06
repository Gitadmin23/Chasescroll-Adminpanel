import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "../../ui/button"
import { CustomPagination } from "../../shared"

const event = [
    {
        name: "Chivido2024",
        createby: "Bradford",
        date: "03/04/2024",
        price: "$100-$200",
        attendee: "2,230 People "
    },
    {
        name: "Chivido2024",
        createby: "Bradford",
        date: "03/04/2024",
        price: "$100-$200",
        attendee: "2,230 People "
    },
    {
        name: "Chivido2024",
        createby: "Bradford",
        date: "03/04/2024",
        price: "$100-$200",
        attendee: "2,230 People "
    },
    {
        name: "Chivido2024",
        createby: "Bradford",
        date: "03/04/2024",
        price: "$100-$200",
        attendee: "2,230 People "
    },
    {
        name: "Chivido2024",
        createby: "Bradford",
        date: "03/04/2024",
        price: "$100-$200",
        attendee: "2,230 People "
    },
    {
        name: "Chivido2024",
        createby: "Bradford",
        date: "03/04/2024",
        price: "$100-$200",
        attendee: "2,230 People "
    },
]

export default function EventTable() {
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
                    {event.map((item, index) => (
                        <TableRow className=" h-[47px] border-white " key={index}>
                            <TableCell >{item.name}</TableCell>
                            <TableCell >
                                <div className=" flex gap-2 items-center " >
                                    <div className=" w-6 h-6 rounded-full bg-green-400 " />
                                    {item.createby}
                                </div>
                            </TableCell>
                            <TableCell >{item.date}</TableCell>
                            <TableCell >{item.price}</TableCell>
                            <TableCell >{item?.attendee} People</TableCell>
                            <TableCell >
                                <div className=" rounded-4xl flex justify-center items-center h-[24px] border border-bordercolor w-[68px] " >
                                    <p className=" text-brand text-[10px] font-medium " >VIEW</p>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <CustomPagination />
            <div className=" h-9 w-full " />
        </div>
    )
}