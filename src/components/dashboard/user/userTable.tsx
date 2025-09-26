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
// import { RiSearch2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom"
import { FilterLayout } from "@/components/filter"
import { useSearchStore } from "@/helpers/store/useSearchText"
import { useEffect } from "react"
import { usePagintion } from "@/helpers/store/usePagination"

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

    const navigate = useNavigate()
    const { search } = useSearchStore((state => state))
    const { updateTotalPage, page, pageSize } = usePagintion((state) => state)

    const { data, isLoading } = useFetchData<IPagination<IUser>>({
        endpoint: `/user/search-users`, name: "user", params: {
            page: page - 1,
            size: show ? 6 : pageSize,
            searchText: search
        }
    });

    useEffect(() => {
        if (!isLoading) {
            updateTotalPage(Number(data?.totalPages)) 
        }
    }, [isLoading])


    return (
        <div className=" w-full flex flex-col gap-1 " >
            {show ? (
                <div className=" w-full flex justify-between items-center rounded-md py-3 px-4 bg-white " >
                    <p className=" text-sm font-semibold " >Recent Created Account</p>
                    <Button onClick={() => navigate("/dashboard/user/alluser")} className=" w-fit px-4 h-[40px] text-sm rounded-full " >
                        View All Users
                    </Button>
                </div>
            ) : (
                <FilterLayout />
            )}

            <LoadingAnimation loading={isLoading} length={data?.content?.length} >
                <Table>
                    <TableHeader>
                        <TableRow className=" h-[47px] border-white " >
                            <TableHead>USERNAME</TableHead>
                            <TableHead>EMAIL</TableHead>
                            {/* <TableHead>NO. OF  EVENT </TableHead>
                            <TableHead>NO. OF POST</TableHead> */}
                            <TableHead>STATUS</TableHead>
                            <TableHead>ACTION</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className=" bg-white "  >
                        {data?.content.map((item, index) => (
                            <TableRow className=" h-[47px] border-white " key={index}>
                                <TableCell >{item.username}</TableCell>
                                <TableCell >{item.email}</TableCell>
                                {/* <TableCell >0 Event</TableCell>
                                <TableCell >0 Post</TableCell> */}
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
            </LoadingAnimation>
            {(Number(data?.totalPages) > 0 && !show) && (
                <CustomPagination totalElement={data?.totalElements+""} />
            )}
            <div className=" h-9 w-full " />
        </div>
    )
} 
