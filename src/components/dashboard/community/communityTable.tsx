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
import { useFetchData } from "@/hooks/useFetchData";
import type { IGroup } from "@/helpers/models/group";
import UserImage from "@/components/shared/userImage";
import { dateFormat } from "@/helpers/utils/dateFormat";
import LoadingAnimation from "@/components/shared/loadingAnimation";
import type { IPagination } from "@/helpers/models/pagination";
import { usePagintion } from "@/helpers/store/usePagination";
import { useSearchStore } from "@/helpers/store/useSearchText";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FilterLayout } from "@/components/filter";

export default function CommunityTable(
    { show }: { show?: boolean }
) {

    const navigate = useNavigate()
    const { search } = useSearchStore((state => state))
    const { updateTotalPage, page, pageSize } = usePagintion((state) => state)

    const { data, isLoading } = useFetchData<IPagination<IGroup>>({
        endpoint: `/group/group`, name: "group", params: {
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
            {show && (
                <div className=" w-full flex justify-between items-center rounded-md py-3 px-4 bg-white " >
                    <p className=" text-sm font-semibold " >New Communities</p>
                    <Button onClick={() => navigate("/dashboard/community/allcommunity")} className=" w-fit px-4 h-[40px] text-sm rounded-full " >
                        View All
                    </Button>
                </div>
            )}
            {!show && (
                <FilterLayout />
            )}
            <LoadingAnimation loading={isLoading} >
                <Table>
                    <TableHeader>
                        <TableRow className=" h-[47px] border-white uppercase " >
                            <TableHead>Community name</TableHead>
                            <TableHead>Created By</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>COMMUNITY TYPE</TableHead>
                            <TableHead>USERS</TableHead>
                            <TableHead>Suspended</TableHead>
                            <TableHead>ACTION</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className=" bg-white "  >
                        {data?.content.map((item, index) => (
                            <TableRow className=" h-[47px] border-white capitalize " key={index}>
                                <TableCell >{item?.data?.name}</TableCell>
                                <TableCell >
                                    {item.creator && (
                                        <div className=" flex gap-2 items-center " >
                                            <div className=" w-fit h-fit rounded-full " >
                                                <UserImage data={item.creator} />
                                            </div>
                                            {item.creator?.firstName + " " + item?.creator?.lastName}
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell >{dateFormat(item?.createdOn)}</TableCell>
                                <TableCell >{item?.data?.isPublic ? "Public" : "Private" }</TableCell>
                                <TableCell >{item?.data?.memberCount} People </TableCell>
                                <TableCell >{item?.isSuspended ? item?.isSuspended+"" : "false"} </TableCell>
                                <TableCell >
                                    <DrawerSheet header="Community Information" >
                                        <CommunityInfoModal item={item} />
                                    </DrawerSheet>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </LoadingAnimation>
            {(Number(data?.totalElements) > pageSize && !show) && (
                <CustomPagination totalElement={data?.totalElements + ""} />
            )}
            <div className=" h-9 w-full " />
        </div>
    )
}