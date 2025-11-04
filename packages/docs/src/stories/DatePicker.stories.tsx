import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@valoro/ui';
import { useState } from 'react';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label do date picker',
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder',
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return (
      <DatePicker
        value={date}
        onValueChange={setDate}
        placeholder="Selecione uma data"
      />
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '300px' }}>
        <DatePicker
          value={date}
          onValueChange={setDate}
          label="Data de Nascimento"
          placeholder="Selecione uma data"
        />
      </div>
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <DatePicker
        value={date}
        onValueChange={setDate}
        placeholder="Selecione uma data"
      />
    );
  },
};

