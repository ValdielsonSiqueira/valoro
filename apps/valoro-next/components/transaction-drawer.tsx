"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { z } from "zod"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Button,
  MultiSelect,
  type MultiSelectOption,
} from "@valoro/ui"
import { DatePicker } from "@valoro/ui"
import { CATEGORY_COLORS } from "@/lib/category-colors"
import {
  loadCustomCategories,
  addCustomCategory,
  saveCustomCategories,
  saveCustomCategoryColor,
  loadCustomCategoryColors,
  normalizeCategoryValue,
  type CustomCategory,
} from "@/lib/custom-categories"

const transactionSchema = z.object({
  nome: z.string().min(1, "O nome é obrigatório"),
  valor: z.string().min(1, "O valor é obrigatório").refine(
    (val) => {
      const numValue = parseFloat(val.replace(",", "."))
      return !isNaN(numValue) && numValue > 0
    },
    { message: "O valor deve ser um número maior que zero" }
  ),
  tipo: z.enum(["receita", "despesa"], {
    required_error: "O tipo é obrigatório",
    invalid_type_error: "O tipo é obrigatório",
  }).refine((val) => val !== "", { message: "O tipo é obrigatório" }),
  categoria: z.string().min(1, "A categoria é obrigatória"),
  data: z.date({
    required_error: "A data é obrigatória",
    invalid_type_error: "A data é obrigatória",
  }),
})

type TransactionFormData = z.infer<typeof transactionSchema>

interface TransactionDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: "Nova Transação" | "Editar Transação"
  onConcluir?: (data: {
    nome: string
    valor: string
    tipo: string
    categoria: string
    data: Date | undefined
  }) => void
  initialData?: {
    nome?: string
    valor?: string
    tipo?: string
    categoria?: string
    data?: Date | undefined
  }
}

export function TransactionDrawer({
  open,
  onOpenChange,
  title,
  onConcluir,
  initialData,
}: TransactionDrawerProps) {
  const isMobile = useIsMobile()
  
  const normalizeType = (type: string | undefined): string => {
    if (!type) return ""
    return type.toLowerCase()
  }
  
  const [nome, setNome] = useState<string>("")
  const [valor, setValor] = useState<string>("")
  const [tipo, setTipo] = useState<string>("")
  const [categoria, setCategoria] = useState<string>("")
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<string[]>([])
  const [data, setData] = useState<Date | undefined>(undefined)
  const [errors, setErrors] = useState<Partial<Record<keyof TransactionFormData, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof TransactionFormData, boolean>>>({})
  
  const [mounted, setMounted] = useState(false)
  const [customCategoriesLoaded, setCustomCategoriesLoaded] = useState(0)

  const defaultCategories: MultiSelectOption[] = useMemo(() => [
    { value: "salario", label: "Salário" },
    { value: "assinaturas", label: "Assinaturas" },
    { value: "cartao-credito", label: "Cartão de Crédito" },
    { value: "comida", label: "Comida" },
    { value: "mercado", label: "Mercado" },
    { value: "financiamento", label: "Financiamento" },
    { value: "internet", label: "Internet" },
    { value: "casa", label: "Casa" },
    { value: "pensao", label: "Pensão" },
    { value: "reserva", label: "Reserva" },
    { value: "investimentos", label: "Investimentos" },
    { value: "entretenimento", label: "Entretenimento" },
    { value: "educacao", label: "Educação" },
    { value: "transferencia", label: "Transferência" },
    { value: "deposito", label: "Depósito" },
  ], [])

  const customCategories = useMemo(() => {
    return loadCustomCategories().map((cat) => ({
      value: cat.value,
      label: cat.label,
      color: cat.color,
    }))
  }, [customCategoriesLoaded]) // eslint-disable-line react-hooks/exhaustive-deps

  const categoriaOptions: MultiSelectOption[] = useMemo(() => {
    return [...defaultCategories, ...customCategories]
  }, [defaultCategories, customCategories])

  const allCategoryColors = useMemo(() => {
    const customColors = loadCustomCategoryColors()
    return { ...CATEGORY_COLORS, ...customColors }
  }, [])

  const getCategoryColorForLabel = useCallback((label: string): string | undefined => {
    if (allCategoryColors[label]) {
      return allCategoryColors[label]
    }
    
    const customCat = loadCustomCategories().find(
      cat => cat.label.toLowerCase() === label.toLowerCase()
    )
    if (customCat?.color) {
      return customCat.color
    }
    
    const DEFAULT_COLORS = [
      "bg-green-500",
      "bg-blue-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-red-500",
      "bg-orange-500",
      "bg-yellow-500",
      "bg-teal-500",
      "bg-cyan-500",
      "bg-indigo-500",
      "bg-violet-500",
      "bg-emerald-500",
      "bg-lime-500",
      "bg-amber-500",
      "bg-red-600",
      "bg-blue-600",
      "bg-purple-600",
      "bg-pink-600",
    ]
    
    const hash = label.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    const selectedColor = DEFAULT_COLORS[hash % DEFAULT_COLORS.length]
    
    return selectedColor
  }, [allCategoryColors])

  const getCategoriaValueForMultiSelect = useCallback((categoriaString: string): string[] => {
    if (!categoriaString) return []
    
    const opcao = categoriaOptions.find(
      opt => opt.label.toLowerCase() === categoriaString.toLowerCase()
    )
    
    if (opcao) return [opcao.value]
    
    
    const normalizedValue = normalizeCategoryValue(categoriaString)
    
    const existsInCustom = customCategories.some(
      cat => cat.label.toLowerCase() === categoriaString.toLowerCase()
    )
    
    if (!existsInCustom && categoriaString.trim()) {
      const newCustomCategory: CustomCategory = {
        value: normalizedValue,
        label: categoriaString.trim(),
      }
      addCustomCategory(newCustomCategory)
      
    }
    
    return [normalizedValue]
  }, [categoriaOptions, customCategories])
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  useEffect(() => {
    if (!mounted) return
    
    if (initialData) {
      setNome(initialData.nome || "")
      setValor(initialData.valor || "")
      setTipo(normalizeType(initialData.tipo))
      const categoriaInicial = initialData.categoria || ""
      setCategoria(categoriaInicial)
      setCategoriasSelecionadas(getCategoriaValueForMultiSelect(categoriaInicial))
      setData(initialData.data)
      setErrors({})
      setTouched({})
    } else if (open && title === "Nova Transação") {
      setNome("")
      setValor("")
      setTipo("")
      setCategoria("")
      setCategoriasSelecionadas([])
      setData(undefined)
      setErrors({})
      setTouched({})
    }
  }, [initialData, mounted, open, title, getCategoriaValueForMultiSelect])

  const validateForm = (): boolean => {
    const fieldErrors: Partial<Record<keyof TransactionFormData, string>> = {}
    
    if (!nome || nome.trim() === "") {
      fieldErrors.nome = "O nome é obrigatório"
    }
    
    if (!valor || valor.trim() === "") {
      fieldErrors.valor = "O valor é obrigatório"
    } else {
      const numValue = parseFloat(valor.replace(",", "."))
      if (isNaN(numValue) || numValue <= 0) {
        fieldErrors.valor = "O valor deve ser um número maior que zero"
      }
    }
    
    if (!tipo || tipo.trim() === "") {
      fieldErrors.tipo = "O tipo é obrigatório"
    } else if (tipo !== "receita" && tipo !== "despesa") {
      fieldErrors.tipo = "O tipo é obrigatório"
    }
    
    if (!categoria || categoria.trim() === "") {
      fieldErrors.categoria = "A categoria é obrigatória"
    }
    
    if (categoriasSelecionadas.length === 0) {
      fieldErrors.categoria = "A categoria é obrigatória"
    }
    
    if (!data) {
      fieldErrors.data = "A data é obrigatória"
    }
    
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      setTouched({
        nome: true,
        valor: true,
        tipo: true,
        categoria: true,
        data: true,
      })
      return false
    }
    
    setErrors({})
    return true
  }

  const handleConcluirTransacao = () => {
    if (!validateForm()) {
      return
    }
    
    const categoriaFinal = categoria.trim()
    
    const isDefaultCategory = defaultCategories.some(
      cat => cat.label.toLowerCase() === categoriaFinal.toLowerCase()
    )
    
    if (!isDefaultCategory && categoriaFinal) {
      const normalizedValue = normalizeCategoryValue(categoriaFinal)
      
      const existsInCustom = loadCustomCategories().some(
        cat => cat.label.toLowerCase() === categoriaFinal.toLowerCase()
      )
      
      if (!existsInCustom) {
        const categoryColor = getCategoryColorForLabel(categoriaFinal)
        
        const newCustomCategory: CustomCategory = {
          value: normalizedValue,
          label: categoriaFinal,
          color: categoryColor,
        }
        addCustomCategory(newCustomCategory)
        
        if (categoryColor) {
          saveCustomCategoryColor(categoriaFinal, categoryColor)
        }
        
        setCustomCategoriesLoaded(prev => prev + 1)
      } else {
        const existingCustom = loadCustomCategories().find(
          cat => cat.label.toLowerCase() === categoriaFinal.toLowerCase()
        )
        
        const categoryColor = getCategoryColorForLabel(categoriaFinal)
        
        if (categoryColor && existingCustom && existingCustom.color !== categoryColor) {
          saveCustomCategoryColor(categoriaFinal, categoryColor)
          
          const updatedCategories = loadCustomCategories().map(cat =>
            cat.label.toLowerCase() === categoriaFinal.toLowerCase()
              ? { ...cat, color: categoryColor }
              : cat
          )
          saveCustomCategories(updatedCategories)
          setCustomCategoriesLoaded(prev => prev + 1)
        }
      }
    }
    
    if (onConcluir) {
      onConcluir({
        nome: nome.trim(),
        valor: valor.trim(),
        tipo,
        categoria: categoriaFinal,
        data,
      })
    }
    handleCancelar()
  }

  const handleCancelar = () => {
    onOpenChange(false)
    if (title === "Nova Transação") {
      setNome("")
      setValor("")
      setTipo("")
      setCategoria("")
      setCategoriasSelecionadas([])
      setData(undefined)
    }
  }

  const handleCategoriasChange = (selected: string[]) => {
    setCategoriasSelecionadas(selected)
    const primeiraCategoria = selected.length > 0 ? selected[0] : ""
    
    if (!primeiraCategoria) {
      setCategoria("")
      return
    }
    
    let opcaoSelecionada = categoriaOptions.find(opt => opt.value === primeiraCategoria)
    
    if (!opcaoSelecionada) {
      const customCat = loadCustomCategories().find(cat => cat.value === primeiraCategoria)
      
      if (customCat) {
        opcaoSelecionada = {
          value: customCat.value,
          label: customCat.label,
          color: customCat.color,
        }
      } else {
        const defaultCat = defaultCategories.find(cat => cat.value === primeiraCategoria)
        
        if (defaultCat) {
          opcaoSelecionada = defaultCat
        } else {
          const categoryLabel = primeiraCategoria
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
          
          opcaoSelecionada = {
            value: primeiraCategoria,
            label: categoryLabel,
          }
        }
      }
    }
    
    const categoriaLabel = opcaoSelecionada ? opcaoSelecionada.label : primeiraCategoria
    
    setCategoria(categoriaLabel)
    setTouched((prev) => ({ ...prev, categoria: true }))
    if (touched.categoria && errors.categoria) {
      setErrors((prev) => ({ ...prev, categoria: undefined }))
    }
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction={isMobile ? "bottom" : "right"}>
      <DrawerContent>
        <DrawerHeader className="gap-1">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>
            {title === "Nova Transação" ? "Preencha os dados da nova transação" : "Detalhes da transação"}
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 overflow-y-auto px-4 py-4">
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-3">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Digite o nome"
                  value={nome}
                  onChange={(e) => {
                    setNome(e.target.value)
                    if (touched.nome && errors.nome) {
                      setErrors((prev) => ({ ...prev, nome: undefined }))
                    }
                  }}
                  onBlur={() => setTouched((prev) => ({ ...prev, nome: true }))}
                  aria-invalid={(touched.nome || errors.nome) && !!errors.nome}
                  aria-describedby={touched.nome && errors.nome ? "nome-error" : undefined}
                />
                {(touched.nome || errors.nome) && errors.nome && (
                  <span id="nome-error" className="text-sm text-destructive">
                    {errors.nome}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <Label htmlFor="valor">Valor</Label>
                <Input
                  id="valor"
                  type="number"
                  placeholder="0,00"
                  value={valor}
                  onChange={(e) => {
                    setValor(e.target.value)
                    if (touched.valor && errors.valor) {
                      setErrors((prev) => ({ ...prev, valor: undefined }))
                    }
                  }}
                  onBlur={() => setTouched((prev) => ({ ...prev, valor: true }))}
                  aria-invalid={(touched.valor || errors.valor) && !!errors.valor}
                  aria-describedby={touched.valor && errors.valor ? "valor-error" : undefined}
                />
                {(touched.valor || errors.valor) && errors.valor && (
                  <span id="valor-error" className="text-sm text-destructive">
                    {errors.valor}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-3">
                <Label htmlFor="tipo">Tipo</Label>
                <Select 
                  value={tipo} 
                  onValueChange={(value) => {
                    setTipo(value)
                    setTouched((prev) => ({ ...prev, tipo: true }))
                    if (touched.tipo && errors.tipo) {
                      setErrors((prev) => ({ ...prev, tipo: undefined }))
                    }
                  }}
                >
                  <SelectTrigger 
                    id="tipo" 
                    className={`w-full ${(touched.tipo || errors.tipo) && errors.tipo ? '!border-destructive' : ''}`}
                    aria-invalid={(touched.tipo || errors.tipo) && !!errors.tipo}
                    aria-describedby={touched.tipo && errors.tipo ? "tipo-error" : undefined}
                  >
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="despesa">Despesa</SelectItem>
                    <SelectItem value="receita">Receita</SelectItem>
                  </SelectContent>
                </Select>
                {(touched.tipo || errors.tipo) && errors.tipo && (
                  <span id="tipo-error" className="text-sm text-destructive">
                    {errors.tipo}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <Label htmlFor="categoria">Categoria</Label>
                <MultiSelect
                  options={categoriaOptions}
                  selected={categoriasSelecionadas}
                  onSelectedChange={handleCategoriasChange}
                  placeholder="Selecione uma opção ou crie uma..."
                  searchPlaceholder="Buscar..."
                  className={(touched.categoria || errors.categoria) && errors.categoria ? '!border-destructive' : ''}
                  singleSelect={true}
                  colorMap={allCategoryColors}
                  defaultOptions={customCategories}
                />                {(touched.categoria || errors.categoria) && errors.categoria && (
                  <span id="categoria-error" className="text-sm text-destructive">
                    {errors.categoria}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <DatePicker
                value={data}
                onValueChange={(value) => {
                  setData(value)
                  if (touched.data && errors.data) {
                    setErrors((prev) => ({ ...prev, data: undefined }))
                  }
                  setTouched((prev) => ({ ...prev, data: true }))
                }}
                label="Data"
                placeholder="Selecione a data"
                buttonClassName={`w-full justify-between font-normal ${(touched.data || errors.data) && errors.data ? '!border-destructive' : ''}`}
              />
              {(touched.data || errors.data) && errors.data && (
                <span className="text-sm text-destructive">
                  {errors.data}
                </span>
              )}
            </div>
          </form>
        </div>
        <DrawerFooter>
          <Button onClick={handleConcluirTransacao}>
            {title === "Nova Transação" ? "Concluir transação" : "Salvar"}
          </Button>
          <DrawerClose asChild>
            <Button variant="outline" onClick={handleCancelar}>
              {title === "Nova Transação" ? "Cancelar" : "Fechar"}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

