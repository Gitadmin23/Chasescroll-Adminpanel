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

const user = [
    {
        username: "@Chivido24",
        email: "Chivido24@gmail.com",
        event: "35",
        post: "32",
    },
    {
        username: "@Chivido24",
        email: "Chivido24@gmail.com",
        event: "35",
        post: "32",
    },
    {
        username: "@Chivido24",
        email: "Chivido24@gmail.com",
        event: "35",
        post: "32",
    },
    {
        username: "@Chivido24",
        email: "Chivido24@gmail.com",
        event: "35",
        post: "32",
    },
    {
        username: "@Chivido24",
        email: "Chivido24@gmail.com",
        event: "35",
        post: "32",
    },
]

export default function UserTable() {
    return (
        <div className=" w-full flex flex-col gap-1 " >
            <div className=" w-full flex justify-between items-center rounded-md py-3 px-4 bg-white " >
                <p className=" text-sm font-semibold " >Recent Created Account</p>
                <Button className=" w-fit px-4 h-[40px] text-sm rounded-full " >
                    View All Users
                </Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow className=" h-[47px] border-white " >
                        <TableHead>USERNAME</TableHead>
                        <TableHead>EMAIL</TableHead>
                        <TableHead>NO. OF  EVENT </TableHead>
                        <TableHead>NO. OF POST</TableHead>
                        <TableHead>STATUS</TableHead>
                        <TableHead>ACTION</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className=" bg-white "  >
                    {user.map((item, index) => (
                        <TableRow className=" h-[47px] border-white " key={index}>
                            <TableCell >{item.username}</TableCell>
                            <TableCell >{item.email}</TableCell>
                            <TableCell >{item.event} Event</TableCell>
                            <TableCell >{item.post} Post</TableCell>
                            <TableCell >
                                <div className=" bg-[#C2F3D633] rounded-4xl flex justify-center items-center h-[24px] w-[68px] " >
                                    <p className=" text-customgreen text-[10px] " >Active</p>
                                </div>
                            </TableCell>
                            <TableCell >
                                <div className=" rounded-4xl flex justify-center items-center h-[24px] border border-bordercolor w-[68px] " >
                                    <p className=" text-brand text-[10px] " >Active</p>
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