export const CATEGORY_COLORS: Record<string, string> = {
  "Salário": "bg-purple-500",
  "Assinaturas": "bg-red-500",
  "Cartão de Crédito": "bg-rose-500",
  "Comida": "bg-orange-500",
  "Mercado": "bg-blue-500",
  "Financiamento": "bg-red-600",
  "Internet": "bg-cyan-500",
  "Casa": "bg-pink-500",
  "Pensão": "bg-yellow-500",
  "Reserva": "bg-emerald-600",
  "Investimentos": "bg-green-500",
  "Entretenimento": "bg-indigo-500",
  "Educação": "bg-teal-500",
  "Transferência": "bg-violet-500",
  "Depósito": "bg-lime-500",
}

export function getCategoryColor(category: string): string {
  return CATEGORY_COLORS[category] || "bg-slate-500"
}

export function isCategoryOutline(_category: string): boolean {
  return false
}

