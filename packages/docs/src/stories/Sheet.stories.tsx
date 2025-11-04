import type { Meta, StoryObj } from '@storybook/react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  Button,
} from '@valoro/ui';
import { useState } from 'react';

const meta = {
  title: 'Components/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>Abrir Sheet (Direita)</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Título do Sheet</SheetTitle>
            <SheetDescription>
              Esta é a descrição do sheet. Você pode adicionar mais informações aqui.
            </SheetDescription>
          </SheetHeader>
          <div style={{ padding: '16px 0' }}>
            <p>Conteúdo do sheet aqui.</p>
          </div>
          <SheetFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={() => setOpen(false)}>Salvar</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const Left: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>Abrir Sheet (Esquerda)</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Título do Sheet</SheetTitle>
            <SheetDescription>
              Sheet aberto do lado esquerdo.
            </SheetDescription>
          </SheetHeader>
          <div style={{ padding: '16px 0' }}>
            <p>Conteúdo do sheet aqui.</p>
          </div>
        </SheetContent>
      </Sheet>
    );
  },
};

export const Top: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>Abrir Sheet (Topo)</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Título do Sheet</SheetTitle>
            <SheetDescription>
              Sheet aberto no topo.
            </SheetDescription>
          </SheetHeader>
          <div style={{ padding: '16px 0' }}>
            <p>Conteúdo do sheet aqui.</p>
          </div>
        </SheetContent>
      </Sheet>
    );
  },
};

export const Bottom: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>Abrir Sheet (Baixo)</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Título do Sheet</SheetTitle>
            <SheetDescription>
              Sheet aberto na parte inferior.
            </SheetDescription>
          </SheetHeader>
          <div style={{ padding: '16px 0' }}>
            <p>Conteúdo do sheet aqui.</p>
          </div>
        </SheetContent>
      </Sheet>
    );
  },
};

