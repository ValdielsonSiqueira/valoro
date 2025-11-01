"use client"

import { Button } from "@valoro/ui"
import { Separator } from "@valoro/ui"
import { SidebarTrigger } from "@valoro/ui"
import { ThemeToggle } from "@valoro/ui"
import { useVisibility } from "@/contexts/visibility-context"
import {
IconBrandGithub, 
IconMoodDollar,
IconEye,
IconEyeOff 
} from "@tabler/icons-react"

type TransactionData = {
  id: number
  transaction: string
  value: number
  type: "Receita" | "Despesa"
  category: string
  date: string
  effectiveValue: number
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

function calculateBalance(data: TransactionData[]): number {
  return data.reduce((total, item) => total + item.effectiveValue, 0)
}

export function SiteHeader({ data }: { data?: TransactionData[] }) {
  const { isVisible, toggleVisibility } = useVisibility()
  const balance = data ? calculateBalance(data) : 0
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base flex items-center gap-2 font-medium">
          Olá,
          <span className="text-primary">Valdielson</span>
          <IconMoodDollar className="!size-5 text-primary" /> 
        </h1>
        <div className="ml-auto flex items-center gap-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground text-lg">Saldo:</span>
              <span className={`text-primary font-bold text-lg ${!isVisible ? 'blur-sm select-none' : ''}`}>
                {formatCurrency(balance)}
              </span>
            </div>
            <Button 
              variant="link" 
              size="sm" 
              className="hidden sm:flex"
              onClick={toggleVisibility}
              aria-label={isVisible ? "Ocultar" : "Mostrar"}
            >
              {isVisible ? (
                <IconEye className="text-primary !size-6" />
              ) : (
                <IconEyeOff className="text-primary !size-6" />
              )}
            </Button>
            <ThemeToggle className="hidden sm:flex" />
            <Button variant="link" asChild size="sm" className="hidden sm:flex">
              <a
                href="https://github.com/ValdielsonSiqueira/valoro"
                rel="noopener noreferrer"
                target="_blank"
                className="dark:text-foreground"
              >
              <IconBrandGithub className="!size-5" />
              </a>
            </Button>
        </div>
      </div>
    </header>
  )
}
