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
import { UserModal } from "@/components/modal"
import { useFetchData } from "@/hooks/useFetchData"
import type { IUser } from "@/helpers/models/user"
// import { useState } from "react"
import LoadingAnimation from "@/components/shared/loadingAnimation"
import type { IPagination } from "@/helpers/models/pagination"
// import FormInput from "@/components/shared/customInput"
// import { RiSearch2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom"

// const user = [
//     {
//         username: "@Chivido24",
//         email: "Chivido24@gmail.com",
//         event: "35",
//         post: "32",
//     },
//     {
//         username: "@Chivido24",
//         email: "Chivido24@gmail.com",
//         event: "35",
//         post: "32",
//     },
//     {
//         username: "@Chivido24",
//         email: "Chivido24@gmail.com",
//         event: "35",
//         post: "32",
//     },
//     {
//         username: "@Chivido24",
//         email: "Chivido24@gmail.com",
//         event: "35",
//         post: "32",
//     },
//     {
//         username: "@Chivido24",
//         email: "Chivido24@gmail.com",
//         event: "35",
//         post: "32",
//     },
// ]

export default function UserTable({
    show
}: {
    show?: boolean
}) {

    // const [page, setPage] = useState(0)
    // const [size, setSize] = useState(20)
    // const [search, setSearch] = useState("")

    const navigate = useNavigate()

    const { data, isLoading } = useFetchData<IPagination<IUser>>(`/user/search-users`, "user", {
        page: 0,
        size: show ? 6 : 20
    });

    return (
        <LoadingAnimation loading={isLoading} length={data?.content?.length} >
            <div className=" w-full flex flex-col gap-1 " >
                {show ? (
                    <div className=" w-full flex justify-between items-center rounded-md py-3 px-4 bg-white " >
                        <p className=" text-sm font-semibold " >Recent Created Account</p>
                        <Button onClick={() => navigate("/dashboard/user/alluser")} className=" w-fit px-4 h-[40px] text-sm rounded-full " >
                            View All Users
                        </Button>
                    </div>
                ) : (
                    <div className=" w-full flex gap-3 items-center justify-between rounded-md py-3 px-4 bg-white " >
                        <div className=" w-fit " >

                        </div>
                        <div className=" w-fit flex items-center " >
                            {/* <div className=" w-[230px] " >
                                <FormInput hasFrontIcon={true}  icon={<RiSearch2Line size={"20px"} />} otherVaule={search} name={""} type="search" setValue={function (name: string, value: string): void {
                                    throw new Error("Function not implemented.")
                                }} />
                            </div> */}
                        </div>
                    </div>
                )}
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
                        {data?.content.map((item, index) => (
                            <TableRow className=" h-[47px] border-white " key={index}>
                                <TableCell >{item.username}</TableCell>
                                <TableCell >{item.email}</TableCell>
                                <TableCell >0 Event</TableCell>
                                <TableCell >0 Post</TableCell>
                                <TableCell >
                                    <div className=" bg-[#C2F3D633] rounded-4xl flex justify-center items-center h-[24px] w-[68px] " >
                                        <p className=" text-customgreen text-[10px] " >Active</p>
                                    </div>
                                </TableCell>
                                <TableCell >
                                    <DrawerSheet>
                                        <UserModal data={item} />
                                    </DrawerSheet>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <CustomPagination />
                <div className=" h-9 w-full " />
            </div>
        </LoadingAnimation>
    )
} 
