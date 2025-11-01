export interface Transaction {
  id: number
  transaction: string
  value: number
  type: "Receita" | "Despesa"
  category: string
  date: string
  effectiveValue: number
}

const STORAGE_KEY = "valoro-transactions"

function formatDate(date: Date | undefined): string {
  if (!date) {
    const today = new Date()
    return `${today.getDate().toString().padStart(2, "0")}/${(today.getMonth() + 1).toString().padStart(2, "0")}/${today.getFullYear()}`
  }
  return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`
}

function calculateEffectiveValue(value: number, type: "Receita" | "Despesa"): number {
  return type === "Receita" ? value : -value
}


function generateNextId(transactions: Transaction[]): number {
  if (transactions.length === 0) return 1
  return Math.max(...transactions.map(t => t.id)) + 1
}

export function initializeStorage(defaultData: Transaction[]): void {
  if (typeof window === "undefined") return
  
  const existing = localStorage.getItem(STORAGE_KEY)
  if (!existing) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData))
  }
}


export function getTransactions(): Transaction[] {
  if (typeof window === "undefined") return []
  
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return []
    return JSON.parse(data) as Transaction[]
  } catch (error) {
    console.error("Erro ao ler transações do localStorage:", error)
    return []
  }
}

function saveTransactions(transactions: Transaction[]): void {
  if (typeof window === "undefined") return
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
  } catch (error) {
    console.error("Erro ao salvar transações no localStorage:", error)
  }
}

export function createTransaction(data: {
  nome: string
  valor: string
  tipo: string
  categoria: string
  data: Date | undefined
}): Transaction | null {
  const value = parseFloat(data.valor.replace(",", "."))
  if (isNaN(value) || value <= 0) {
    console.error("Valor inválido")
    return null
  }

  const type = data.tipo === "receita" ? "Receita" : "Despesa"
  const transactions = getTransactions()
  const newTransaction: Transaction = {
    id: generateNextId(transactions),
    transaction: data.nome,
    value: value,
    type: type,
    category: data.categoria,
    date: formatDate(data.data),
    effectiveValue: calculateEffectiveValue(value, type),
  }

  transactions.push(newTransaction)
  saveTransactions(transactions)
  return newTransaction
}

export function updateTransaction(
  id: number,
  data: {
    nome: string
    valor: string
    tipo: string
    categoria: string
    data: Date | undefined
  }
): Transaction | null {
  const value = parseFloat(data.valor.replace(",", "."))
  if (isNaN(value) || value <= 0) {
    console.error("Valor inválido")
    return null
  }

  const type = data.tipo === "receita" ? "Receita" : "Despesa"
  const transactions = getTransactions()
  const index = transactions.findIndex(t => t.id === id)

  if (index === -1) {
    console.error("Transação não encontrada")
    return null
  }

  const updatedTransaction: Transaction = {
    ...transactions[index],
    transaction: data.nome,
    value: value,
    type: type,
    category: data.categoria,
    date: formatDate(data.data),
    effectiveValue: calculateEffectiveValue(value, type),
  }

  transactions[index] = updatedTransaction
  saveTransactions(transactions)
  return updatedTransaction
}

/**
 * Deleta uma transação do localStorage
 */
export function deleteTransaction(id: number): boolean {
  const transactions = getTransactions()
  const filtered = transactions.filter(t => t.id !== id)
  
  if (filtered.length === transactions.length) {
    console.error("Transação não encontrada")
    return false
  }

  saveTransactions(filtered)
  return true
}


export function deleteTransactions(ids: number[]): boolean {
  const transactions = getTransactions()
  const filtered = transactions.filter(t => !ids.includes(t.id))
  
  if (filtered.length === transactions.length) {
    return false
  }

  saveTransactions(filtered)
  return true
}

