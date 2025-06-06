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

const business = [
    {
        name: "next Generation Barbers",
        createby: "Bradford",
        date: "03/04/2024",
        price: "$100-$200",
        service: "Hair Cut & Pedicure"
    },
    {
        name: "next Generation Barbers",
        createby: "Bradford",
        date: "03/04/2024",
        price: "$100-$200",
        service: "Hair Cut & Pedicure"
    },
    {
        name: "next Generation Barbers",
        createby: "Bradford",
        date: "03/04/2024",
        price: "$100-$200",
        service: "Hair Cut & Pedicure"
    },
    {
        name: "next Generation Barbers",
        createby: "Bradford",
        date: "03/04/2024",
        price: "$100-$200",
        service: "Hair Cut & Pedicure"
    },
    {
        name: "next Generation Barbers",
        createby: "Bradford",
        date: "03/04/2024",
        price: "$100-$200",
        service: "Hair Cut & Pedicure"
    },
]

export default function BusinessTable() {
    return (
        <div className=" w-full flex flex-col gap-1 " >
            <div className=" w-full flex justify-between items-center rounded-md py-3 px-4 bg-white " >
                <p className=" text-sm font-semibold " >Recent Activities</p>
                <Button className=" w-fit px-4 h-[40px] text-sm rounded-full " >
                    View All
                </Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow className=" h-[47px] border-white uppercase " >
                        <TableHead>Business name</TableHead>
                        <TableHead>Created By</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>services price</TableHead>
                        <TableHead>Services</TableHead>
                        <TableHead>ACTION</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className=" bg-white "  >
                    {business.map((item, index) => (
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
                            <TableCell >{item?.service}</TableCell>
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