import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@valoro/ui';
import { Bold, Italic, Underline } from 'lucide-react';
import React, { useState } from 'react';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'Variante visual do toggle',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'Tamanho do toggle',
    },
    pressed: {
      control: 'boolean',
      description: 'Estado pressionado',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <Toggle pressed={pressed} onPressedChange={setPressed}>
        Toggle
      </Toggle>
    );
  },
};

export const WithIcon: Story = {
  render: () => {
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);

    return (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Toggle pressed={bold} onPressedChange={setBold} aria-label="Bold">
          <Bold />
        </Toggle>
        <Toggle pressed={italic} onPressedChange={setItalic} aria-label="Italic">
          <Italic />
        </Toggle>
        <Toggle pressed={underline} onPressedChange={setUnderline} aria-label="Underline">
          <Underline />
        </Toggle>
      </div>
    );
  },
};

export const Outline: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <Toggle variant="outline" pressed={pressed} onPressedChange={setPressed}>
        Outline Toggle
      </Toggle>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [pressed1, setPressed1] = useState(false);
    const [pressed2, setPressed2] = useState(false);
    const [pressed3, setPressed3] = useState(false);

    return (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Toggle size="sm" pressed={pressed1} onPressedChange={setPressed1}>
          Small
        </Toggle>
        <Toggle size="default" pressed={pressed2} onPressedChange={setPressed2}>
          Default
        </Toggle>
        <Toggle size="lg" pressed={pressed3} onPressedChange={setPressed3}>
          Large
        </Toggle>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Toggle disabled>Desabilitado</Toggle>
      <Toggle disabled pressed>
        Desabilitado (Pressionado)
      </Toggle>
    </div>
  ),
};

