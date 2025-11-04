import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@valoro/ui';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Skeleton style={{ width: '200px', height: '20px' }} />,
};

export const Text: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '300px' }}>
      <Skeleton style={{ width: '100%', height: '20px' }} />
      <Skeleton style={{ width: '80%', height: '20px' }} />
      <Skeleton style={{ width: '90%', height: '20px' }} />
    </div>
  ),
};

export const Avatar: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Skeleton style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Skeleton style={{ width: '150px', height: '16px' }} />
        <Skeleton style={{ width: '100px', height: '14px' }} />
      </div>
    </div>
  ),
};

export const Card: Story = {
  render: () => (
    <div
      style={{
        width: '300px',
        padding: '16px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <Skeleton style={{ width: '100%', height: '20px' }} />
      <Skeleton style={{ width: '80%', height: '16px' }} />
      <Skeleton style={{ width: '100%', height: '100px' }} />
      <div style={{ display: 'flex', gap: '8px' }}>
        <Skeleton style={{ width: '80px', height: '32px', borderRadius: '4px' }} />
        <Skeleton style={{ width: '80px', height: '32px', borderRadius: '4px' }} />
      </div>
    </div>
  ),
};

export const Image: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '300px' }}>
      <Skeleton style={{ width: '100%', height: '200px', borderRadius: '8px' }} />
      <Skeleton style={{ width: '100%', height: '20px' }} />
      <Skeleton style={{ width: '60%', height: '16px' }} />
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
      <Skeleton style={{ width: '100%', height: '12px' }} />
      <Skeleton style={{ width: '100%', height: '16px' }} />
      <Skeleton style={{ width: '100%', height: '20px' }} />
      <Skeleton style={{ width: '100%', height: '24px' }} />
      <Skeleton style={{ width: '100%', height: '32px' }} />
    </div>
  ),
};

