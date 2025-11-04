import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
  CardEmpty,
  Button,
} from '@valoro/ui';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card style={{ width: '350px' }}>
      <CardHeader>
        <CardTitle>Título do Card</CardTitle>
        <CardDescription>Descrição do card</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Conteúdo do card aqui.</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card style={{ width: '350px' }}>
      <CardHeader>
        <CardTitle>Título do Card</CardTitle>
        <CardDescription>Descrição do card</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Conteúdo do card aqui.</p>
      </CardContent>
      <CardFooter>
        <Button>Confirmar</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card style={{ width: '350px' }}>
      <CardHeader>
        <CardTitle>Título do Card</CardTitle>
        <CardDescription>Descrição do card</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm">
            ×
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Conteúdo do card aqui.</p>
      </CardContent>
    </Card>
  ),
};

export const Empty: Story = {
  render: () => (
    <Card style={{ width: '350px' }}>
      <CardEmpty
        title="Nenhum item encontrado"
        description="Não há itens para exibir neste momento."
      />
    </Card>
  ),
};

export const EmptyWithAction: Story = {
  render: () => (
    <Card style={{ width: '350px' }}>
      <CardEmpty
        title="Nenhum item encontrado"
        description="Adicione um novo item para começar."
        action={<Button>Adicionar Item</Button>}
      />
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card style={{ width: '350px' }}>
      <CardContent style={{ padding: '24px' }}>
        <p>Card simples sem header ou footer.</p>
      </CardContent>
    </Card>
  ),
};

