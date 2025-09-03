"use client"
 
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription, 
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { days: "Mon", completed: 186, pending: 80 },
  { days: "Tue", completed: 305, pending: 200 },
  { days: "Wed", completed: 237, pending: 120 },
  { days: "Thu", completed: 73, pending: 190 },
  { days: "Fri", completed: 209, pending: 130 },
  { days: "Sat", completed: 214, pending: 140 },
  { days: "Sun", completed: 114, pending: 40 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#5D70F9",
  },
  mobile: {
    label: "Mobile",
    color: "#F04438",
  },
} satisfies ChartConfig

function ChartBarMultiple() {
  return (
    <Card className=" w-fit h-fit border-0 bg-white ">
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className=" h-[350px] " >
          <BarChart accessibilityLayer data={chartData} barSize={10} >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="days"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <ChartTooltip
              cursor={false} 
              wrapperStyle={{ zIndex: 50, pointerEvents: "none", background: "white", borderWidth: "0px" }}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="completed" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="pending" fill="var(--color-mobile)" radius={4} /> 
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  )
}

export default ChartBarMultiple
