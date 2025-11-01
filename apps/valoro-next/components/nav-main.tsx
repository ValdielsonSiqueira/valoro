"use client"

import { useState } from "react"
import { IconCirclePlusFilled, type Icon } from "@tabler/icons-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@valoro/ui"
import { TransactionDrawer } from "./transaction-drawer"

export function NavMain({
  items,
  onAddTransaction,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
  onAddTransaction?: (data: {
    nome: string
    valor: string
    tipo: string
    categoria: string
    data: Date | undefined
  }) => void
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const handleNovaTransacao = () => {
    setIsModalOpen(true)
    setActiveItem("Nova Transação")
  }

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Nova Transação"
              isActive={activeItem === "Nova Transação"}
              onClick={handleNovaTransacao}
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
            >
              <IconCirclePlusFilled />
              <span>Nova Transação</span>
            </SidebarMenuButton>

            <TransactionDrawer
              open={isModalOpen}
              onOpenChange={(open) => {
                setIsModalOpen(open)
                if (!open) {
                  setActiveItem(null)
                }
              }}
              title="Nova Transação"
              onConcluir={(data) => {
                if (onAddTransaction) {
                  onAddTransaction(data)
                }
                setIsModalOpen(false)
                setActiveItem(null)
              }}
            />
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => {
            const handleClick = () => {
              setActiveItem(item.title)
              
              if (item.title === "Dashboard") {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              } else if (item.title === "Movimentações") {
                const MovimentaçõesElement = document.getElementById("Movimentações")
                if (MovimentaçõesElement) {
                  MovimentaçõesElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              } else if (item.title === "Transações") {
                const tableElement = document.getElementById("transacoes-table")
                if (tableElement) {
                  tableElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              }
            }

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  tooltip={item.title}
                  isActive={activeItem === item.title}
                  onClick={handleClick}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
