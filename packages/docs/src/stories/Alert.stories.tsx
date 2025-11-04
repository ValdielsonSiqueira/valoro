import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '@valoro/ui';
import { AlertCircle, Info as InfoIcon, CheckCircle2, XCircle } from 'lucide-react';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
      description: 'Variante visual do alerta',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert style={{ width: '400px' }}>
      <AlertCircle />
      <AlertTitle>Alerta</AlertTitle>
      <AlertDescription>
        Esta é uma mensagem de alerta padrão.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" style={{ width: '400px' }}>
      <XCircle />
      <AlertTitle>Erro</AlertTitle>
      <AlertDescription>
        Ocorreu um erro ao processar sua solicitação.
      </AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  render: () => (
    <Alert style={{ width: '400px' }}>
      <InfoIcon />
      <AlertTitle>Informação</AlertTitle>
      <AlertDescription>
        Esta é uma mensagem informativa importante.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert style={{ width: '400px' }}>
      <CheckCircle2 />
      <AlertTitle>Sucesso</AlertTitle>
      <AlertDescription>
        Operação realizada com sucesso!
      </AlertDescription>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <Alert style={{ width: '400px' }}>
      <AlertTitle>Alerta sem ícone</AlertTitle>
      <AlertDescription>
        Esta é uma mensagem de alerta sem ícone.
      </AlertDescription>
    </Alert>
  ),
};

export const Simple: Story = {
  render: () => (
    <Alert style={{ width: '400px' }}>
      <AlertDescription>
        Esta é uma mensagem simples de alerta.
      </AlertDescription>
    </Alert>
  ),
};

