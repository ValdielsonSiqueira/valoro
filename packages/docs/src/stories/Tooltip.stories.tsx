import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipTrigger, TooltipContent, Button } from '@valoro/ui';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Esta é uma tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithText: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Info</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Informação útil sobre este botão</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="destructive">Delete</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Deletar item permanentemente</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const DifferentPositions: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        width: '400px',
      }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" style={{ gridColumn: '2' }}>
            Top
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip no topo</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" style={{ gridRow: '2', gridColumn: '1' }}>
            Left
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip à esquerda</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" style={{ gridRow: '2', gridColumn: '3' }}>
            Right
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip à direita</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" style={{ gridRow: '3', gridColumn: '2' }}>
            Bottom
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip embaixo</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const LongText: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover para ver tooltip longa</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Esta é uma tooltip com texto mais longo para demonstrar como o componente se comporta com conteúdo extenso.</p>
      </TooltipContent>
    </Tooltip>
  ),
};

