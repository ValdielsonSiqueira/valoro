"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { 
  SectionCardsSkeleton,
  ChartAreaInteractiveSkeleton,
  DataTableSkeleton,
} from "@/components/dashboard-skeletons"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { VisibilityProvider } from "@/contexts/visibility-context"
import { useTransactions } from "@/hooks/use-transactions"
import { Skeleton } from "@valoro/ui"
import {
  SidebarInset,
  SidebarProvider,
} from "@valoro/ui"

export default function Page() {
  const { transactions, isLoading, addTransaction, editTransaction, removeTransaction } = useTransactions()

  const headerSkeleton = (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-4 w-px mx-2" />
        <Skeleton className="h-6 w-48 hidden lg:block" />
        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-6 w-24" />
          </div>
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md hidden sm:block" />
        </div>
      </div>
    </header>
  )

  return (
    <VisibilityProvider>
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" onAddTransaction={addTransaction} />
      <SidebarInset>
        {isLoading ? (
          <>
            {headerSkeleton}
            <div className="flex flex-1 flex-col">
              <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                  <SectionCardsSkeleton />
                  <div id="Movimentações">
                    <ChartAreaInteractiveSkeleton />
                  </div>
                  <div id="transacoes-table">
                    <DataTableSkeleton />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <SiteHeader data={transactions} />
            <div className="flex flex-1 flex-col">
              <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                  <SectionCards data={transactions} />
                  <div id="Movimentações" className="px-4 lg:px-6">
                    <ChartAreaInteractive data={transactions} />
                  </div>
                  <div id="transacoes-table">
                    <DataTable 
                      data={transactions} 
                      onAddTransaction={addTransaction}
                      onEditTransaction={editTransaction}
                      onDeleteTransaction={removeTransaction}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </SidebarInset>
    </SidebarProvider>
    </VisibilityProvider>
  )
}
