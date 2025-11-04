import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverTrigger, PopoverContent, Button } from '@valoro/ui';
import { useState } from 'react';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button>Abrir Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h4 style={{ fontWeight: 'bold', margin: 0 }}>Título do Popover</h4>
            <p style={{ margin: 0, fontSize: '14px' }}>
              Este é o conteúdo do popover. Você pode adicionar qualquer conteúdo aqui.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button>Abrir Formulário</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '250px' }}>
            <h4 style={{ fontWeight: 'bold', margin: 0 }}>Configurações</h4>
            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                Nome
              </label>
              <input
                type="text"
                placeholder="Digite seu nome"
                style={{
                  width: '100%',
                  padding: '6px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '14px',
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
              <Button size="sm" variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button size="sm" onClick={() => setOpen(false)}>
                Salvar
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};

export const Simple: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline">Info</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p style={{ margin: 0, fontSize: '14px' }}>
            Esta é uma mensagem informativa simples.
          </p>
        </PopoverContent>
      </Popover>
    );
  },
};

