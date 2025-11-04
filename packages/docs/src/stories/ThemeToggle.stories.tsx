import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle, ThemeProvider } from '@valoro/ui';

const meta = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light" storageKey="valoro-ui-theme">
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ThemeToggle />,
};

export const InHeader: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: '400px',
      }}
    >
      <h3 style={{ margin: 0 }}>Meu App</h3>
      <ThemeToggle />
    </div>
  ),
};

