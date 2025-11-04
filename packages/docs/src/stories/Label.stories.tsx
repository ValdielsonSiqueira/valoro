import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@valoro/ui';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Texto do label',
    },
    htmlFor: {
      control: 'text',
      description: 'ID do elemento associado',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const WithInput: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '300px' }}>
      <Label htmlFor="email">Email</Label>
      <input
        id="email"
        type="email"
        placeholder="email@exemplo.com"
        style={{
          padding: '8px 12px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <input type="checkbox" id="accept" />
      <Label htmlFor="accept">Aceito os termos e condições</Label>
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '300px' }}>
      <Label htmlFor="name">
        Nome <span style={{ color: 'red' }}>*</span>
      </Label>
      <input
        id="name"
        type="text"
        placeholder="Digite seu nome"
        style={{
          padding: '8px 12px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
    </div>
  ),
};

export const MultipleLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Label htmlFor="firstName">Primeiro Nome</Label>
        <input
          id="firstName"
          type="text"
          style={{
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Label htmlFor="lastName">Sobrenome</Label>
        <input
          id="lastName"
          type="text"
          style={{
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Label htmlFor="email">Email</Label>
        <input
          id="email"
          type="email"
          style={{
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </div>
    </div>
  ),
};

