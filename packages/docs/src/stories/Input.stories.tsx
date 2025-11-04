import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@valoro/ui';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Tipo do input',
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
    },
    value: {
      control: 'text',
      description: 'Valor do input',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Digite algo...',
    type: 'text',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'email@exemplo.com',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Digite sua senha',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Valor preenchido',
    type: 'text',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Campo desabilitado',
    disabled: true,
  },
};

export const DifferentTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
      <Input type="text" placeholder="Texto" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Senha" />
      <Input type="number" placeholder="Número" />
      <Input type="tel" placeholder="Telefone" />
      <Input type="url" placeholder="URL" />
      <Input type="search" placeholder="Buscar..." />
    </div>
  ),
};

