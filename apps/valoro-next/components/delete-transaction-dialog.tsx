"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@valoro/ui"
import { Button } from "@valoro/ui"

interface DeleteTransactionDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  transactionName?: string
  onConfirm: () => void
}

export function DeleteTransactionDialog({
  open,
  onOpenChange,
  transactionName,
  onConfirm,
}: DeleteTransactionDialogProps) {
  const handleConfirm = () => {
    onConfirm()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar exclusão</DialogTitle>
          <DialogDescription>
            {transactionName
              ? `Tem certeza que deseja excluir a transação "${transactionName}"? Esta ação não pode ser desfeita.`
              : "Tem certeza que deseja excluir esta transação? Esta ação não pode ser desfeita."}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button variant="destructive" onClick={handleConfirm}>
            Excluir
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

