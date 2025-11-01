import * as React from "react"
import { IconCalendar } from "@tabler/icons-react"

import { Button } from "./button"
import { Calendar } from "./calendar"
import { Label } from "./label"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { cn } from "../../lib/utils"

interface DatePickerProps {
  value?: Date | undefined
  onValueChange?: (date: Date | undefined) => void
  label?: string
  placeholder?: string
  id?: string
  className?: string
  buttonClassName?: string
}

export function DatePicker({
  value,
  onValueChange,
  label,
  placeholder = "Selecione a data",
  id = "date",
  className,
  buttonClassName,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
  }

  const handleSelect = (date: Date | undefined) => {
    onValueChange?.(date)
    setOpen(false)
  }

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <Label htmlFor={id} className="px-1">
          {label}
        </Label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id={id}
            data-empty={!value}
            className={cn(
              "data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal",
              buttonClassName
            )}
          >
            <IconCalendar className="mr-2 size-4" />
            {value ? formatDate(value) : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={handleSelect}
            className="p-3 rounded-md [--cell-size:2.75rem] [&_.rdp-table]:border-spacing-0 [&_.rdp-day]:p-1 overflow-hidden"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
