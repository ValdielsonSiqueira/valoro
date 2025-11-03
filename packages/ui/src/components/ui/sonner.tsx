"use client"

import {
  CheckCircle,
  Info,
  Loader2,
  XCircle,
  AlertTriangle,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CheckCircle className="size-4" />,
        info: <Info className="size-4" />,
        warning: <AlertTriangle className="size-4" />,
        error: <XCircle className="size-4" />,
        loading: <Loader2 className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "oklch(var(--popover))",
          "--normal-text": "oklch(var(--popover-foreground))",
          "--normal-border": "oklch(var(--border))",
          "--success-bg": "oklch(var(--success))",
          "--success-text": "oklch(var(--success-foreground))",
          "--success-border": "oklch(var(--success))",
          "--error-bg": "oklch(var(--destructive))",
          "--error-text": "oklch(var(--destructive-foreground))",
          "--error-border": "oklch(var(--destructive))",
          "--warning-bg": "oklch(var(--warning))",
          "--warning-text": "oklch(var(--warning-foreground))",
          "--warning-border": "oklch(var(--warning))",
          "--info-bg": "oklch(var(--info))",
          "--info-text": "oklch(var(--info-foreground))",
          "--info-border": "oklch(var(--info))",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
export { toast } from "sonner"
