import { 
  Button,
  ThemeProvider, 
  ThemeToggle, 
  Input, 
  Avatar, 
  AvatarImage, 
  AvatarFallback, 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue, 
  Separator, 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Label,
  Skeleton,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider
} from './index'


function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-4 mb-4">
              <h1 className="text-4xl font-bold text-foreground">
                🎨 Valoro UI - Teste de Componentes
              </h1>
              <ThemeToggle />
            </div>
            <p className="text-lg text-muted-foreground">
              Teste interativo dos componentes do pacote UI
            </p>
          </div>

        {/* Button Variants Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Variantes do Botão
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Default
              </h3>
              <Button>Botão Padrão</Button>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Destructive
              </h3>
              <Button variant="destructive">Botão Destrutivo</Button>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Outline
              </h3>
              <Button variant="outline">Botão Outline</Button>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Secondary
              </h3>
              <Button variant="secondary">Botão Secundário</Button>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Ghost
              </h3>
              <Button variant="ghost">Botão Ghost</Button>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Link
              </h3>
              <Button variant="link">Botão Link</Button>
            </div>
          </div>
        </div>

        {/* Button Sizes Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Tamanhos do Botão
          </h2>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Small</p>
              <Button size="sm">Small</Button>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Default</p>
              <Button size="default">Default</Button>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Large</p>
              <Button size="lg">Large</Button>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Icon</p>
              <Button size="icon">🔍</Button>
            </div>
          </div>
        </div>

        {/* Input Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Input
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Input Básico
              </h3>
              <Input placeholder="Digite algo aqui..." />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Input com Label
              </h3>
            <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Nome completo
                </label>
                <Input placeholder="Seu nome completo" />
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Input Desabilitado
              </h3>
              <Input placeholder="Campo desabilitado" disabled />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Input de Email
              </h3>
              <Input type="email" placeholder="seu@email.com" />
            </div>
          </div>
        </div>

        {/* Avatar Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Avatar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Avatar com Imagem
              </h3>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Avatar Fallback
              </h3>
              <Avatar>
                <AvatarImage src="/broken-image.jpg" alt="Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Avatar Pequeno
              </h3>
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/vercel.png" alt="Avatar" />
                <AvatarFallback>V</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Avatar Grande
              </h3>
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://github.com/nextjs.png" alt="Avatar" />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Select Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Select
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Select Básico
              </h3>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="opcao1">Opção 1</SelectItem>
                  <SelectItem value="opcao2">Opção 2</SelectItem>
                  <SelectItem value="opcao3">Opção 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Select com Label
              </h3>
            <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  País
                </label>
                <Select>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Escolha um país" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="br">Brasil</SelectItem>
                    <SelectItem value="us">Estados Unidos</SelectItem>
                    <SelectItem value="ca">Canadá</SelectItem>
                    <SelectItem value="fr">França</SelectItem>
                    <SelectItem value="de">Alemanha</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Select de Tamanho
              </h3>
              <Select>
                <SelectTrigger className="w-[250px]">
                  <SelectValue placeholder="Escolha um tamanho" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pp">PP - Extra Pequeno</SelectItem>
                  <SelectItem value="p">P - Pequeno</SelectItem>
                  <SelectItem value="m">M - Médio</SelectItem>
                  <SelectItem value="g">G - Grande</SelectItem>
                  <SelectItem value="gg">GG - Extra Grande</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Select de Status
              </h3>
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Status do pedido" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pendente">Pendente</SelectItem>
                  <SelectItem value="processando">Processando</SelectItem>
                  <SelectItem value="enviado">Enviado</SelectItem>
                  <SelectItem value="entregue">Entregue</SelectItem>
                  <SelectItem value="cancelado">Cancelado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Separator Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Separator
          </h2>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Separador Horizontal
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Separador padrão:</p>
                  <div className="space-y-2">
                    <p className="text-sm">Conteúdo acima do separador</p>
                    <Separator />
                    <p className="text-sm">Conteúdo abaixo do separador</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Separador com margem:</p>
            <div className="space-y-2">
                    <p className="text-sm">Seção 1</p>
                    <Separator className="my-4" />
                    <p className="text-sm">Seção 2</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Separador Vertical
              </h3>
              <div className="flex items-center space-x-4">
                <p className="text-sm">Item 1</p>
                <Separator orientation="vertical" className="h-4" />
                <p className="text-sm">Item 2</p>
                <Separator orientation="vertical" className="h-4" />
                <p className="text-sm">Item 3</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Exemplo Prático - Menu
              </h3>
              <div className="max-w-sm border rounded-lg p-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Dashboard</span>
                </div>
                <Separator />
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Projetos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Tarefas</span>
                </div>
                <Separator />
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Configurações</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Exemplo Prático - Formulário
              </h3>
              <div className="max-w-md space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Nome</label>
                  <Input placeholder="Seu nome" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                
                <Separator className="my-4" />
                
                <div>
                  <label className="text-sm font-medium text-foreground">Endereço</label>
                  <Input placeholder="Rua, número" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Cidade" />
                  <Input placeholder="CEP" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Breadcrumb
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Breadcrumb Simples
              </h3>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Início</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/produtos">Produtos</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Eletrônicos</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Breadcrumb de Dashboard
              </h3>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard/projetos">Projetos</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard/projetos/123">Projeto ABC</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Configurações</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>

        {/* Drawer Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Drawer
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Drawer Básico
              </h3>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline">Abrir Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Configurações</DrawerTitle>
                    <DrawerDescription>
                      Faça alterações nas suas configurações aqui.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Nome
                      </Label>
                      <Input id="name" value="João Silva" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input id="username" value="@joaosilva" className="col-span-3" />
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button>Salvar alterações</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>

        {/* Dropdown Menu Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Dropdown Menu
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Dropdown Menu Básico
              </h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Abrir Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Perfil</DropdownMenuItem>
                  <DropdownMenuItem>Configurações</DropdownMenuItem>
                  <DropdownMenuItem>Sair</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Sidebar Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Sidebar
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Sidebar Básico
              </h3>
              <div className="border rounded-lg p-4">
                <SidebarProvider>
                  <Sidebar>
                    <SidebarHeader>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded"></div>
                        <span className="font-semibold">Valoro</span>
                      </div>
                    </SidebarHeader>
                    <SidebarContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            🏠 Dashboard
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            📊 Relatórios
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            👥 Usuários
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            ⚙️ Configurações
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarContent>
                  </Sidebar>
                </SidebarProvider>
              </div>
            </div>
          </div>
        </div>

        {/* Sheet Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Sheet
          </h2>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Sheet Básico (Lado Direito)
              </h3>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Abrir Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Configurações</SheetTitle>
                    <SheetDescription>
                      Faça alterações nas suas configurações aqui. Clique em salvar quando terminar.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="name" className="text-right">
                        Nome
                      </label>
                      <Input id="name" value="João Silva" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="username" className="text-right">
                        Username
                      </label>
                      <Input id="username" value="@joaosilva" className="col-span-3" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">Salvar alterações</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Sheet do Lado Esquerdo
              </h3>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Menu Lateral</Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Menu de Navegação</SheetTitle>
                    <SheetDescription>
                      Acesse as diferentes seções do sistema.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4 py-4">
                    <Button variant="ghost" className="justify-start">
                      🏠 Dashboard
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      📊 Relatórios
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      👥 Usuários
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      ⚙️ Configurações
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Sheet de Baixo para Cima
              </h3>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Abrir de Baixo</Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[400px]">
                  <SheetHeader>
                    <SheetTitle>Filtros Avançados</SheetTitle>
                    <SheetDescription>
                      Configure os filtros para sua busca.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Categoria</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma categoria" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="eletronicos">Eletrônicos</SelectItem>
                            <SelectItem value="roupas">Roupas</SelectItem>
                            <SelectItem value="casa">Casa e Decoração</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Preço Máximo</label>
                        <Input type="number" placeholder="R$ 0,00" />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Limpar</Button>
                      <Button>Aplicar Filtros</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Sheet de Cima para Baixo
              </h3>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Notificações</Button>
                </SheetTrigger>
                <SheetContent side="top" className="h-[300px]">
                  <SheetHeader>
                    <SheetTitle>Notificações</SheetTitle>
                    <SheetDescription>
                      Suas notificações mais recentes.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="space-y-3 py-4">
                    <div className="flex items-center space-x-3 p-3 border rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Nova mensagem</p>
                        <p className="text-xs text-muted-foreground">Você tem uma nova mensagem de João</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Pedido confirmado</p>
                        <p className="text-xs text-muted-foreground">Seu pedido #123 foi confirmado</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border rounded-lg">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Lembrete</p>
                        <p className="text-xs text-muted-foreground">Reunião em 30 minutos</p>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Badge Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Badge
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Default
              </h3>
              <Badge>Badge Padrão</Badge>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Secondary
              </h3>
              <Badge variant="secondary">Secundário</Badge>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Destructive
              </h3>
              <Badge variant="destructive">Erro</Badge>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Outline
              </h3>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>
        </div>

        {/* Card Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Card
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Card Simples</CardTitle>
                <CardDescription>
                  Este é um exemplo de card básico com header e conteúdo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Conteúdo do card aqui. Pode incluir qualquer elemento React.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Card com Footer</CardTitle>
                <CardDescription>
                  Card que inclui um footer com ações.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Conteúdo principal do card.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Ação</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Card de Estatísticas</CardTitle>
                <CardDescription>
                  Exemplo de card para exibir métricas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Vendas</span>
                    <span className="text-sm font-medium">R$ 12.345</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Clientes</span>
                    <span className="text-sm font-medium">1.234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Taxa de Conversão</span>
                    <span className="text-sm font-medium">3.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Checkbox Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Checkbox
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Checkboxes Básicos
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Aceito os termos e condições</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter">Desejo receber newsletter</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="notifications" defaultChecked />
                  <Label htmlFor="notifications">Receber notificações</Label>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Lista de Tarefas
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="task1" defaultChecked />
                  <Label htmlFor="task1" className="line-through text-muted-foreground">
                    Configurar projeto
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="task2" />
                  <Label htmlFor="task2">Implementar autenticação</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="task3" />
                  <Label htmlFor="task3">Criar dashboard</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="task4" />
                  <Label htmlFor="task4">Testes unitários</Label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Table
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Tabela de Usuários
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">João Silva</TableCell>
                    <TableCell>joao@email.com</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Ativo</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="outline">Editar</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Maria Santos</TableCell>
                    <TableCell>maria@email.com</TableCell>
                    <TableCell>
                      <Badge variant="destructive">Inativo</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="outline">Editar</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Pedro Costa</TableCell>
                    <TableCell>pedro@email.com</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Ativo</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="outline">Editar</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* Tabs Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Tabs
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Tabs Básicas
              </h3>
              <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="account">Conta</TabsTrigger>
                  <TabsTrigger value="password">Senha</TabsTrigger>
                  <TabsTrigger value="settings">Configurações</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Informações da Conta</CardTitle>
                      <CardDescription>
                        Atualize suas informações pessoais aqui.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div>
                        <Label htmlFor="name">Nome</Label>
                        <Input id="name" defaultValue="João Silva" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" defaultValue="joao@email.com" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="password">
                  <Card>
                    <CardHeader>
                      <CardTitle>Alterar Senha</CardTitle>
                      <CardDescription>
                        Mantenha sua conta segura com uma senha forte.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div>
                        <Label htmlFor="current">Senha Atual</Label>
                        <Input id="current" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="new">Nova Senha</Label>
                        <Input id="new" type="password" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="settings">
                  <Card>
                    <CardHeader>
                      <CardTitle>Configurações</CardTitle>
                      <CardDescription>
                        Gerencie suas preferências de conta.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="notifications" />
                        <Label htmlFor="notifications">Receber notificações</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="newsletter" />
                        <Label htmlFor="newsletter">Newsletter</Label>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Toggle Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Toggle
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Toggle Individual
              </h3>
              <div className="flex items-center space-x-4">
                <Toggle aria-label="Toggle bold">
                  <span className="font-bold">B</span>
                </Toggle>
                <Toggle aria-label="Toggle italic">
                  <span className="italic">I</span>
                </Toggle>
                <Toggle aria-label="Toggle underline">
                  <span className="underline">U</span>
                </Toggle>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Toggle Group
              </h3>
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <span className="font-bold">B</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <span className="italic">I</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                  <span className="underline">U</span>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>

        {/* Tooltip Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Tooltip
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Tooltips Básicos
              </h3>
              <div className="flex items-center space-x-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Este é um tooltip básico</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Informação</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Mais informações sobre este botão</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Ajuda</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Clique aqui para obter ajuda</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>

        {/* Skeleton Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Skeleton
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Estados de Carregamento
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>
                
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[160px]" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos Interativos
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Formulário de Exemplo
              </h3>
              <div className="max-w-md space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Nome
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="Digite seu email"
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit">Enviar</Button>
                  <Button variant="outline" type="button">Cancelar</Button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Ações de Confirmação
              </h3>
              <div className="flex gap-2">
                <Button variant="destructive" size="sm">
                  Excluir Item
                </Button>
                <Button variant="outline" size="sm">
                  Editar
                </Button>
                <Button variant="secondary" size="sm">
                  Visualizar
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Package Info Section */}
        <div className="bg-gray-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">
            📦 Informações do Pacote
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Detalhes</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Nome:</strong> @valoro/ui</li>
                <li><strong>Versão:</strong> 0.0.0</li>
                <li><strong>Tipo:</strong> Biblioteca de Componentes</li>
                <li><strong>Framework:</strong> React + TypeScript</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Componentes</h3>
              <ul className="space-y-2 text-sm">
                <li>• Button, Input, Avatar, Badge</li>
                <li>• Card, Table, Tabs, Toggle</li>
                <li>• Checkbox, Tooltip, Skeleton</li>
                <li>• Navigation Menu, Sheet, Select</li>
                <li>• Breadcrumb, Separator, Label</li>
                <li>• Suporte a asChild (Radix UI)</li>
                <li>• Class Variance Authority</li>
                <li>• Tailwind CSS + Animate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
