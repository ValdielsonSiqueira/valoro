import { Button } from './components/button'


function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎨 Valoro UI - Teste de Componentes
          </h1>
          <p className="text-lg text-gray-600">
            Teste interativo dos componentes do pacote UI
          </p>
        </div>

        {/* Button Variants Section */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Variantes do Botão
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Default
              </h3>
              <Button>Botão Padrão</Button>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Destructive
              </h3>
              <Button variant="destructive">Botão Destrutivo</Button>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Outline
              </h3>
              <Button variant="outline">Botão Outline</Button>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Secondary
              </h3>
              <Button variant="secondary">Botão Secundário</Button>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Ghost
              </h3>
              <Button variant="ghost">Botão Ghost</Button>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Link
              </h3>
              <Button variant="link">Botão Link</Button>
            </div>
          </div>
        </div>

        {/* Button Sizes Section */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Tamanhos do Botão
          </h2>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Small</p>
              <Button size="sm">Small</Button>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Default</p>
              <Button size="default">Default</Button>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Large</p>
              <Button size="lg">Large</Button>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Icon</p>
              <Button size="icon">🔍</Button>
            </div>
          </div>
        </div>

        {/* Button States Section */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Estados do Botão
          </h2>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Normal</p>
              <Button>Normal</Button>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Desabilitado</p>
              <Button disabled>Desabilitado</Button>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Loading</p>
              <Button disabled>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Carregando...
              </Button>
            </div>
          </div>
        </div>

        {/* Interactive Examples Section */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Exemplos Interativos
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Formulário de Exemplo
              </h3>
              <div className="max-w-md space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Digite seu email"
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit">Enviar</Button>
                  <Button variant="outline" type="button">Cancelar</Button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Ações de Confirmação
              </h3>
              <div className="flex gap-2">
                <Button variant="destructive" size="sm">
                  Excluir Item
                </Button>
                <Button variant="outline" size="sm">
                  Editar
                </Button>
                <Button variant="secondary" size="sm">
                  Visualizar
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Package Info Section */}
        <div className="bg-gray-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">
            📦 Informações do Pacote
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Detalhes</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Nome:</strong> @valoro/ui</li>
                <li><strong>Versão:</strong> 0.0.0</li>
                <li><strong>Tipo:</strong> Biblioteca de Componentes</li>
                <li><strong>Framework:</strong> React + TypeScript</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Componentes</h3>
              <ul className="space-y-2 text-sm">
                <li>• Button (6 variantes, 4 tamanhos)</li>
                <li>• Suporte a asChild (Radix UI)</li>
                <li>• Class Variance Authority</li>
                <li>• Tailwind CSS + Animate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
