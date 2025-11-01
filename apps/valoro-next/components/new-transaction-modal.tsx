"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
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

interface NewTransactionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConcluir?: (data: {
    nome: string
    valor: string
    tipo: string
    categoria: string
    data: Date | undefined
  }) => void
}

export function NewTransactionModal({
  open,
  onOpenChange,
  onConcluir,
}: NewTransactionModalProps) {
  const [nome, setNome] = useState<string>("")
  const [valor, setValor] = useState<string>("")
  const [tipo, setTipo] = useState<string>("")
  const [categoria, setCategoria] = useState<string>("")
  const [data, setData] = useState<Date | undefined>(undefined)

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
    setNome("")
    setValor("")
    setTipo("")
    setCategoria("")
    setData(undefined)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova Transação</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Primeira linha: Nome e Valor */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome da Transação</Label>
              <Input
                id="nome"
                type="text"
                placeholder="Digite o nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="space-y-2">
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

          {/* Segunda linha: Tipo e Categoria */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
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

            <div className="space-y-2">
              <Label htmlFor="categoria">Categoria</Label>
              <Select value={categoria} onValueChange={setCategoria}>
                <SelectTrigger id="categoria" className="w-full">
                  <SelectValue placeholder="Selecione a categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="transferencia">Transferência</SelectItem>
                  <SelectItem value="deposito">Depósito</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Terceira linha: Data */}
          <div className="space-y-2">
            <DatePicker
              value={data}
              onValueChange={setData}
              label="Data"
              placeholder="Selecione a data"
              buttonClassName="w-full justify-between font-normal"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleCancelar}>
            Cancelar
          </Button>
          <Button onClick={handleConcluirTransacao}>
            Concluir transação
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

