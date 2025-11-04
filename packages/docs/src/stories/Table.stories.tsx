import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@valoro/ui';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table style={{ width: '500px' }}>
      <TableCaption>Lista de usuários</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>João Silva</TableCell>
          <TableCell>joao@exemplo.com</TableCell>
          <TableCell>Ativo</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Maria Santos</TableCell>
          <TableCell>maria@exemplo.com</TableCell>
          <TableCell>Ativo</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Pedro Costa</TableCell>
          <TableCell>pedro@exemplo.com</TableCell>
          <TableCell>Inativo</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Table style={{ width: '500px' }}>
      <TableHeader>
        <TableRow>
          <TableHead>Produto</TableHead>
          <TableHead>Quantidade</TableHead>
          <TableHead>Preço</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Produto A</TableCell>
          <TableCell>10</TableCell>
          <TableCell>R$ 100,00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Produto B</TableCell>
          <TableCell>5</TableCell>
          <TableCell>R$ 50,00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Produto C</TableCell>
          <TableCell>8</TableCell>
          <TableCell>R$ 80,00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell>R$ 230,00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const ManyRows: Story = {
  render: () => (
    <Table style={{ width: '500px' }}>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 10 }, (_, i) => (
          <TableRow key={i}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>Usuário {i + 1}</TableCell>
            <TableCell>usuario{i + 1}@exemplo.com</TableCell>
            <TableCell>{i % 2 === 0 ? 'Ativo' : 'Inativo'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Simple: Story = {
  render: () => (
    <Table style={{ width: '400px' }}>
      <TableHeader>
        <TableRow>
          <TableHead>Item</TableHead>
          <TableHead>Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Item 1</TableCell>
          <TableCell>R$ 100,00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Item 2</TableCell>
          <TableCell>R$ 200,00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Item 3</TableCell>
          <TableCell>R$ 300,00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

