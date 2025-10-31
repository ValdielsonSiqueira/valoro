"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface VisibilityContextType {
  isVisible: boolean
  toggleVisibility: () => void
}

const VisibilityContext = createContext<VisibilityContextType | undefined>(
  undefined
)

export function VisibilityProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(true)

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  return (
    <VisibilityContext.Provider value={{ isVisible, toggleVisibility }}>
      {children}
    </VisibilityContext.Provider>
  )
}

export function useVisibility() {
  const context = useContext(VisibilityContext)
  if (context === undefined) {
    throw new Error("useVisibility must be used within a VisibilityProvider")
  }
  return context
}

