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
import { CommunityInfoModal } from "@/components/modal"

const business = [
    {
        name: "next Generation Barbers",
        createby: "Bradford",
        date: "03/04/2024",
        type: "Public",
        user: "2340"
    }, 
    {
        name: "next Generation Barbers",
        createby: "Bradford",
        date: "03/04/2024",
        type: "Public",
        user: "2340"
    }, 
    {
        name: "next Generation Barbers",
        createby: "Bradford",
        date: "03/04/2024",
        type: "Public",
        user: "2340"
    }, 
    {
        name: "next Generation Barbers",
        createby: "Bradford",
        date: "03/04/2024",
        type: "Public",
        user: "2340"
    }, 
    {
        name: "next Generation Barbers",
        createby: "Bradford",
        date: "03/04/2024",
        type: "Public",
        user: "2340"
    }, 
]

export default function CommunityTable() {
    return (
        <div className=" w-full flex flex-col gap-1 " >
            <div className=" w-full flex justify-between items-center rounded-md py-3 px-4 bg-white " >
                <p className=" text-sm font-semibold " >New Communities</p>
                <Button className=" w-fit px-4 h-[40px] text-sm rounded-full " >
                    View All
                </Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow className=" h-[47px] border-white uppercase " >
                        <TableHead>Community name</TableHead>
                        <TableHead>Created By</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>COMMUNITY TYPE</TableHead>
                        <TableHead>USERS</TableHead>
                        <TableHead>ACTION</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className=" bg-white "  >
                    {business.map((item, index) => (
                        <TableRow className=" h-[47px] border-white capitalize " key={index}>
                            <TableCell >{item.name}</TableCell>
                            <TableCell >
                                <div className=" flex gap-2 items-center " >
                                    <div className=" w-6 h-6 rounded-full bg-green-400 " />
                                    {item.createby}
                                </div>
                            </TableCell>
                            <TableCell >{item.date}</TableCell>
                            <TableCell >{item.type}</TableCell>
                            <TableCell >{item?.user} People </TableCell>
                            <TableCell >
                                <DrawerSheet header="Community Information" >
                                    <CommunityInfoModal />
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