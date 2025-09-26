// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"
import { Button } from "../../ui/button"
import { useFetchData } from "@/hooks/useFetchData";
import type { IPagination } from "@/helpers/models/pagination";
import LoadingAnimation from "@/components/shared/loadingAnimation";
import type { IFundraising } from "@/helpers/models/fundraising";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import UserImage from "@/components/shared/userImage";
import { dateFormat } from "@/helpers/utils/dateFormat";
import { numberFormatNaire } from "@/helpers/utils/formatNumberWithK";
import { FundraiserInfoModal } from "@/components/modal";
import { CustomPagination, DrawerSheet } from "@/components/shared";
import { usePagintion } from "@/helpers/store/usePagination";
import { useSearchStore } from "@/helpers/store/useSearchText";
import { FilterLayout } from "@/components/filter";
import { useEffect } from "react";
import { useNavigate } from "react-router";

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

export default function FundraiserList({
    show
}: {
    show?: boolean
}) {

    const { search } = useSearchStore((state => state))
    const { updateTotalPage, page, pageSize } = usePagintion((state) => state)
    const { data, isLoading } = useFetchData<IPagination<IFundraising>>({
        endpoint: `/fund-raiser/admin/search`, name: "donation", params: {
            page: page - 1,
            size: show ? 6 : pageSize,
            searchText: search
        }
    });

    const navigate= useNavigate()

    useEffect(() => {
        if (!isLoading) {
            updateTotalPage(Number(data?.totalPages))
        }
    }, [isLoading])

    return (
        <div className=" w-full flex flex-col gap-3 " >
            {show ? ( 
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
                    <Button onClick={()=> navigate("/dashboard/fundraiser/allfundraiser")} className=" w-fit px-4 h-[40px] text-sm rounded-full " >
                        View All
                    </Button>
                </div>
            ) : (
                <FilterLayout />
            )}
            <LoadingAnimation loading={isLoading} length={data?.content?.length} >
                <Table>
                    <TableHeader>
                        <TableRow className=" h-[47px] border-white uppercase " >
                            <TableHead>Title</TableHead>
                            <TableHead>Created By</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount raise</TableHead>
                            <TableHead>People donated</TableHead>
                            <TableHead>ACTION</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className=" bg-white "  >
                        {data?.content?.map((item, index) => (
                            <TableRow className=" h-[47px] border-white " key={index}>
                                <TableCell >{item.name}</TableCell>
                                <TableCell >
                                    <div className=" flex gap-2 items-center " >
                                        <div className=" w-fit h-fit rounded-full " >
                                            <UserImage data={item?.createdBy} />
                                        </div>
                                        {item.createdBy?.firstName + " " + item?.createdBy?.lastName}
                                    </div>
                                </TableCell>
                                <TableCell >{dateFormat(item?.endDate)}</TableCell>
                                <TableCell >{numberFormatNaire(item.total)}</TableCell>
                                <TableCell >{item.totalInGroup}</TableCell>
                                <TableCell >
                                    <DrawerSheet header="Fundraising Details" >
                                        <FundraiserInfoModal data={item} />
                                    </DrawerSheet>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </LoadingAnimation>
            {(Number(data?.numberOfElements) > pageSize && !show) && (
                <CustomPagination totalElement={data?.totalElements + ""} />
            )}
            <div className=" h-9 w-full " />
        </div>
    )
}