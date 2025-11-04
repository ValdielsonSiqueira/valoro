# @valoro/ui

Biblioteca de componentes de design system para React, baseada em **shadcn/ui** e construída com **Vite**.

Este pacote fornece uma coleção completa de componentes reutilizáveis, totalmente tipados com TypeScript, estilizados com Tailwind CSS e baseados em primitivos acessíveis do Radix UI.

## 📦 Instalação

Como este é um monorepo, o pacote é instalado automaticamente ao executar `pnpm install` na raiz do projeto.

Para usar em outros projetos (fora do monorepo):

```bash
pnpm add @valoro/ui
```

## 🚀 Uso

### Importação Básica

```typescript
import { Button, Card, Input } from '@valoro/ui'
import '@valoro/ui/dist/style.css'
```

### Exemplo Completo

```tsx
import { Button } from '@valoro/ui'
import '@valoro/ui/dist/style.css'

function App() {
  return (
    <Button variant="default" size="lg">
      Clique aqui
    </Button>
  )
}
```

### Com Theme Provider

```tsx
import { ThemeProvider, Button, Card } from '@valoro/ui'
import '@valoro/ui/dist/style.css'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="valoro-ui-theme">
      <Card>
        <CardHeader>
          <CardTitle>Título</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Clique aqui</Button>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}
```

## 📚 Componentes Disponíveis

### Layout e Navegação
- **Sidebar** - Barra lateral com navegação
- **Breadcrumb** - Navegação hierárquica
- **Separator** - Separador visual
- **Tabs** - Abas de navegação

### Formulários
- **Button** - Botões com múltiplas variantes
- **Input** - Campo de entrada de texto
- **Checkbox** - Caixa de seleção
- **Select** - Seleção dropdown
- **MultiSelect** - Seleção múltipla
- **Label** - Rótulo para campos
- **DatePicker** - Seletor de data
- **Calendar** - Calendário
- **LoginForm** - Formulário de login completo

### Feedback e Overlay
- **Alert** - Alertas e notificações
- **Dialog** - Modal de diálogo
- **Drawer** - Gaveta lateral
- **Sheet** - Painel lateral
- **Popover** - Popover contextual
- **Tooltip** - Dica de ferramenta
- **Toast** (Sonner) - Notificações toast

### Dados e Exibição
- **Table** - Tabela de dados
- **Card** - Card de conteúdo
- **Badge** - Badge/etiqueta
- **Avatar** - Avatar de usuário
- **Skeleton** - Placeholder de carregamento
- **Spinner** - Indicador de carregamento
- **Timeline** - Linha do tempo

### Gráficos
- **Chart** - Componentes de gráfico (Recharts)
  - ChartContainer
  - ChartTooltip
  - ChartLegend

### Outros
- **Command** - Comando de busca (CMDK)
- **Dropdown Menu** - Menu dropdown
- **Toggle** - Alternador
- **Toggle Group** - Grupo de alternadores
- **Theme Toggle** - Alternador de tema

## 🎨 Temas e Personalização

### Suporte a Dark Mode

Todos os componentes suportam dark mode através do `ThemeProvider`:

```tsx
import { ThemeProvider } from '@valoro/ui'

function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="valoro-ui-theme"
      attribute="class"
    >
      {/* Sua aplicação */}
    </ThemeProvider>
  )
}
```

### Variantes de Componentes

A maioria dos componentes suporta variantes através de `class-variance-authority`:

```tsx
import { Button, Badge } from '@valoro/ui'

// Botões
<Button variant="default">Padrão</Button>
<Button variant="destructive">Destrutivo</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Badges
<Badge variant="default">Padrão</Badge>
<Badge variant="secondary">Secundário</Badge>
<Badge variant="destructive">Destrutivo</Badge>
<Badge variant="success">Sucesso</Badge>
```

## 🛠️ Desenvolvimento

### Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `pnpm dev` | Build em modo watch (desenvolvimento) |
| `pnpm build` | Build de produção com tipos TypeScript |
| `pnpm lint` | Executa o linter ESLint |
| `pnpm type-check` | Verifica tipos TypeScript sem emitir arquivos |
| `pnpm preview` | Preview da build de produção |

### Estrutura do Projeto

```
packages/ui/
├── src/
│   ├── components/ui/    # Componentes do design system
│   ├── contexts/          # Contextos React (Theme, etc.)
│   ├── hooks/             # Hooks customizados
│   ├── lib/               # Utilitários
│   ├── styles/            # Estilos globais
│   └── index.ts           # Exportações principais
├── dist/                  # Build de produção
├── components.json        # Configuração shadcn/ui
├── vite.config.ts         # Configuração Vite
└── package.json
```

### Adicionando Novos Componentes

1. **Crie o componente** em `src/components/ui/`:

```tsx
// src/components/ui/meu-componente.tsx
import { cn } from "@/lib/utils"

export function MeuComponente({ className, ...props }) {
  return (
    <div className={cn("base-classes", className)} {...props} />
  )
}
```

2. **Exporte o componente** em `src/index.ts`:

```typescript
export { MeuComponente } from "./components/ui/meu-componente"
```

3. **Execute o build**:

```bash
pnpm build
```

## 📋 Dependências Principais

### Runtime
- **React 19+** - Biblioteca de interface
- **Radix UI** - Primitivos acessíveis
- **Tailwind CSS** - Framework CSS utilitário
- **class-variance-authority** - Gerenciamento de variantes
- **tailwind-merge** - Merge de classes Tailwind
- **clsx** - Construção de classes condicionais

### Componentes Específicos
- **@tanstack/react-table** - Tabelas avançadas
- **recharts** - Gráficos e visualizações
- **react-day-picker** - Calendário e seleção de data
- **cmdk** - Comando de busca
- **sonner** - Notificações toast
- **vaul** - Drawer mobile
- **@dnd-kit** - Drag and drop

### Dev
- **Vite** - Build tool
- **TypeScript** - Tipagem estática
- **vite-plugin-dts** - Geração de tipos TypeScript
- **Tailwind CSS** - Framework CSS

## 🔧 Configuração

### Tailwind CSS

O pacote usa Tailwind CSS 4 com configuração via `tailwind.config.js`. Certifique-se de que o Tailwind está configurado no seu projeto consumidor.

### TypeScript

O pacote é totalmente tipado. Os tipos são gerados automaticamente durante o build e exportados em `dist/index.d.ts`.

## 📖 Documentação

Para ver exemplos e documentação interativa de todos os componentes, acesse o pacote `@valoro/docs` que contém o Storybook:

```bash
pnpm docs:dev
```

## 🔗 Links Relacionados

- [@valoro/docs](../docs/README.md) - Documentação interativa (Storybook)
- [shadcn/ui](https://ui.shadcn.com/) - Design system base
- [Radix UI](https://www.radix-ui.com/) - Primitivos acessíveis
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS

