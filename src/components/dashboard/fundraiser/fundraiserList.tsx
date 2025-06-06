import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "../../ui/button"
import { CustomPagination, FundraiserCard } from "../../shared"

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

export default function FundraiserList() {
    return (
        <div className=" w-full flex flex-col gap-3 " >
            <div className=" w-full flex justify-between items-center rounded-md py-3 px-4 bg-white " >
                <p className=" text-sm font-semibold " >Recent Activities</p>
                <div className=" flex gap-2 items-center " >
                    <div className=" w-fit px-4 h-[40px] text-brand bg-[#F3FAFE] text-xs font-medium rounded-[20px] flex justify-center items-center " >
                        Ongoing
                    </div>
                    <div className=" w-fit px-4 h-[40px] gap-2 text-xs font-medium rounded-[20px] flex justify-center items-center " >
                        Completed
                        <div className=" w-2 h-2 rounded-full bg-brand " />
                    </div>
                </div>
                <Button className=" w-fit px-4 h-[40px] text-sm rounded-full " >
                    View All
                </Button>
            </div>
            <div className=" w-full flex flex-col gap-2 justify-center items-center " >
                <FundraiserCard />
                <FundraiserCard />
                <FundraiserCard />
            </div>
            <div className=" h-9 w-full " />
        </div>
    )
}