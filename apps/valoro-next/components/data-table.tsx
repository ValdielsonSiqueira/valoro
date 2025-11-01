"use client"

import * as React from "react"
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import {
  IconArrowsUpDown,
  IconCalendar,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconDotsVertical,
  IconEye,
  IconGripVertical,
  IconLayoutColumns,
  IconMenu2,
  IconPlus,
  IconWallet,
} from "@tabler/icons-react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { z } from "zod"

import { useVisibility } from "@/contexts/visibility-context"
import { Badge } from "@valoro/ui"
import { Button } from "@valoro/ui"
import { Checkbox } from "@valoro/ui"
import { TransactionDrawer } from "./transaction-drawer"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@valoro/ui"
import { Label } from "@valoro/ui"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@valoro/ui"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@valoro/ui"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@valoro/ui"

export const schema = z.object({
  id: z.number(),
  transaction: z.string(), 
  value: z.number(), 
  type: z.enum(["Receita", "Despesa"]), 
  category: z.string(), 
  date: z.string(), 
  effectiveValue: z.number(), 
})

function DragHandle({ id }: { id: number }) {
  const { attributes, listeners } = useSortable({
    id,
  })

  return (
    <Button
      {...attributes}
      {...listeners}
      variant="ghost"
      size="icon"
      className="text-muted-foreground size-7 hover:bg-transparent"
    >
      <IconGripVertical className="text-muted-foreground size-3" />
      <span className="sr-only">Drag to reorder</span>
    </Button>
  )
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

const getTypeBadgeVariant = (type: "Receita" | "Despesa") => {
  return type === "Receita" ? "default" : "destructive"
}

const getCategoryBadgeVariant = (category: string) => {
  const categoryColors: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
    "Salário": "default",
    "Financiamento": "destructive",
    "educação": "outline",
    "Entretenimento": "outline",
    "Assinaturas": "destructive",
    "Casa": "destructive",
    "Investimentos": "secondary",
  }
  return categoryColors[category] || "outline"
}

function useColumns(): ColumnDef<z.infer<typeof schema>>[] {
  const { isVisible } = useVisibility()

  return [
  {
    id: "drag",
    header: () => null,
    cell: ({ row }) => <DragHandle id={row.original.id} />,
  },
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "transaction",
    header: () => (
      <div className="flex items-center gap-2">
        <IconWallet className="size-4" />
        <span>Transações</span>
      </div>
    ),
    cell: ({ row }) => {
      return <TableCellViewer item={row.original} />
    },
    enableHiding: false,
  },
  {
    accessorKey: "value",
    header: () => (
      <div className="flex items-center gap-2">
        <IconEye className="size-4" />
        <span>Valor</span>
      </div>
    ),
    cell: ({ row }) => (
      <div className={`text-left ${!isVisible ? 'blur-sm' : ''}`}>
        {formatCurrency(row.original.value)}
      </div>
    ),
  },
  {
    accessorKey: "type",
    header: () => (
      <div className="flex items-center gap-2">
        <IconArrowsUpDown className="size-4" />
        <span>Tipo</span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="w-32">
        <Badge 
          variant={getTypeBadgeVariant(row.original.type)} 
          className="px-1.5"
        >
          {row.original.type}
        </Badge>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: () => (
      <div className="flex items-center gap-2">
        <IconMenu2 className="size-4" />
        <span>Categoria</span>
      </div>
    ),
    cell: ({ row }) => (
      <Badge 
        variant={getCategoryBadgeVariant(row.original.category)} 
        className="px-1.5"
      >
        {row.original.category}
      </Badge>
    ),
  },
  {
    accessorKey: "date",
    header: () => (
      <div className="flex items-center gap-2">
        <IconCalendar className="size-4" />
        <span>Data</span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-left">
        {row.original.date}
      </div>
    ),
  },
  {
    accessorKey: "effectiveValue",
    header: () => (
      <div className="flex items-center gap-2">
        <IconEye className="size-4" />
        <span>Valor Efetivo</span>
      </div>
    ),
    cell: ({ row }) => (
      <div className={`text-left ${!isVisible ? 'blur-sm' : ''}`}>
        {formatCurrency(row.original.effectiveValue)}
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <TableCellActions item={row.original} />
    ),
  },
  ]
}

function DraggableRow({ row }: { row: Row<z.infer<typeof schema>> }) {
  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.original.id,
  })

  return (
    <TableRow
      data-state={row.getIsSelected() && "selected"}
      data-dragging={isDragging}
      ref={setNodeRef}
      className="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
      }}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  )
}

export function DataTable({
  data: initialData,
}: {
  data: z.infer<typeof schema>[]
}) {
  const columns = useColumns()
  const [data, setData] = React.useState(() => initialData)
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const sortableId = React.useId()
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  )

  const dataIds = React.useMemo<UniqueIdentifier[]>(
    () => data?.map(({ id }) => id) || [],
    [data]
  )

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (active && over && active.id !== over.id) {
      setData((data) => {
        const oldIndex = dataIds.indexOf(active.id)
        const newIndex = dataIds.indexOf(over.id)
        return arrayMove(data, oldIndex, newIndex)
      })
    }
  }

  return (
    <Tabs
      defaultValue="outline"
      className="w-full flex-col justify-start gap-6"
    >
      <div className="flex items-center justify-between px-4 lg:px-6">
        <Label htmlFor="view-selector" className="sr-only">
          View
        </Label>
        <span className="text-lg font-bold">Listagem de Transações</span>
        <TabsList className="**:data-[slot=badge]:bg-muted-foreground/30 hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex">
          <TabsTrigger value="outline">Outline</TabsTrigger>
          <TabsTrigger value="past-performance">
            Past Performance <Badge variant="secondary">3</Badge>
          </TabsTrigger>
          <TabsTrigger value="key-personnel">
            Key Personnel <Badge variant="secondary">2</Badge>
          </TabsTrigger>
          <TabsTrigger value="focus-documents">Focus Documents</TabsTrigger>
        </TabsList>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <IconLayoutColumns />
                <span>Colunas</span>
                <IconChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {table
                .getAllColumns()
                .filter((column) => {
                  const excludedColumns = ["drag", "select", "transaction", "actions"]
                  return column.getCanHide() && !excludedColumns.includes(column.id)
                })
                .map((column) => {
                  const columnLabels: Record<string, string> = {
                    value: "Valor",
                    type: "Tipo",
                    category: "Categoria",
                    date: "Data",
                    effectiveValue: "Valor Efetivo",
                  }
                  
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {columnLabels[column.id] || column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="sm">
            <IconPlus />
            <span className="hidden lg:inline">Add Section</span>
          </Button>
        </div>
      </div>
      <TabsContent
        value="outline"
        className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
      >
        <div className="overflow-hidden rounded-lg border">
          <DndContext
            collisionDetection={closestCenter}
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={handleDragEnd}
            sensors={sensors}
            id={sortableId}
          >
            <Table>
              <TableHeader className="bg-muted sticky top-0 z-10">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id} colSpan={header.colSpan}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody className="**:data-[slot=table-cell]:first:w-8">
                {table.getRowModel().rows?.length ? (
                  <SortableContext
                    items={dataIds}
                    strategy={verticalListSortingStrategy}
                  >
                    {table.getRowModel().rows.map((row) => (
                      <DraggableRow key={row.id} row={row} />
                    ))}
                  </SortableContext>
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </DndContext>
        </div>
        <div className="flex items-center justify-between px-4">
          <div className="text-muted-foreground hidden flex-1 text-sm lg:flex">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="flex w-full items-center gap-8 lg:w-fit">
            <div className="hidden items-center gap-2 lg:flex">
              <Label htmlFor="rows-per-page" className="text-sm font-medium">
                Rows per page
              </Label>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => {
                  table.setPageSize(Number(value))
                }}
              >
                <SelectTrigger size="sm" className="w-20" id="rows-per-page">
                  <SelectValue
                    placeholder={table.getState().pagination.pageSize}
                  />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex w-fit items-center justify-center text-sm font-medium">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </div>
            <div className="ml-auto flex items-center gap-2 lg:ml-0">
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Go to first page</span>
                <IconChevronsLeft />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Go to previous page</span>
                <IconChevronLeft />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Go to next page</span>
                <IconChevronRight />
              </Button>
              <Button
                variant="outline"
                className="hidden size-8 lg:flex"
                size="icon"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Go to last page</span>
                <IconChevronsRight />
              </Button>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent
        value="past-performance"
        className="flex flex-col px-4 lg:px-6"
      >
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
      </TabsContent>
      <TabsContent value="key-personnel" className="flex flex-col px-4 lg:px-6">
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
      </TabsContent>
      <TabsContent
        value="focus-documents"
        className="flex flex-col px-4 lg:px-6"
      >
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
      </TabsContent>
    </Tabs>
  )
}


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

function convertType(type: "Receita" | "Despesa"): string {
  return type.toLowerCase()
}

function handleConcluir(data: {
  nome: string
  valor: string
  tipo: string
  categoria: string
  data: Date | undefined
}) {
  // Aqui você pode adicionar a lógica para salvar a transação editada
  console.log("Dados da transação editada:", data)
}

function TableCellViewer({ item }: { item: z.infer<typeof schema> }) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  return (
    <>
      <Button 
        variant="link" 
        className="text-foreground w-fit px-0 text-left"
        onClick={() => setIsDrawerOpen(true)}
      >
        {item.transaction}
      </Button>
      <TransactionDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        title="Editar Transação"
        onConcluir={handleConcluir}
        initialData={{
          nome: item.transaction,
          valor: item.value.toString(),
          tipo: convertType(item.type),
          categoria: item.category,
          data: parseDate(item.date),
        }}
      />
    </>
  )
}

function TableCellActions({ item }: { item: z.infer<typeof schema> }) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
            size="icon"
          >
            <IconDotsVertical />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          <DropdownMenuItem onClick={() => setIsDrawerOpen(true)}>
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Deletar</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <TransactionDrawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        title="Editar Transação"
        onConcluir={handleConcluir}
        initialData={{
          nome: item.transaction,
          valor: item.value.toString(),
          tipo: convertType(item.type),
          categoria: item.category,
          data: parseDate(item.date),
        }}
      />
    </>
  )
}
