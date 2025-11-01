"use client"

import { useState } from "react"
import { IconCirclePlusFilled, IconCashBanknotePlus , type Icon } from "@tabler/icons-react"

import {
  Button,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@valoro/ui"
import { NewTransactionModal } from "./new-transaction-modal"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleConcluirTransacao = (data: {
    nome: string
    valor: string
    tipo: string
    categoria: string
    data: Date | undefined
  }) => {
    // Aqui você pode adicionar a lógica para salvar a transação
    console.log("Dados da transação:", data)
  }

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Inicio"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
            >
              <IconCirclePlusFilled />
              <span>Inicio</span>
            </SidebarMenuButton>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  className="size-8 group-data-[collapsible=icon]:opacity-0"
                  variant="outline"
                  onClick={() => setIsModalOpen(true)}
                >
                  <IconCashBanknotePlus  className="!size-5" />
                  <span className="sr-only">Transações</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Nova transação</p>
              </TooltipContent>
            </Tooltip>

            <NewTransactionModal
              open={isModalOpen}
              onOpenChange={setIsModalOpen}
              onConcluir={handleConcluirTransacao}
            />
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => {
            const handleClick = () => {
              if (item.title === "Dashboard") {
                // Scroll até o topo da página
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              } else if (item.title === "Gráficos") {
                const graficosElement = document.getElementById("graficos")
                if (graficosElement) {
                  graficosElement.scrollIntoView({
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
