"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import { useVisibility } from "@/contexts/visibility-context"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@valoro/ui"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@valoro/ui"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@valoro/ui"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@valoro/ui"

export const description = "An interactive area chart"

type TransactionData = {
  id: number
  transaction: string
  value: number
  type: "Receita" | "Despesa"
  category: string
  date: string
  effectiveValue: number
}

const chartConfig = {
  receita: {
    label: "Receita",
    color: "hsl(142, 76%, 36%)", 
  },
  despesa: {
    label: "Despesa",
    color: "hsl(0, 84%, 60%)",
  },
} satisfies ChartConfig

function parseDate(dateString: string): Date {
  const parts = dateString.split("/")
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10) - 1
    const year = parseInt(parts[2], 10)
    return new Date(year, month, day)
  }
  return new Date()
}

function formatDateToISO(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

function processTransactionData(data: TransactionData[]) {
  const groupedByDate: Record<string, { receita: number; despesa: number }> = {}

  data.forEach((item) => {
    const date = parseDate(item.date)
    const dateKey = formatDateToISO(date)

    if (!groupedByDate[dateKey]) {
      groupedByDate[dateKey] = { receita: 0, despesa: 0 }
    }

    if (item.type === "Receita") {
      groupedByDate[dateKey].receita += item.value
    } else {
      groupedByDate[dateKey].despesa += item.value
    }
  })

  return Object.entries(groupedByDate)
    .map(([date, values]) => ({
      date,
      receita: values.receita,
      despesa: values.despesa,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

export function ChartAreaInteractive({
  data,
}: {
  data?: TransactionData[]
}) {
  const isMobile = useIsMobile()
  const { isVisible } = useVisibility()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const chartData = React.useMemo(() => {
    if (!data || data.length === 0) return []
    return processTransactionData(data)
  }, [data])

  const filteredData = React.useMemo(() => {
    if (chartData.length === 0) return []
    
    const referenceDate = chartData.length > 0 
      ? new Date(chartData[chartData.length - 1].date)
      : new Date()
    
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    
    return chartData.filter((item) => {
      const date = new Date(item.date)
      return date >= startDate
    })
  }, [chartData, timeRange])

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Movimentações</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total de movimentações do último trimestre
          </span>
          <span className="@[540px]/card:hidden">Último trimestre</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Último trimestre</ToggleGroupItem>
            <ToggleGroupItem value="30d">Últimos 30 dias</ToggleGroupItem>
            <ToggleGroupItem value="7d">Últimos 7 dias</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Último trimestre" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Último trimestre
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Últimos 30 dias
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Últimos 7 dias
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        {filteredData.length === 0 ? (
          <div className="flex h-[250px] items-center justify-center text-muted-foreground">
            Nenhum dado disponível para o período selecionado
          </div>
        ) : (
          <ChartContainer
            config={chartConfig}
            className={`aspect-auto h-[250px] w-full ${!isVisible ? 'blur-sm select-none' : ''}`}
          >
            <AreaChart data={filteredData}>
              <defs>
                <linearGradient id="fillReceita" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-receita)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-receita)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillDespesa" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-despesa)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-despesa)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return date.toLocaleDateString("pt-BR", {
                    month: "short",
                    day: "numeric",
                  })
                }}
              />
              <ChartTooltip
                cursor={false}
                content={
                  !isVisible ? undefined : (
                    <ChartTooltipContent
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("pt-BR", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })
                      }}
                      indicator="dot"
                    />
                  )
                }
              />
              <Area
                type="monotone"
                dataKey="receita"
                fill="url(#fillReceita)"
                stroke="var(--color-receita)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="despesa"
                fill="url(#fillDespesa)"
                stroke="var(--color-despesa)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}
