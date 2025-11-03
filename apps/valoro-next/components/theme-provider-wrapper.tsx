"use client"

import { ThemeProvider, Toaster } from "@valoro/ui"

export function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider defaultTheme="light">
      {children}
      <Toaster />
    </ThemeProvider>
  )
}

