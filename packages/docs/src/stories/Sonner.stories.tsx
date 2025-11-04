import type { Meta, StoryObj } from '@storybook/react';
import { Toaster, toast, Button } from '@valoro/ui';
import { ThemeProvider } from '@valoro/ui';

const meta = {
  title: 'Components/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light" storageKey="valoro-ui-theme">
        <Story />
        <Toaster />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Button
        onClick={() => toast('Notificação padrão', {
          description: 'Esta é uma notificação padrão.',
        })}
      >
        Mostrar Toast
      </Button>
      <Button
        onClick={() => toast.success('Sucesso!', {
          description: 'Operação realizada com sucesso.',
        })}
      >
        Toast de Sucesso
      </Button>
      <Button
        onClick={() => toast.error('Erro!', {
          description: 'Ocorreu um erro ao processar.',
        })}
      >
        Toast de Erro
      </Button>
      <Button
        onClick={() => toast.info('Informação', {
          description: 'Esta é uma mensagem informativa.',
        })}
      >
        Toast de Informação
      </Button>
      <Button
        onClick={() => toast.warning('Aviso!', {
          description: 'Esta é uma mensagem de aviso.',
        })}
      >
        Toast de Aviso
      </Button>
    </div>
  ),
};

export const LongDuration: Story = {
  render: () => (
    <Button
      onClick={() => toast('Toast de longa duração', {
        description: 'Este toast ficará visível por 10 segundos.',
        duration: 10000,
      })}
    >
      Toast Longo
    </Button>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() => toast('Toast com ação', {
        description: 'Este toast tem um botão de ação.',
        action: {
          label: 'Desfazer',
          onClick: () => console.log('Desfazer'),
        },
      })}
    >
      Toast com Ação
    </Button>
  ),
};

