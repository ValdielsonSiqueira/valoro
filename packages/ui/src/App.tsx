import { Button } from './components/button'
import { ThemeProvider, ThemeToggle, Input, Avatar, AvatarImage, AvatarFallback, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Separator, NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './index'


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

        {/* Navigation Menu Examples Section */}
        <div className="bg-card rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Exemplos de Navigation Menu
          </h2>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Menu de Navegação Simples
              </h3>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Início
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Sobre
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Contato
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Menu com Dropdown
              </h3>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 w-[400px]">
                        <div className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Novos Produtos
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Descubra nossa linha mais recente de produtos inovadores.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </div>
                        <div className="space-y-1">
                          <NavigationMenuLink asChild>
                            <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="/">
                              <div className="text-sm font-medium leading-none">Eletrônicos</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Smartphones, laptops e acessórios.
                              </p>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="/">
                              <div className="text-sm font-medium leading-none">Roupas</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Moda masculina, feminina e infantil.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4">
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="/">
                            <div className="text-sm font-medium leading-none">Consultoria</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Ajudamos você a tomar as melhores decisões.
                            </p>
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="/">
                            <div className="text-sm font-medium leading-none">Suporte</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Suporte técnico especializado 24/7.
                            </p>
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="/">
                            <div className="text-sm font-medium leading-none">Treinamento</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Cursos e workshops especializados.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Blog
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">
                Menu de Dashboard
              </h3>
              <div className="border rounded-lg p-4">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[300px] gap-2 p-4">
                          <NavigationMenuLink asChild>
                            <a className="flex items-center space-x-2 rounded-md p-2 hover:bg-accent" href="/">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-sm">Visão Geral</span>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a className="flex items-center space-x-2 rounded-md p-2 hover:bg-accent" href="/">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm">Analytics</span>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a className="flex items-center space-x-2 rounded-md p-2 hover:bg-accent" href="/">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <span className="text-sm">Relatórios</span>
                            </a>
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Projetos</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[300px] gap-2 p-4">
                          <NavigationMenuLink asChild>
                            <a className="flex items-center space-x-2 rounded-md p-2 hover:bg-accent" href="/">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              <span className="text-sm">Meus Projetos</span>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a className="flex items-center space-x-2 rounded-md p-2 hover:bg-accent" href="/">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              <span className="text-sm">Templates</span>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a className="flex items-center space-x-2 rounded-md p-2 hover:bg-accent" href="/">
                              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                              <span className="text-sm">Arquivos</span>
                            </a>
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    
                    <NavigationMenuItem>
                      <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        Configurações
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
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
                <li>• Button (6 variantes, 4 tamanhos)</li>
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
