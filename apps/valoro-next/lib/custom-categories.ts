const STORAGE_KEY = "valoro_custom_categories"
const STORAGE_COLORS_KEY = "valoro_custom_category_colors"

export interface CustomCategory {
  value: string
  label: string
  color?: string
}

export function loadCustomCategories(): CustomCategory[] {
  if (typeof window === "undefined") return []
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []
    
    const categories = JSON.parse(stored) as CustomCategory[]
    return Array.isArray(categories) ? categories : []
  } catch (error) {
    console.error("Erro ao carregar categorias customizadas:", error)
    return []
  }
}

export function saveCustomCategories(categories: CustomCategory[]): void {
  if (typeof window === "undefined") return
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(categories))
  } catch (error) {
    console.error("Erro ao salvar categorias customizadas:", error)
  }
}


export function addCustomCategory(category: CustomCategory): void {
  const existing = loadCustomCategories()
  
  const exists = existing.some(
    (cat) => cat.label.toLowerCase() === category.label.toLowerCase()
  )
  
  if (!exists) {
    const updated = [...existing, category]
    saveCustomCategories(updated)
  }
}

export function loadCustomCategoryColors(): Record<string, string> {
  if (typeof window === "undefined") return {}
  
  try {
    const stored = localStorage.getItem(STORAGE_COLORS_KEY)
    if (!stored) return {}
    
    const colors = JSON.parse(stored) as Record<string, string>
    return typeof colors === "object" && colors !== null ? colors : {}
  } catch (error) {
    console.error("Erro ao carregar cores customizadas:", error)
    return {}
  }
}

export function saveCustomCategoryColor(categoryLabel: string, color: string): void {
  if (typeof window === "undefined") return
  
  try {
    const existing = loadCustomCategoryColors()
    const updated = {
      ...existing,
      [categoryLabel]: color,
    }
    localStorage.setItem(STORAGE_COLORS_KEY, JSON.stringify(updated))
  } catch (error) {
    console.error("Erro ao salvar cor customizada:", error)
  }
}


export function normalizeCategoryValue(label: string): string {
  return label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
}

