import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@valoro/ui';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'success', 'outline'],
      description: 'Variante visual do badge',
    },
    asChild: {
      control: 'boolean',
      description: 'Renderiza o badge como um Slot do Radix UI',
    },
    children: {
      control: 'text',
      description: 'Conteúdo do badge',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Badge',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Badge',
    variant: 'destructive',
  },
};

export const Success: Story = {
  args: {
    children: 'Badge',
    variant: 'success',
  },
};

export const Outline: Story = {
  args: {
    children: 'Badge',
    variant: 'outline',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge>Novo</Badge>
      <Badge variant="secondary">Em Análise</Badge>
      <Badge variant="destructive">Urgente</Badge>
      <Badge variant="success">Aprovado</Badge>
      <Badge variant="outline">Rascunho</Badge>
    </div>
  ),
};

export const WithNumbers: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge>1</Badge>
      <Badge variant="secondary">42</Badge>
      <Badge variant="destructive">99+</Badge>
      <Badge variant="success">100</Badge>
      <Badge variant="outline">0</Badge>
    </div>
  ),
};

