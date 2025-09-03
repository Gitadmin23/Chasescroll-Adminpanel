import { Settings, CalendarCheck, LockKeyhole } from "lucide-react" 
import { useLocation, useNavigate } from "react-router"
import { FaCreditCard, FaUsers } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { HiViewGrid } from "react-icons/hi";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";


// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: HiViewGrid,
  },
  {
    title: "User",
    url: "/dashboard/user",
    icon: HiUsers,
  },
  {
    title: "Events",
    url: "/dashboard/event",
    icon: CalendarCheck,
  },
  {
    title: "Fundraising",
    url: "/dashboard/fundraiser",
    icon: TbCurrencyNaira,
  },
  {
    title: "Business",
    url: "/dashboard/business",
    icon: LockKeyhole,
  },
  {
    title: "Communities",
    url: "/dashboard/community",
    icon: FaUsers,
  },
  {
    title: "Transactions",
    url: "/dashboard/transaction",
    icon: FaCreditCard,
  },
  {
    title: "Mail Blast",
    url: "#",
    icon: IoIosMail,
  },
  {
    title: "Role Mangement",
    url: "#",
    icon: Settings,
  },
]

export default function AppSidebar() {

  const history = useLocation()
  const navigate = useNavigate()

  const handleClick = (url: string) => { 
    navigate(url)
  }

  return (
    <div className=" w-[301px] h-full flex flex-col gap-2 px-6 py-8 border-r border-bordercolor " >
      {items.map((item) => (
        <div onClick={() => handleClick(item.url)} key={item.title} className={` w-full flex cursor-pointer font-semibold items-center gap-1 rounded-lg px-2 h-[56px] ${history.pathname === item.url ? "bg-brand text-white " : " bg-transparent text-inactive "} `} >
          <div className=" w-8 h-8 flex items-center justify-center " >
              <item.icon className=" w-5 h-5  " />
          </div>
          <span className=" text-sm font-medium  " >{item.title}</span>
        </div>
      ))}
    </div>
  )
}