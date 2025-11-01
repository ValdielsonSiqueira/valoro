"use client"

import * as React from "react"
import { type Icon } from "@tabler/icons-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@valoro/ui"

export function NavSecondary({
  items,
  onConfiguracoesClick,
  onAjudaClick,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: Icon
  }[]
  onConfiguracoesClick?: () => void
  onAjudaClick?: () => void
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const handleClick = (e: React.MouseEvent) => {
              if (item.title === "Configurações" && onConfiguracoesClick) {
                e.preventDefault()
                onConfiguracoesClick()
              }
              if (item.title === "Ajuda" && onAjudaClick) {
                e.preventDefault()
                onAjudaClick()
              }
            }

            const shouldPreventDefault = 
              (item.title === "Configurações" && onConfiguracoesClick) ||
              (item.title === "Ajuda" && onAjudaClick)

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  asChild={!shouldPreventDefault}
                  onClick={shouldPreventDefault ? handleClick : undefined}
                >
                  <a href={item.url} onClick={handleClick} className="flex items-center gap-2">
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
