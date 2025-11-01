"use client"

import * as React from "react"
import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconSettings,
} from "@tabler/icons-react"

import Image from "next/image"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { ProfileDialog } from "@/components/profile-dialog"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useTheme,
} from "@valoro/ui"
import { getUserProfile, UserProfile } from "@/lib/user-service"

export function AppSidebar({ 
  onAddTransaction,
  ...props 
}: React.ComponentProps<typeof Sidebar> & {
  onAddTransaction?: (data: {
    nome: string
    valor: string
    tipo: string
    categoria: string
    data: Date | undefined
  }) => void
}) {
  const { theme } = useTheme()
  const logoSrc = theme === 'light' ? '/logo-light.svg' : '/logo-dark.svg'
  const [user, setUser] = React.useState<UserProfile>(() => getUserProfile())
  const [isProfileDialogOpen, setIsProfileDialogOpen] = React.useState(false)

  React.useEffect(() => {
    setUser(getUserProfile())
  }, [])

  const handleProfileUpdate = (updatedUser: UserProfile) => {
    setUser(updatedUser)
    window.dispatchEvent(new CustomEvent('userProfileUpdated', { detail: updatedUser }))
  }

  const handleConfiguracoesClick = () => {
    setIsProfileDialogOpen(true)
  }

  const data = {
    user: {
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    },
    navMain: [
      {
        title: "Dashboard",
        url: "#",
        icon: IconDashboard,
      },
      {
        title: "Movimentações",
        url: "#",
        icon: IconChartBar,
      },
      {
        title: "Transações",
        url: "#",
        icon: IconListDetails,
      },
      {
        title: "Investimentos",
        url: "#",
        icon: IconChartBar,
      },
      {
        title: "Outros Serviços",
        url: "#",
        icon: IconFolder,
      },
    ],
    navSecondary: [
      {
        title: "Configurações",
        url: "#",
        icon: IconSettings,
      },
      {
        title: "Ajuda",
        url: "#",
        icon: IconHelp,
      },
    ],
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-6"
            >
              <a href="#">
                <Image src={logoSrc} alt="Valoro" width={45} height={45} />
                <span className="text-base font-semibold">Valoro</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} onAddTransaction={onAddTransaction} />
        <NavSecondary 
          items={data.navSecondary} 
          className="mt-auto"
          onConfiguracoesClick={handleConfiguracoesClick}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} onProfileUpdate={handleProfileUpdate} />
      </SidebarFooter>
      <ProfileDialog
        open={isProfileDialogOpen}
        onOpenChange={setIsProfileDialogOpen}
        onProfileUpdate={handleProfileUpdate}
      />
    </Sidebar>
  )
}
