import { UserGraph, UserTable, UserTotalInfo } from "@/components/dashboard";


export default function UserHomePage() {
    return(
        <div className=" w-full h-full flex flex-col gap-8 text-headtext " >
            <UserTotalInfo />
            <UserGraph />
            <UserTable />
        </div>
    )
}