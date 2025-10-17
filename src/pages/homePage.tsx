import { ActivitySection, SiteInformation } from "@/components/dashboard";
import { TotalCashInfo } from "@/components/shared";
import LoadingAnimation from "@/components/shared/loadingAnimation";
import { useFetchData } from "@/hooks/useFetchData";


export default function DashboardPage() {



    const { data: fundraiser, isLoading: loadingfundraiser } = useFetchData<{
        "totalFundraiser": number,
        "totalCompleted": number,
        "totalOngoing": number
    }>({
        endpoint: `/fund-raiser/admin/analytics`, name: "user"
    });


    const { data: user, isLoading: loadinguser } = useFetchData<{
        "totalUsers": number,
        "totalGoogleSigninUsers": number,
        "totalEmailSigninUsers": number
    }>({
        endpoint: `/auth/analytics`, name: "user"
    });


    const { data: event, isLoading: loadingevent } = useFetchData<{
        "totalEvents": number,
        "upcomingEvents": number,
        "paidEvents": number,
        "freeEvents": number,
        "totalTicketSalesQty": number,
        "totalTicketSalesAmount": number
    }>({
        endpoint: `/events/admin-analytics`, name: "event"
    });

    return (
        <>
            <LoadingAnimation loading={loadinguser || loadingevent || loadingfundraiser} > 
                <div className=" w-full h-full flex flex-col gap-8 text-headtext " >
                    <SiteInformation totalEvents={event?.totalEvents ?? 0} totalFundraising={fundraiser?.totalFundraiser ?? 0} totalUsers={user?.totalUsers ?? 0} />
                    <TotalCashInfo ticketSale={event?.totalTicketSalesAmount ?? 0} />
                    <ActivitySection />
                </div>
            </LoadingAnimation>
        </>
    )
}