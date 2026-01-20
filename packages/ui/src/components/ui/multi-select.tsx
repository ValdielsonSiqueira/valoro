import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"

import { cn } from "../../lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover"
import { Badge } from "./badge"
import { Button } from "./button"

export interface MultiSelectOption {
  value: string
  label: string
  color?: string
}

export type GetColorFunction = (label: string, existingColors?: Set<string>) => string

export interface MultiSelectProps {
  options?: MultiSelectOption[]
  selected?: string[]
  onSelectedChange?: (selected: string[]) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyText?: string
  createText?: (searchValue: string) => string
  className?: string
  disabled?: boolean
  defaultOptions?: MultiSelectOption[]
  singleSelect?: boolean
  getColor?: GetColorFunction
  availableColors?: string[]
  colorMap?: Record<string, string>
}

const DEFAULT_COLORS = [
  "bg-green-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-red-500",
  "bg-teal-500",
  "bg-indigo-500",
  "bg-violet-500",
  "bg-emerald-500",
  "bg-red-600",
  "bg-blue-600",
  "bg-purple-600",
  "bg-pink-600",
  "bg-indigo-600",
  "bg-violet-600",
  "bg-emerald-600",
  "bg-green-600",
  "bg-teal-600",
]

export function MultiSelect({
  options = [],
  selected = [],
  onSelectedChange,
  placeholder = "Selecione uma opção ou crie uma...",
  searchPlaceholder = "Buscar...",
  emptyText = "Nenhum resultado encontrado.",
  createText,
  className,
  disabled = false,
  defaultOptions,
  singleSelect = false,
  getColor,
  availableColors,
  colorMap,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)
  const [internalSelected, setInternalSelected] = React.useState<string[]>(selected)
  const [searchValue, setSearchValue] = React.useState("")
  const [createdOptions, setCreatedOptions] = React.useState<MultiSelectOption[]>([])
  const [usedColors, setUsedColors] = React.useState<Set<string>>(new Set())
  const [optionColors, setOptionColors] = React.useState<Map<string, string>>(new Map())

  const getStableColor = React.useCallback((option: MultiSelectOption): string => {
    if (option.color) {
      return option.color
    }

    if (colorMap && colorMap[option.label]) {
      const color = colorMap[option.label]
      if (!optionColors.has(option.label)) {
        setOptionColors(prev => new Map(prev).set(option.label, color))
      }
      return color
    }

    if (optionColors.has(option.label)) {
      return optionColors.get(option.label)!
    }

    if (getColor) {
      const color = getColor(option.label)
      setOptionColors(prev => new Map(prev).set(option.label, color))
      return color
    }

    const colorsToUse = availableColors || DEFAULT_COLORS
    const hash = option.label.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    const color = colorsToUse[hash % colorsToUse.length]

    setOptionColors(prev => new Map(prev).set(option.label, color))

    return color
  }, [optionColors, availableColors, getColor, colorMap])

  const allOptions = React.useMemo(() => {
    const merged = [...(defaultOptions || []), ...options, ...createdOptions]
    const unique = merged.reduce((acc, current) => {
      if (!acc.find((item) => item.value === current.value)) {
        acc.push(current)
      }
      return acc
    }, [] as MultiSelectOption[])
    return unique
  }, [options, defaultOptions, createdOptions])

  const filteredOptions = React.useMemo(() => {
    if (!searchValue.trim()) return allOptions
    const searchLower = searchValue.toLowerCase()
    return allOptions.filter(
      (option) =>
        option.label.toLowerCase().includes(searchLower) ||
        option.value.toLowerCase().includes(searchLower)
    )
  }, [allOptions, searchValue])

  React.useEffect(() => {
    setInternalSelected(selected)
  }, [selected])

  const toggleOption = (value: string) => {
    let newSelected: string[]

    if (singleSelect) {
      if (internalSelected.includes(value)) {
        newSelected = []
      } else {
        newSelected = [value]
      }
    } else {
      newSelected = internalSelected.includes(value)
        ? internalSelected.filter((v) => v !== value)
        : [...internalSelected, value]
    }

    setInternalSelected(newSelected)
    onSelectedChange?.(newSelected)
    setSearchValue("")
    setOpen(!singleSelect)
  }

  const removeOption = React.useCallback((value: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const newSelected = internalSelected.filter((v) => v !== value)
    setInternalSelected(newSelected)
    onSelectedChange?.(newSelected)
    setSearchValue("")
    setOpen(false)
  }, [internalSelected, onSelectedChange])

  const createNewOption = () => {
    if (!searchValue.trim()) return

    const newValue = searchValue
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")

    if (allOptions.find((opt) => opt.value === newValue)) {
      toggleOption(newValue)
      return
    }

    const colorsToUse = availableColors || DEFAULT_COLORS
    const available = colorsToUse.filter(c => !usedColors.has(c))
    const randomColor = available.length > 0
      ? available[Math.floor(Math.random() * available.length)]
      : colorsToUse[Math.floor(Math.random() * colorsToUse.length)]

    setUsedColors((prev) => {
      const newSet = new Set(prev)
      newSet.add(randomColor)
      return newSet
    })

    const newOption: MultiSelectOption = {
      value: newValue,
      label: searchValue.trim(),
      color: randomColor,
    }

    setCreatedOptions((prev) => [...prev, newOption])
    toggleOption(newValue)
  }

  const getOptionByValue = (value: string): MultiSelectOption | undefined => {
    return allOptions.find((opt) => opt.value === value)
  }

  const canCreateNew = searchValue.trim() && filteredOptions.length === 0

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between min-h-9 h-auto",
            internalSelected.length === 0 && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          <div className="flex flex-wrap gap-1 flex-1 mr-2">
            {internalSelected.length > 0 ? (
              internalSelected.map((value) => {
                const option = getOptionByValue(value)
                if (!option) return null

                const color = getStableColor(option)

                return (
                  <Badge
                    key={value}
                    variant="secondary"
                    className={cn(
                      "flex items-center gap-1 pr-1",
                      color,
                      "text-white border-0"
                    )}
                  >
                    {option.label}
                    <button
                      type="button"
                      aria-label={`Remover ${option.label}`}
                      className="h-3 w-3 cursor-pointer hover:bg-white/20 rounded-full p-0.5 transition-colors flex items-center justify-center"
                      onClick={(e) => removeOption(value, e)}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )
              })
            ) : (
              <span>{placeholder}</span>
            )}
          </div>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start" onWheel={(e) => e.stopPropagation()}>
        <Command shouldFilter={false} className="overflow-visible">
          <CommandInput
            placeholder={searchPlaceholder}
            value={searchValue}
            onValueChange={setSearchValue}
            onKeyDown={(e) => {
              if (e.key === "Enter" && canCreateNew) {
                e.preventDefault()
                createNewOption()
              }
            }}
          />
          <CommandList className="max-h-[200px] overflow-y-auto overflow-x-hidden">
            {canCreateNew ? (
              <>
                <CommandGroup>
                  <CommandItem
                    onSelect={createNewOption}
                    className="cursor-pointer text-primary"
                  >
                    {createText ? createText(searchValue) : `Criar "${searchValue}"`}
                  </CommandItem>
                </CommandGroup>
              </>
            ) : (
              <>
                <CommandEmpty>{emptyText}</CommandEmpty>
                <CommandGroup>
                  {filteredOptions.map((option) => {
                    const isSelected = internalSelected.includes(option.value)
                    const color = getStableColor(option)

                    return (
                      <CommandItem
                        key={option.value}
                        onSelect={() => toggleOption(option.value)}
                        className="cursor-pointer p-2"
                      >
                        <div className="flex items-center w-full gap-2">
                          <Check
                            className={cn(
                              "h-4 w-4 shrink-0",
                              isSelected ? "opacity-100" : "opacity-0"
                            )}
                          />
                          <Badge
                            variant="secondary"
                            className={cn(
                              "flex items-center gap-1 pr-1",
                              color,
                              "text-white border-0"
                            )}
                          >
                            {option.label}
                          </Badge>
                        </div>
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

