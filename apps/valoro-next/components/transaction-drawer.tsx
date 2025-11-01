"use client"

import { useState, useEffect } from "react"
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
  
  // Normalizar tipo para minúsculas
  const normalizeType = (type: string | undefined): string => {
    if (!type) return ""
    return type.toLowerCase()
  }
  
  const [nome, setNome] = useState<string>(initialData?.nome || "")
  const [valor, setValor] = useState<string>(initialData?.valor || "")
  const [tipo, setTipo] = useState<string>(normalizeType(initialData?.tipo))
  const [categoria, setCategoria] = useState<string>(initialData?.categoria || "")
  const [data, setData] = useState<Date | undefined>(initialData?.data)

  // Atualizar os campos quando initialData mudar
  useEffect(() => {
    if (initialData) {
      setNome(initialData.nome || "")
      setValor(initialData.valor || "")
      setTipo(normalizeType(initialData.tipo))
      setCategoria(initialData.categoria || "")
      setData(initialData.data)
    }
  }, [initialData])

  // Resetar campos quando abrir como nova transação
  useEffect(() => {
    if (open && title === "Nova Transação" && !initialData) {
      setNome("")
      setValor("")
      setTipo("")
      setCategoria("")
      setData(undefined)
    }
  }, [open, title, initialData])

  const handleConcluirTransacao = () => {
    if (onConcluir) {
      onConcluir({
        nome,
        valor,
        tipo,
        categoria,
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
            {/* Primeira linha: Nome e Valor */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-3">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Digite o nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-3">
                <Label htmlFor="valor">Valor</Label>
                <Input
                  id="valor"
                  type="number"
                  placeholder="0,00"
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-3">
                <Label htmlFor="tipo">Tipo</Label>
                <Select value={tipo} onValueChange={setTipo}>
                  <SelectTrigger id="tipo" className="w-full">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="despesa">Despesa</SelectItem>
                    <SelectItem value="receita">Receita</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-3">
                <Label htmlFor="categoria">Categoria</Label>
                <Select value={categoria} onValueChange={setCategoria}>
                  <SelectTrigger id="categoria" className="w-full">
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
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <DatePicker
                value={data}
                onValueChange={setData}
                label="Data"
                placeholder="Selecione a data"
                buttonClassName="w-full justify-between font-normal"
              />
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

