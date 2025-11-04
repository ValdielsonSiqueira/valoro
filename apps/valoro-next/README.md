# Valoro - Aplicação Next.js

Aplicação web de gestão financeira pessoal construída com **Next.js 16**, React 19 e o design system **@valoro/ui**.

## 📋 Sobre

Valoro é uma aplicação de gestão financeira que permite aos usuários:

- 💰 **Gerenciar transações** - Adicionar, editar e excluir receitas e despesas
- 📊 **Visualizar dados** - Gráficos e tabelas interativas para análise financeira
- 📈 **Acompanhar o saldo** - Visualização em tempo real do saldo e totais
- 📅 **Organizar por categoria** - Categorização automática de transações
- 🎨 **Interface moderna** - Design responsivo e intuitivo

## 🚀 Como Usar

### Pré-requisitos

- Node.js 18+ ou Bun
- pnpm (gerenciador de pacotes do monorepo)

### Instalação

Como este é um monorepo, as dependências são instaladas na raiz:

```bash
# Na raiz do monorepo
pnpm install
```

### Executar em Desenvolvimento

```bash
# Na raiz do monorepo
pnpm app:dev

# Ou diretamente no diretório do app
cd apps/valoro-next
pnpm dev
```

A aplicação estará disponível em: **http://localhost:3000**

### Build para Produção

```bash
# Na raiz do monorepo
pnpm app:build

# Ou diretamente
cd apps/valoro-next
pnpm build
```

### Iniciar Build de Produção

```bash
pnpm start
```

## 📁 Estrutura do Projeto

```
apps/valoro-next/
├── app/                    # App Router do Next.js
│   ├── page.tsx           # Página de login
│   ├── dashboard/         # Página do dashboard
│   │   └── page.tsx
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globais
├── components/            # Componentes específicos da aplicação
│   ├── app-sidebar.tsx   # Sidebar da aplicação
│   ├── site-header.tsx   # Cabeçalho
│   ├── data-table.tsx    # Tabela de transações
│   ├── chart-area-interactive.tsx  # Gráfico interativo
│   ├── section-cards.tsx # Cards de resumo
│   └── ...
├── contexts/             # Contextos React
│   └── visibility-context.tsx
├── hooks/                # Hooks customizados
│   ├── use-transactions.ts
│   └── use-mobile.ts
├── lib/                  # Utilitários e serviços
│   ├── transactions-service.ts
│   ├── user-service.ts
│   └── utils.ts
├── public/               # Arquivos estáticos
│   ├── logo-light.svg
│   ├── logo-dark.svg
│   └── avatars/
└── package.json
```

## 🎨 Funcionalidades

### 🏠 Página de Login

- Formulário de login com validação
- Persistência de perfil do usuário
- Design responsivo com imagem lateral

### 📊 Dashboard

- **Cards de Resumo**
  - Saldo Total
  - Receitas Totais
  - Despesas Totais
  
- **Gráfico Interativo**
  - Visualização de receitas e despesas ao longo do tempo
  - Interatividade com hover e tooltips
  
- **Tabela de Transações**
  - Listagem completa de transações
  - Filtros e ordenação
  - Ações de editar e excluir
  - Formulário de adicionar nova transação
  
- **Extrato (Timeline)**
  - Visualização cronológica das transações
  - Edição e exclusão direta
  - Agrupamento por data

### 🔧 Recursos Técnicos

- **Sidebar Responsiva** - Navegação colapsável
- **Theme Toggle** - Alternância entre tema claro/escuro
- **Estado Local** - Gerenciamento de transações com localStorage
- **Skeletons** - Estados de carregamento elegantes
- **Acessibilidade** - Componentes baseados em Radix UI

## 🛠️ Tecnologias

### Core
- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca de interface
- **TypeScript** - Tipagem estática

### Design System
- **@valoro/ui** - Componentes do design system
- **Tailwind CSS 4** - Estilização utilitária
- **Radix UI** - Primitivos acessíveis

### Funcionalidades
- **@tanstack/react-table** - Tabelas avançadas
- **recharts** - Gráficos e visualizações
- **next-themes** - Gerenciamento de tema
- **sonner** - Notificações toast
- **zod** - Validação de esquemas

## 📝 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `pnpm dev` | Inicia servidor de desenvolvimento |
| `pnpm build` | Gera build de produção |
| `pnpm start` | Inicia servidor de produção (após build) |
| `pnpm lint` | Executa o linter ESLint |

## 🔧 Configuração

### Variáveis de Ambiente

O projeto não requer variáveis de ambiente no momento, mas você pode adicionar um arquivo `.env.local` para configurações futuras:

```env
# Exemplo (não necessário atualmente)
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Tailwind CSS

O Tailwind CSS está configurado via `postcss.config.mjs` e usa a configuração do `@valoro/ui`.

### shadcn/ui

O projeto usa a configuração do shadcn/ui através do `components.json` para integração com o design system.

## 🎯 Funcionalidades Principais

### Gerenciamento de Transações

```typescript
// Adicionar transação
const handleAdd = (data: TransactionData) => {
  addTransaction({
    transaction: data.nome,
    value: parseFloat(data.valor),
    type: data.tipo === 'receita' ? 'Receita' : 'Despesa',
    category: data.categoria,
    date: formatDate(data.data),
  })
}

// Editar transação
const handleEdit = (id: number, data: TransactionData) => {
  editTransaction(id, data)
}

// Excluir transação
const handleDelete = (id: number) => {
  removeTransaction(id)
}
```

### Persistência de Dados

As transações são armazenadas no `localStorage` através do hook `useTransactions`:

```typescript
const { transactions, isLoading, addTransaction } = useTransactions()
```

## 📱 Responsividade

A aplicação é totalmente responsiva:

- **Mobile**: Sidebar colapsável, layout adaptado
- **Tablet**: Layout intermediário
- **Desktop**: Layout completo com sidebar fixa

## 🔗 Integração com @valoro/ui

A aplicação consome componentes do pacote `@valoro/ui`:

```typescript
import { 
  SidebarProvider, 
  SidebarInset,
  Timeline,
  Skeleton,
  Card,
  Button 
} from '@valoro/ui'
```

## 🚧 Desenvolvimento Futuro

Funcionalidades planejadas:

- [ ] Autenticação e autorização
- [ ] Backend API para persistência
- [ ] Exportação de relatórios
- [ ] Categorias personalizadas
- [ ] Metas e orçamentos
- [ ] Análises avançadas

## 📖 Documentação

- [Next.js Documentation](https://nextjs.org/docs)
- [@valoro/ui Documentation](../../packages/ui/README.md)
- [@valoro/docs](../../packages/docs/README.md) - Storybook
