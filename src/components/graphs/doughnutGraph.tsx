// 

"use client"

import * as React from "react" 
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,  
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart with text"


export default function ChartPieDonutText({ color = [] } : { color?: Array<string> }) {

  const chartData = [
    { browser: "chrome", visitors: 275, fill: color[0] ? color[0] : "#F04438" },
    { browser: "safari", visitors: 200, fill: color[1] ? color[1] : "#1570EF" },
  ]
  
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: color[0] ? color[0] : "#F04438",
    },
    safari: {
      label: "Safari",
      color: color[1] ? color[1] : "#1570EF",
    }
  } satisfies ChartConfig

  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col border-white shadow-white "> 
      <CardContent className="">

        <ChartContainer
          config={chartConfig}
          className=" w-[150px] h-[150px]  "
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors" 
              nameKey="browser"
              innerRadius={40}   // smaller = thicker ring
              outerRadius={70}   // optional, increases total size
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent> 
    </Card>
  )
}
