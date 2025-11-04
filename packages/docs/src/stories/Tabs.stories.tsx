import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@valoro/ui';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Valor padrão da aba ativa',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" style={{ width: '400px' }}>
      <TabsList>
        <TabsTrigger value="account">Conta</TabsTrigger>
        <TabsTrigger value="password">Senha</TabsTrigger>
      </TabsList>
      <TabsContent value="account" style={{ marginTop: '16px' }}>
        <p>Conteúdo da aba de conta.</p>
      </TabsContent>
      <TabsContent value="password" style={{ marginTop: '16px' }}>
        <p>Conteúdo da aba de senha.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const ThreeTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" style={{ width: '400px' }}>
      <TabsList>
        <TabsTrigger value="overview">Visão Geral</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Relatórios</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" style={{ marginTop: '16px' }}>
        <p>Conteúdo da visão geral.</p>
      </TabsContent>
      <TabsContent value="analytics" style={{ marginTop: '16px' }}>
        <p>Conteúdo de analytics.</p>
      </TabsContent>
      <TabsContent value="reports" style={{ marginTop: '16px' }}>
        <p>Conteúdo de relatórios.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Tabs defaultValue="tab1" style={{ width: '500px' }}>
      <TabsList>
        <TabsTrigger value="tab1">Aba 1</TabsTrigger>
        <TabsTrigger value="tab2">Aba 2</TabsTrigger>
        <TabsTrigger value="tab3">Aba 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" style={{ marginTop: '16px', padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '8px' }}>Conteúdo da Aba 1</h3>
        <p>Este é o conteúdo da primeira aba.</p>
      </TabsContent>
      <TabsContent value="tab2" style={{ marginTop: '16px', padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '8px' }}>Conteúdo da Aba 2</h3>
        <p>Este é o conteúdo da segunda aba.</p>
      </TabsContent>
      <TabsContent value="tab3" style={{ marginTop: '16px', padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '8px' }}>Conteúdo da Aba 3</h3>
        <p>Este é o conteúdo da terceira aba.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const ManyTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab1" style={{ width: '400px' }}>
      <TabsList>
        <TabsTrigger value="tab1">Aba 1</TabsTrigger>
        <TabsTrigger value="tab2">Aba 2</TabsTrigger>
        <TabsTrigger value="tab3">Aba 3</TabsTrigger>
        <TabsTrigger value="tab4">Aba 4</TabsTrigger>
        <TabsTrigger value="tab5">Aba 5</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" style={{ marginTop: '16px' }}>
        Conteúdo da aba 1
      </TabsContent>
      <TabsContent value="tab2" style={{ marginTop: '16px' }}>
        Conteúdo da aba 2
      </TabsContent>
      <TabsContent value="tab3" style={{ marginTop: '16px' }}>
        Conteúdo da aba 3
      </TabsContent>
      <TabsContent value="tab4" style={{ marginTop: '16px' }}>
        Conteúdo da aba 4
      </TabsContent>
      <TabsContent value="tab5" style={{ marginTop: '16px' }}>
        Conteúdo da aba 5
      </TabsContent>
    </Tabs>
  ),
};

