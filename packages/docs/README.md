# @valoro/docs

Documentação interativa do design system do pacote **@valoro/ui** usando Storybook.

Este pacote fornece uma interface visual e interativa para explorar, testar e documentar todos os componentes do design system Valoro.

## 📚 Sobre

O `@valoro/docs` é a documentação oficial do design system Valoro, construída com Storybook. Ele permite que desenvolvedores e designers:

- 📖 Visualizar todos os componentes disponíveis
- 🎨 Testar diferentes variantes e estados dos componentes
- 💻 Copiar código de exemplo para uso nos projetos
- 🔍 Explorar propriedades e configurações de cada componente
- 📱 Testar responsividade e acessibilidade

## 🚀 Como Usar

### Instalação

Como este é um monorepo, as dependências são instaladas na raiz do projeto:

```bash
pnpm install
```

### Executar em Desenvolvimento

Para iniciar o Storybook em modo de desenvolvimento:

```bash
pnpm storybook
```

Ou usando o script do monorepo:

```bash
pnpm docs:dev
```

O Storybook estará disponível em: **http://localhost:6006**

### Build para Produção

Para gerar uma build estática do Storybook:

```bash
pnpm build-storybook
```

Ou usando o script do monorepo:

```bash
pnpm docs:build
```

A build será gerada na pasta `storybook-static/`.

### Preview da Build

Para visualizar a build de produção localmente:

```bash
pnpm preview
```

## 📦 Estrutura

```
packages/docs/
├── .storybook/          # Configuração do Storybook
│   ├── main.ts          # Configuração principal
│   └── preview.ts       # Configuração de preview
├── src/
│   ├── stories/         # Stories dos componentes
│   │   └── *.stories.tsx
│   ├── styles/          # Estilos globais
│   └── App.tsx          # Aplicação React (opcional)
└── package.json
```

## ✍️ Adicionando Documentação de Componentes

Para documentar um novo componente do `@valoro/ui`:

1. **Crie um arquivo de story** em `src/stories/`:

```typescript
// src/stories/MeuComponente.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MeuComponente } from '@valoro/ui';

const meta = {
  title: 'Components/MeuComponente',
  component: MeuComponente,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Defina os controles e documentação das props
  },
} satisfies Meta<typeof MeuComponente>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Props padrão
  },
};

export const Variant1: Story = {
  args: {
    // Outra variante
  },
};
```

2. **Exporte o componente** em `@valoro/ui` (se ainda não estiver exportado)

3. **Execute o Storybook** e visualize sua documentação

## 🛠️ Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `pnpm storybook` | Inicia o Storybook em modo desenvolvimento |
| `pnpm build-storybook` | Gera build estática do Storybook |
| `pnpm dev` | Inicia o Vite dev server (para App.tsx) |
| `pnpm build` | Build da aplicação React |
| `pnpm preview` | Preview da build de produção |
| `pnpm lint` | Executa o linter ESLint |

## 🎨 Tecnologias

- **Storybook 10.0.3**: Framework de documentação de componentes
- **React 19**: Biblioteca de interface
- **TypeScript**: Tipagem estática
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Framework CSS utilitário
- **@valoro/ui**: Pacote de componentes do design system

## 📝 Convenções

### Nomenclatura de Stories

- Use PascalCase para nomes de arquivos: `MeuComponente.stories.tsx`
- Use o título no formato: `Components/NomeDoComponente`
- Use `tags: ['autodocs']` para gerar documentação automática

### Organização

- Agrupe componentes relacionados usando `/` no título:
  - `Components/Button`
  - `Components/Form/Input`
  - `Components/Form/Select`

### Exemplos de Stories

Crie múltiplas stories para diferentes estados e variantes:

```typescript
export const Default: Story = { ... };
export const Variant1: Story = { ... };
export const WithIcon: Story = { ... };
export const Disabled: Story = { ... };
```

## 🔗 Links Relacionados

- [Documentação do Storybook](https://storybook.js.org/)
- [@valoro/ui](../ui/README.md) - Pacote de componentes
- [Valoro Monorepo](../../README.md) - Documentação principal do projeto

