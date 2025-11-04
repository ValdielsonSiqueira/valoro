import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@valoro/ui';
import { useState } from 'react';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Estado marcado',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Estado marcado por padrão',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultChecked: false,
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Checkbox
          id="terms"
          checked={checked}
          onCheckedChange={(checked) => setChecked(checked === true)}
        />
        <label htmlFor="terms" style={{ cursor: 'pointer' }}>
          Aceito os termos e condições
        </label>
      </div>
    );
  },
};

export const MultipleCheckboxes: Story = {
  render: () => {
    const [items, setItems] = useState({
      item1: false,
      item2: true,
      item3: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Checkbox
            id="item1"
            checked={items.item1}
            onCheckedChange={(checked) =>
              setItems({ ...items, item1: checked === true })
            }
          />
          <label htmlFor="item1" style={{ cursor: 'pointer' }}>
            Item 1
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Checkbox
            id="item2"
            checked={items.item2}
            onCheckedChange={(checked) =>
              setItems({ ...items, item2: checked === true })
            }
          />
          <label htmlFor="item2" style={{ cursor: 'pointer' }}>
            Item 2
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Checkbox
            id="item3"
            checked={items.item3}
            onCheckedChange={(checked) =>
              setItems({ ...items, item3: checked === true })
            }
          />
          <label htmlFor="item3" style={{ cursor: 'pointer' }}>
            Item 3
          </label>
        </div>
      </div>
    );
  },
};

