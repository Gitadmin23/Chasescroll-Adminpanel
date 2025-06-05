import { Calendar, LayoutGrid, Inbox, Search, Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar" 
import { useLocation, useNavigate } from "react-router"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutGrid,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
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
    <div className=" w-[301px] h-full flex flex-col gap-4 px-6 py-8 border-r border-bordercolor " >
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