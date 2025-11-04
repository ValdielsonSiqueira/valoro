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
import { TransactionDrawer } from "@/components/transaction-drawer"
import { DeleteTransactionDialog } from "@/components/delete-transaction-dialog"
import { VisibilityProvider, useVisibility } from "@/contexts/visibility-context"
import { useTransactions } from "@/hooks/use-transactions"
import { Transaction } from "@/lib/transactions-service"
import { Skeleton, Timeline } from "@valoro/ui"
import {
  SidebarInset,
  SidebarProvider,
} from "@valoro/ui"
import { useState } from "react"

function parseDate(dateString: string): Date | undefined {
  const parts = dateString.split("/")
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10) - 1
    const year = parseInt(parts[2], 10)
    return new Date(year, month, day)
  }
  return undefined
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

function convertTransactionToTimeline(transaction: Transaction) {
  const amountValue = transaction.type === "Despesa" 
    ? -Math.abs(transaction.value) 
    : Math.abs(transaction.value)
  const formattedAmount = formatCurrency(amountValue)

  return {
    id: transaction.id,
    category: transaction.category,
    amount: formattedAmount,
    date: transaction.date,
  }
}

function DashboardContent() {
  const { transactions, isLoading, addTransaction, editTransaction, removeTransaction } = useTransactions()
  const { isVisible } = useVisibility()
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false)
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [transactionToDelete, setTransactionToDelete] = useState<{ id?: string | number; category: string; amount: string; date: string | Date } | null>(null)

  const timelineTransactions = transactions.map(convertTransactionToTimeline)

  const handleTimelineEdit = (timelineTransaction: { id?: string | number; category: string; amount: string; date: string | Date }) => {
    const transaction = transactions.find(t => t.id === timelineTransaction.id)
    if (transaction) {
      setEditingTransaction(transaction)
      setIsEditDrawerOpen(true)
    }
  }

  const handleTimelineDelete = (timelineTransaction: { id?: string | number; category: string; amount: string; date: string | Date }) => {
    setTransactionToDelete(timelineTransaction)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (transactionToDelete?.id) {
      removeTransaction(Number(transactionToDelete.id))
    }
    setTransactionToDelete(null)
  }

  const handleEditConcluir = (data: {
    nome: string
    valor: string
    tipo: string
    categoria: string
    data: Date | undefined
  }) => {
    if (editingTransaction) {
      editTransaction(editingTransaction.id, data)
      setIsEditDrawerOpen(false)
      setEditingTransaction(null)
    }
  }

  const convertType = (type: "Receita" | "Despesa"): string => {
    return type.toLowerCase()
  }

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
                  <div id="extrato" className="px-4 lg:px-6">
                    <Timeline
                      transactions={timelineTransactions}
                      title="Extrato"
                      emptyMessage="Nenhuma transação encontrada"
                      onEdit={handleTimelineEdit}
                      onDelete={handleTimelineDelete}
                      isVisible={isVisible}
                    />
                  </div>
                </div>
              </div>
            </div>
            {editingTransaction && (
              <TransactionDrawer
                open={isEditDrawerOpen}
                onOpenChange={setIsEditDrawerOpen}
                title="Editar Transação"
                onConcluir={handleEditConcluir}
                initialData={{
                  nome: editingTransaction.transaction,
                  valor: editingTransaction.value.toString(),
                  tipo: convertType(editingTransaction.type),
                  categoria: editingTransaction.category,
                  data: parseDate(editingTransaction.date),
                }}
              />
            )}
            <DeleteTransactionDialog
              open={deleteDialogOpen}
              onOpenChange={setDeleteDialogOpen}
              transactionName={transactionToDelete ? `${transactionToDelete.category} - ${transactionToDelete.amount}` : undefined}
              onConfirm={confirmDelete}
            />
          </>
        )}
      </SidebarInset>
    </SidebarProvider>
  )
}

export default function Page() {
  return (
    <VisibilityProvider>
      <DashboardContent />
    </VisibilityProvider>
  )
}
