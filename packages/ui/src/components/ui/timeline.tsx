import * as React from "react"
import { format, parseISO, isValid } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Pencil, Trash2 } from "lucide-react"
import { cn } from "../../lib/utils"
import { Card, CardHeader, CardTitle, CardContent } from "./card"
import { Separator } from "./separator"
import { Button } from "./button"

export interface TimelineTransaction {
  id?: string | number
  category: string
  amount: string
  date: string | Date
}

export interface TimelineProps {
  transactions: TimelineTransaction[]
  title?: string
  onEdit?: (transaction: TimelineTransaction) => void
  onDelete?: (transaction: TimelineTransaction) => void
  className?: string
  isVisible?: boolean
  emptyMessage?: string
}

function formatTransactionDate(date: string | Date): string {
  let dateObj: Date

  if (typeof date === "string") {
    dateObj = parseISO(date)
    if (!isValid(dateObj)) {
      const parts = date.split("/")
      if (parts.length === 3) {
        const day = parseInt(parts[0], 10)
        const month = parseInt(parts[1], 10) - 1
        const year = parseInt(parts[2], 10)
        dateObj = new Date(year, month, day)
      } else {
        dateObj = new Date(date)
      }
    }
  } else {
    dateObj = date
  }

  if (!isValid(dateObj)) {
    return ""
  }

  return format(dateObj, "dd/MM", { locale: ptBR })
}

function getMonthName(date: string | Date): string {
  let dateObj: Date

  if (typeof date === "string") {
    dateObj = parseISO(date)
    if (!isValid(dateObj)) {
      const parts = date.split("/")
      if (parts.length === 3) {
        const day = parseInt(parts[0], 10)
        const month = parseInt(parts[1], 10) - 1
        const year = parseInt(parts[2], 10)
        dateObj = new Date(year, month, day)
      } else {
        dateObj = new Date(date)
      }
    }
  } else {
    dateObj = date
  }

  if (!isValid(dateObj)) {
    return ""
  }

  return format(dateObj, "MMMM", { locale: ptBR })
}

function getMonthYear(date: string | Date): string {
  let dateObj: Date

  if (typeof date === "string") {
    dateObj = parseISO(date)
    if (!isValid(dateObj)) {
      const parts = date.split("/")
      if (parts.length === 3) {
        const day = parseInt(parts[0], 10)
        const month = parseInt(parts[1], 10) - 1
        const year = parseInt(parts[2], 10)
        dateObj = new Date(year, month, day)
      } else {
        dateObj = new Date(date)
      }
    }
  } else {
    dateObj = date
  }

  if (!isValid(dateObj)) {
    return ""
  }

  return format(dateObj, "yyyy-MM", { locale: ptBR })
}

export function Timeline({
  transactions,
  title = "Extrato",
  onEdit,
  onDelete,
  className,
  isVisible = true,
  emptyMessage = "Nenhuma transação encontrada",
}: TimelineProps) {
  const groupedTransactions = React.useMemo(() => {
    const groups: Record<string, TimelineTransaction[]> = {}

    transactions.forEach((transaction) => {
      const monthYear = getMonthYear(transaction.date)
      if (!groups[monthYear]) {
        groups[monthYear] = []
      }
      groups[monthYear].push(transaction)
    })

    const sortedGroups = Object.entries(groups).sort(([a], [b]) => {
      return b.localeCompare(a)
    })

    sortedGroups.forEach(([, trans]) => {
      trans.sort((a, b) => {
        const dateA = typeof a.date === "string" ? parseISO(a.date) : a.date
        const dateB = typeof b.date === "string" ? parseISO(b.date) : b.date

        if (!isValid(dateA) || !isValid(dateB)) {
          return 0
        }

        return dateB.getTime() - dateA.getTime()
      })
    })

    return sortedGroups
  }, [transactions])

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        {groupedTransactions.length === 0 ? (
          <div className="px-6 py-8 text-center text-muted-foreground text-sm">
            {emptyMessage}
          </div>
        ) : (
          <div className="space-y-6">
            {groupedTransactions.map(([monthYear, trans]) => {
              const firstTransaction = trans[0]
              const monthName = getMonthName(firstTransaction.date)

              return (
                <div key={monthYear} className="space-y-0">
                  <div className="px-6">
                    <h3 className="text-primary dark:text-teal-400 font-semibold text-sm mb-3">
                      {monthName.charAt(0).toUpperCase() + monthName.slice(1)}
                    </h3>
                  </div>
                  <div className="space-y-0">
                    {trans.map((transaction, index) => {
                      const isLast = index === trans.length - 1
                      const formattedDate = formatTransactionDate(transaction.date)

                      return (
                        <React.Fragment key={transaction.id || index}>
                          <div className="group px-6 py-3 hover:bg-muted/50 transition-colors">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <span className={`text-muted-foreground text-sm ${!isVisible ? 'blur-sm select-none' : ''}`}>
                                  {transaction.category}
                                </span>
                                <span className={`text-muted-foreground text-sm ml-2 ${!isVisible ? 'blur-sm select-none' : ''}`}>
                                  {transaction.amount}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`text-muted-foreground text-sm ${!isVisible ? 'blur-sm select-none' : ''}`}>
                                  {formattedDate}
                                </span>
                                {(onEdit || onDelete) && (
                                  <div className="flex items-center gap-1 ml-2">
                                    {onEdit && (
                                      <Button
                                        variant="ghost"
                                        size="icon-sm"
                                        className="size-6 hover:bg-accent"
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          if (isVisible) {
                                            onEdit(transaction)
                                          }
                                        }}
                                        disabled={!isVisible}
                                      >
                                        <Pencil className="size-3" />
                                      </Button>
                                    )}
                                    {onDelete && (
                                      <Button
                                        variant="ghost"
                                        size="icon-sm"
                                        className="size-6 hover:bg-accent"
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          if (isVisible) {
                                            onDelete(transaction)
                                          }
                                        }}
                                        disabled={!isVisible}
                                      >
                                        <Trash2 className="size-3" />
                                      </Button>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          {!isLast && (
                            <div className="px-6">
                              <Separator />
                            </div>
                          )}
                        </React.Fragment>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

