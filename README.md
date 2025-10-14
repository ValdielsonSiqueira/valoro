# Valoro Monorepo

Este é um monorepo configurado com Turbo Repo, pnpm, Vite e shadcn/ui.

## Estrutura do Projeto

```
valoro/
├── apps/
│   └── valoro/                 # Aplicação principal (Vite + React)
├── packages/
│   ├── ui/                     # Pacote de componentes (Vite + shadcn/ui)
│   └── docs/                   # Documentação (Storybook + Vite)
├── package.json
├── turbo.json
└── pnpm-workspace.yaml
```

## Pacotes

### 🎨 @valoro/ui
Pacote de componentes reutilizáveis baseado em shadcn/ui com Tailwind CSS, construído com Vite.

### 📚 @valoro/docs
Documentação interativa dos componentes usando Storybook com Vite.

### 🚀 valoro
Aplicação principal React com Vite que consome os componentes do pacote UI.

## Scripts Disponíveis

### Desenvolvimento
```bash
# Instalar dependências
pnpm install

# Executar todos os projetos em modo desenvolvimento
pnpm dev

# Scripts específicos por projeto
pnpm app:dev      # Aplicação principal (http://localhost:3000)
pnpm ui:dev       # Pacote UI (build watch)
pnpm docs:dev     # Storybook (http://localhost:6006)
```

### Build
```bash
# Build de todos os projetos
pnpm build

# Scripts específicos por projeto
pnpm app:build    # Build da aplicação principal
pnpm ui:build     # Build do pacote UI
pnpm docs:build   # Build do Storybook
```

### Lint
```bash
# Lint de todos os projetos
pnpm lint

# Scripts específicos por projeto
pnpm app:lint     # Lint da aplicação principal
pnpm ui:lint      # Lint do pacote UI
pnpm docs:lint    # Lint do Storybook
```

### Preview
```bash
# Preview da aplicação principal (após build)
pnpm app:preview
```

## Tecnologias Utilizadas

- **Turbo Repo**: Gerenciamento do monorepo
- **pnpm**: Gerenciador de dependências
- **Vite**: Build tool e dev server
- **React**: Biblioteca de interface
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Framework CSS
- **shadcn/ui**: Biblioteca de componentes
- **Storybook**: Documentação de componentes
- **ESLint**: Linter de código

## Como Começar

1. Clone o repositório
2. Instale as dependências: `pnpm install`
3. Execute o projeto: `pnpm dev`
4. Acesse:
   - Aplicação principal: http://localhost:3000
   - Storybook: http://localhost:6006

## Desenvolvimento

### Adicionando Novos Componentes

1. Crie o componente em `packages/ui/src/components/`
2. Exporte o componente em `packages/ui/src/index.ts`
3. Adicione as stories em `packages/docs/src/stories/`
4. Use o componente na aplicação principal

### Estrutura de Componentes

Os componentes seguem o padrão do shadcn/ui:
- Utilizam `class-variance-authority` para variantes
- Integram com Tailwind CSS
- Suportam dark mode
- São totalmente tipados com TypeScript
- Construídos com Vite para máxima performance
