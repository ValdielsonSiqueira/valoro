"use client"

import { useMemo } from "react"
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import { useVisibility } from "@/contexts/visibility-context"
import { Badge } from "@valoro/ui"
import {
  Card,
  CardAction,
  CardDescription,
  CardEmpty,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@valoro/ui"

interface Transaction {
  id: number
  transaction: string
  value: number
  type: "Receita" | "Despesa"
  category: string
  date: string
  effectiveValue: number
}

interface SectionCardsProps {
  data?: Transaction[]
}

export function SectionCards({ data = [] }: SectionCardsProps) {
  const { isVisible } = useVisibility()

  const receitas = useMemo(() => {
    return data
      .filter(item => item.type === "Receita")
      .reduce((sum, item) => sum + item.value, 0)
  }, [data])
  
  const despesas = useMemo(() => {
    return data
      .filter(item => item.type === "Despesa")
      .reduce((sum, item) => sum + item.value, 0)
  }, [data])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-2 lg:px-6 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs">
      <Card className="@container/card">
        {receitas === 0 ? (
          <CardEmpty
            icon={<IconTrendingUp className="size-8 text-muted-foreground" />}
            title="Nenhuma receita registrada"
            description="Soma de todas as transações de receita"
          />
        ) : (
          <>
        <CardHeader>
          <CardDescription>Receita</CardDescription>
          <CardTitle className={`text-2xl font-semibold tabular-nums @[250px]/card:text-3xl ${!isVisible ? 'blur-sm select-none' : ''}`}>
            {formatCurrency(receitas)}
          </CardTitle>
          <CardAction>
            <Badge variant="success" className={!isVisible ? 'blur-sm select-none' : ''}>
              <IconTrendingUp />
              Receita
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Total de receitas <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Soma de todas as transações de receita
          </div>
        </CardFooter>
          </>
        )}
      </Card>
      <Card className="@container/card">
        {despesas === 0 ? (
          <CardEmpty
            icon={<IconTrendingDown className="size-8 text-muted-foreground" />}
            title="Nenhuma despesa registrada"
            description="Soma de todas as transações de despesa"
          />
        ) : (
          <>
        <CardHeader>
          <CardDescription>Despesas</CardDescription>
          <CardTitle className={`text-2xl font-semibold tabular-nums @[250px]/card:text-3xl ${!isVisible ? 'blur-sm select-none' : ''}`}>
            {formatCurrency(despesas)}
          </CardTitle>
          <CardAction>
            <Badge variant="destructive" className={!isVisible ? 'blur-sm select-none' : ''}>
              <IconTrendingDown />
              Despesa
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Total de despesas <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Soma de todas as transações de despesa
          </div>
        </CardFooter>
          </>
        )}
      </Card>
    </div>
  )
}
