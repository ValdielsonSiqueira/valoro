# Valoro Monorepo

Monorepo configurado com **Turbo Repo**, **pnpm**, **Next.js**, **Vite** e **shadcn/ui** para desenvolvimento de aplicações e componentes reutilizáveis.

## 📁 Estrutura do Projeto

O monorepo está organizado em **apps** (aplicações) e **packages** (bibliotecas compartilhadas):

```
valoro/
├── apps/                          # Aplicações
│   └── valoro-next/              # Aplicação Next.js (gestão financeira)
│
├── packages/                      # Bibliotecas compartilhadas
│   ├── ui/                       # Design System (@valoro/ui)
│   └── docs/                     # Documentação Storybook (@valoro/docs)
│
├── package.json                   # Configuração raiz do monorepo
├── turbo.json                     # Configuração Turbo Repo
└── pnpm-workspace.yaml           # Workspaces do pnpm
```

## 🎯 Divisão do Monorepo

### 📱 Apps (Aplicações)

#### **valoro-next** - Aplicação Next.js
Aplicação web de gestão financeira pessoal construída com Next.js 16.

- **Stack**: Next.js 16, React 19, TypeScript
- **Porta**: http://localhost:3000
- **Documentação**: [apps/valoro-next/README.md](./apps/valoro-next/README.md)

**Funcionalidades:**
- 💰 Gerenciamento de transações (receitas e despesas)
- 📊 Gráficos e visualizações interativas
- 📈 Dashboard com análise financeira
- 📅 Timeline de transações
- 🎨 Interface moderna e responsiva

### 📦 Packages (Bibliotecas)

#### **@valoro/ui** - Design System
Biblioteca de componentes reutilizáveis baseada em shadcn/ui.

- **Stack**: Vite, React 19, TypeScript, Tailwind CSS, Radix UI
- **Build**: Biblioteca ESM/CJS
- **Documentação**: [packages/ui/README.md](./packages/ui/README.md)

**Componentes:**
- 30+ componentes (Button, Card, Table, Sidebar, Chart, etc.)
- Suporte a dark mode
- Totalmente tipado com TypeScript
- Baseado em primitivos acessíveis (Radix UI)

#### **@valoro/docs** - Documentação Storybook
Documentação interativa do design system usando Storybook.

- **Stack**: Storybook, Vite, React 19
- **Porta**: http://localhost:6006
- **Documentação**: [packages/docs/README.md](./packages/docs/README.md)

**Funcionalidades:**
- 📖 Visualização de todos os componentes
- 🎨 Teste interativo de variantes
- 💻 Código de exemplo para copiar
- 🔍 Documentação de props e configurações

## 🚀 Como Subir as Aplicações

### Pré-requisitos

- **Node.js** 18+ ou Bun
- **pnpm** 8+ (gerenciador de pacotes)

### Instalação Inicial

```bash
# 1. Clone o repositório
git clone <repository-url>

# 2. Instale todas as dependências
pnpm install
```

### Desenvolvimento

#### Opção 1: Executar Todas as Aplicações Simultaneamente

```bash
# Executa todos os projetos em modo desenvolvimento
pnpm dev
```

Isso irá iniciar:
- ✅ **valoro-next** em http://localhost:3000
- ✅ **@valoro/docs** (Storybook) em http://localhost:6006
- ✅ **@valoro/ui** em modo watch (build contínuo)

#### Opção 2: Executar Aplicações Individualmente

**Aplicação Next.js:**
```bash
# Desenvolvimento
pnpm next:dev

# Build de produção
pnpm next:build

# Executar build de produção
pnpm next:start

# Lint
pnpm next:lint
```

**Design System (UI):**
```bash
# Build em modo watch (desenvolvimento)
pnpm ui:dev

# Build de produção
pnpm ui:build

# Lint
pnpm ui:lint
```

**Documentação (Storybook):**
```bash
# Desenvolvimento
pnpm docs:dev

# Build de produção
pnpm docs:build

# Lint
pnpm docs:lint
```

### Build de Produção

```bash
# Build de todos os projetos
pnpm build
```

Isso irá:
1. Build do `@valoro/ui` primeiro (dependência)
2. Build do `valoro-next` (consome o UI)
3. Build do `@valoro/docs` (Storybook estático)

### Lint

```bash
# Lint de todos os projetos
pnpm lint

# Lint específico por projeto
pnpm next:lint
pnpm ui:lint
pnpm docs:lint
```

## 📋 Scripts Disponíveis

### Scripts Globais (Turbo)

| Script | Descrição |
|--------|-----------|
| `pnpm dev` | Executa todos os projetos em desenvolvimento |
| `pnpm build` | Build de todos os projetos |
| `pnpm lint` | Lint de todos os projetos |
| `pnpm storybook` | Inicia Storybook |

### Scripts por Projeto

#### valoro-next (Next.js)
```bash
pnpm next:dev      # Desenvolvimento
pnpm next:build    # Build de produção
pnpm next:start    # Executar build de produção
pnpm next:lint     # Lint
```

#### @valoro/ui (Design System)
```bash
pnpm ui:dev        # Build em modo watch
pnpm ui:build      # Build de produção
pnpm ui:lint       # Lint
```

#### @valoro/docs (Storybook)
```bash
pnpm docs:dev      # Storybook em desenvolvimento
pnpm docs:build    # Build estático do Storybook
pnpm docs:lint     # Lint
```

## 🔗 Fluxo de Dependências

As dependências seguem esta ordem:

```
@valoro/ui (package)
    ↓
valoro-next (app) ──┐
                    ├──→ Consomem @valoro/ui
@valoro/docs (package) ──┘
```

- **@valoro/ui** é a base - não depende de outros pacotes
- **valoro-next** e **@valoro/docs** dependem de **@valoro/ui**
- O Turbo Repo gerencia automaticamente a ordem de build

## 🛠️ Tecnologias Utilizadas

### Core
- **Turbo Repo** - Gerenciamento e cache do monorepo
- **pnpm** - Gerenciador de dependências com workspaces
- **TypeScript** - Tipagem estática em todo o projeto

### Apps
- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca de interface

### Packages
- **Vite** - Build tool para UI e Docs
- **Storybook 10** - Documentação de componentes
- **Tailwind CSS 4** - Framework CSS utilitário
- **Radix UI** - Primitivos acessíveis
- **shadcn/ui** - Design system base

### Ferramentas
- **ESLint** - Linter de código
- **Turbo** - Cache e execução paralela

## 📚 Documentação dos Projetos

Cada projeto possui seu próprio README com informações detalhadas:

- 📱 **[valoro-next/README.md](./apps/valoro-next/README.md)** - Aplicação Next.js
- 🎨 **[packages/ui/README.md](./packages/ui/README.md)** - Design System
- 📖 **[packages/docs/README.md](./packages/docs/README.md)** - Storybook

## 🚀 Como Começar

### Passo a Passo

1. **Clone e instale:**
   ```bash
   git clone <repository-url>
   cd valoro
   pnpm install
   ```

2. **Inicie o desenvolvimento:**
   ```bash
   pnpm dev
   ```

3. **Acesse as aplicações:**
   - **Aplicação**: http://localhost:3000
   - **Storybook**: http://localhost:6006

4. **Desenvolva:**
   - Crie componentes em `packages/ui/src/components/`
   - Documente em `packages/docs/src/stories/`
   - Use na aplicação `apps/valoro-next/`

## 🔧 Desenvolvimento

### Adicionando Novos Componentes

1. **Crie o componente** em `packages/ui/src/components/ui/`
2. **Exporte** em `packages/ui/src/index.ts`
3. **Documente** em `packages/docs/src/stories/` (crie um arquivo `.stories.tsx`)
4. **Use** na aplicação `apps/valoro-next/`

### Estrutura de Componentes

Os componentes seguem o padrão do shadcn/ui:
- ✅ Utilizam `class-variance-authority` para variantes
- ✅ Integram com Tailwind CSS
- ✅ Suportam dark mode
- ✅ São totalmente tipados com TypeScript
- ✅ Baseados em primitivos acessíveis (Radix UI)

### Workspaces

O monorepo usa pnpm workspaces para gerenciar dependências:

```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

Isso permite que os projetos se referenciem usando:
- `@valoro/ui` - no package.json
- `workspace:*` - como versão

## 📝 Notas Importantes

### Ordem de Build

O Turbo Repo gerencia automaticamente a ordem de build baseado nas dependências. O `@valoro/ui` sempre é buildado primeiro porque é uma dependência dos outros projetos.

### Cache do Turbo

O Turbo usa cache para acelerar builds. Se você precisar forçar um rebuild completo:

```bash
pnpm build --force
```

### Portas

- **valoro-next**: http://localhost:3000
- **Storybook**: http://localhost:6006
- **UI Dev Server**: http://localhost:3001 (quando executado isoladamente)

