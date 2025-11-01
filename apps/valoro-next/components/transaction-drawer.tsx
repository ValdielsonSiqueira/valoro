"use client"

import { useState, useEffect } from "react"
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
} from "@valoro/ui"
import { DatePicker } from "@valoro/ui"

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
  
  const [nome, setNome] = useState<string>(initialData?.nome || "")
  const [valor, setValor] = useState<string>(initialData?.valor || "")
  const [tipo, setTipo] = useState<string>(normalizeType(initialData?.tipo))
  const [categoria, setCategoria] = useState<string>(initialData?.categoria || "")
  const [data, setData] = useState<Date | undefined>(initialData?.data)
  const [errors, setErrors] = useState<Partial<Record<keyof TransactionFormData, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof TransactionFormData, boolean>>>({})

  useEffect(() => {
    if (initialData) {
      setNome(initialData.nome || "")
      setValor(initialData.valor || "")
      setTipo(normalizeType(initialData.tipo))
      setCategoria(initialData.categoria || "")
      setData(initialData.data)
      setErrors({})
      setTouched({})
    }
  }, [initialData])

  useEffect(() => {
    if (open && title === "Nova Transação" && !initialData) {
      setNome("")
      setValor("")
      setTipo("")
      setCategoria("")
      setData(undefined)
      setErrors({})
      setTouched({})
    }
  }, [open, title, initialData])

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
    
    if (onConcluir) {
      onConcluir({
        nome: nome.trim(),
        valor: valor.trim(),
        tipo,
        categoria: categoria.trim(),
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
      setData(undefined)
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
                <Select 
                  value={categoria} 
                  onValueChange={(value) => {
                    setCategoria(value)
                    setTouched((prev) => ({ ...prev, categoria: true }))
                    if (touched.categoria && errors.categoria) {
                      setErrors((prev) => ({ ...prev, categoria: undefined }))
                    }
                  }}
                >
                  <SelectTrigger 
                    id="categoria" 
                    className={`w-full ${(touched.categoria || errors.categoria) && errors.categoria ? '!border-destructive' : ''}`}
                    aria-invalid={(touched.categoria || errors.categoria) && !!errors.categoria}
                    aria-describedby={touched.categoria && errors.categoria ? "categoria-error" : undefined}
                  >
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Salário">Salário</SelectItem>
                    <SelectItem value="Financiamento">Financiamento</SelectItem>
                    <SelectItem value="educação">Educação</SelectItem>
                    <SelectItem value="Entretenimento">Entretenimento</SelectItem>
                    <SelectItem value="Assinaturas">Assinaturas</SelectItem>
                    <SelectItem value="Casa">Casa</SelectItem>
                    <SelectItem value="Investimentos">Investimentos</SelectItem>
                    <SelectItem value="transferencia">Transferência</SelectItem>
                    <SelectItem value="deposito">Depósito</SelectItem>
                  </SelectContent>
                </Select>
                {(touched.categoria || errors.categoria) && errors.categoria && (
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

