"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import {
  Transaction,
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  deleteTransactions,
} from "@/lib/transactions-service"

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const initialized = useRef(false)

  const loadTransactions = useCallback(() => {
    setIsLoading(true)
    try {
      const data = getTransactions()
      setTransactions(data)
    } catch (error) {
      console.error("Erro ao carregar transações:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!initialized.current) {
      loadTransactions()
      initialized.current = true
    }
  }, [loadTransactions])

  const addTransaction = useCallback((data: {
    nome: string
    valor: string
    tipo: string
    categoria: string
    data: Date | undefined
  }) => {
    const newTransaction = createTransaction(data)
    if (newTransaction) {
      setTransactions(prev => [...prev, newTransaction])
      return true
    }
    return false
  }, [])

  const editTransaction = useCallback((id: number, data: {
    nome: string
    valor: string
    tipo: string
    categoria: string
    data: Date | undefined
  }) => {
    const updatedTransaction = updateTransaction(id, data)
    if (updatedTransaction) {
      setTransactions(prev =>
        prev.map(t => t.id === id ? updatedTransaction : t)
      )
      return true
    }
    return false
  }, [])

  const removeTransaction = useCallback((id: number) => {
    const success = deleteTransaction(id)
    if (success) {
      setTransactions(prev => prev.filter(t => t.id !== id))
    }
    return success
  }, [])

  const removeMultipleTransactions = useCallback((ids: number[]) => {
    const success = deleteTransactions(ids)
    if (success) {
      setTransactions(prev => prev.filter(t => !ids.includes(t.id)))
    }
    return success
  }, [])

  return {
    transactions,
    isLoading,
    addTransaction,
    editTransaction,
    removeTransaction,
    removeMultipleTransactions,
    refreshTransactions: loadTransactions,
  }
}

