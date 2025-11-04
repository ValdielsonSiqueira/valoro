import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@valoro/ui';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Spinner />,
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Spinner style={{ width: '16px', height: '16px' }} />
      <Spinner style={{ width: '24px', height: '24px' }} />
      <Spinner style={{ width: '32px', height: '32px' }} />
      <Spinner style={{ width: '48px', height: '48px' }} />
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        <Spinner style={{ width: '16px', height: '16px' }} />
        Carregando...
      </button>
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          background: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        <Spinner style={{ width: '16px', height: '16px' }} />
        Processando
      </button>
    </div>
  ),
};

export const InText: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Spinner style={{ width: '16px', height: '16px' }} />
      <span>Carregando dados...</span>
    </div>
  ),
};

export const Center: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        height: '200px',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      <Spinner style={{ width: '32px', height: '32px' }} />
    </div>
  ),
};

