"use client"

import { ThemeProvider } from "@valoro/ui"

export function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
}

