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
import { BusinessInfoModal } from "@/components/modal"
import type { IPagination } from "@/helpers/models/pagination"
import { useFetchData } from "@/hooks/useFetchData"
import type { IBusiness } from "@/helpers/models/product"
import { dateFormat } from "@/helpers/utils/dateFormat"
import { formatNumber } from "@/helpers/utils/numberFormat"

// const business = [
//     {
//         name: "next Generation Barbers",
//         createby: "Bradford",
//         date: "03/04/2024",
//         price: "$100-$200",
//         service: "Hair Cut & Pedicure"
//     },
//     {
//         name: "next Generation Barbers",
//         createby: "Bradford",
//         date: "03/04/2024",
//         price: "$100-$200",
//         service: "Hair Cut & Pedicure"
//     },
//     {
//         name: "next Generation Barbers",
//         createby: "Bradford",
//         date: "03/04/2024",
//         price: "$100-$200",
//         service: "Hair Cut & Pedicure"
//     },
//     {
//         name: "next Generation Barbers",
//         createby: "Bradford",
//         date: "03/04/2024",
//         price: "$100-$200",
//         service: "Hair Cut & Pedicure"
//     },
//     {
//         name: "next Generation Barbers",
//         createby: "Bradford",
//         date: "03/04/2024",
//         price: "$100-$200",
//         service: "Hair Cut & Pedicure"
//     },
// ]

export default function BusinessTable() {

    const { data } = useFetchData<IPagination<IBusiness>>(`/business-service/search`, "business",
        // {
        //     page: page,
        //     size: size
        // }
    );
    
    console.log(data);
    

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
                    {data?.content.map((item, index) => (
                        <TableRow className=" h-[47px] border-white " key={index}>
                            <TableCell >{item.name}</TableCell>
                            <TableCell >
                                <div className=" flex gap-2 items-center " >
                                    <div className=" w-6 h-6 rounded-full bg-green-400 " />
                                    {item.vendor?.firstName+" "+item?.vendor?.lastName}
                                </div>
                            </TableCell>
                            <TableCell >{dateFormat(item?.createdDate)}</TableCell>
                            <TableCell >{formatNumber(item.price)}</TableCell>
                            <TableCell >{item?.category?.replace("_", " ")?.replace("_", " ")?.replace("_", " ")?.replace("_", " ")?.replace("_", " ")}</TableCell>
                            <TableCell > 
                            <DrawerSheet header="Service Details" >
                                <BusinessInfoModal data={item} />
                            </DrawerSheet>
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