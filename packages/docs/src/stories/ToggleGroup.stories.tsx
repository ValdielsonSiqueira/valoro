import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup, ToggleGroupItem } from '@valoro/ui';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { useState } from 'react';

const meta = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Tipo do grupo de toggles',
    },
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: () => {
    const [value, setValue] = useState('left');
    return (
      <ToggleGroup type="single" value={value} onValueChange={setValue}>
        <ToggleGroupItem value="left" aria-label="Alinhar à esquerda">
          <AlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Centralizar">
          <AlignCenter />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Alinhar à direita">
          <AlignRight />
        </ToggleGroupItem>
      </ToggleGroup>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <ToggleGroup type="multiple" value={value} onValueChange={setValue}>
        <ToggleGroupItem value="bold" aria-label="Negrito">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Itálico">
          <Italic />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Sublinhado">
          <Underline />
        </ToggleGroupItem>
      </ToggleGroup>
    );
  },
};

export const WithText: Story = {
  render: () => {
    const [value, setValue] = useState('left');
    return (
      <ToggleGroup type="single" value={value} onValueChange={setValue}>
        <ToggleGroupItem value="left">Esquerda</ToggleGroupItem>
        <ToggleGroupItem value="center">Centro</ToggleGroupItem>
        <ToggleGroupItem value="right">Direita</ToggleGroupItem>
      </ToggleGroup>
    );
  },
};

export const Outline: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <ToggleGroup type="multiple" variant="outline" value={value} onValueChange={setValue}>
        <ToggleGroupItem value="bold" aria-label="Negrito">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Itálico">
          <Italic />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Sublinhado">
          <Underline />
        </ToggleGroupItem>
      </ToggleGroup>
    );
  },
};

