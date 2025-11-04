import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@valoro/ui';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientação do separador',
    },
    decorative: {
      control: 'boolean',
      description: 'Se o separador é apenas decorativo',
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <div>Conteúdo acima</div>
      <Separator />
      <div>Conteúdo abaixo</div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '100px' }}>
      <div>Esquerda</div>
      <Separator orientation="vertical" />
      <div>Direita</div>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div
      style={{
        width: '300px',
        padding: '16px',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      <div style={{ marginBottom: '8px' }}>Título</div>
      <Separator style={{ margin: '8px 0' }} />
      <div style={{ marginTop: '8px' }}>Conteúdo</div>
    </div>
  ),
};

export const MultipleSeparators: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <div>Seção 1</div>
      <Separator />
      <div>Seção 2</div>
      <Separator />
      <div>Seção 3</div>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div style={{ width: '400px', display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Separator style={{ flex: 1 }} />
      <span style={{ color: '#666' }}>ou</span>
      <Separator style={{ flex: 1 }} />
    </div>
  ),
};

