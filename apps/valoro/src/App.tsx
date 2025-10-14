import { Button } from '@valoro/ui'

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Bem-vindo ao Valoro! 🚀
        </h1>
        
        <div className="text-center mb-8">
          <p className="text-lg text-muted-foreground mb-4">
            Esta é a aplicação principal do projeto Valoro, utilizando componentes do pacote UI.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <Button>Botão Padrão</Button>
            <Button variant="secondary">Secundário</Button>
            <Button variant="outline">Outline</Button>
          </div>
          
          <div className="flex gap-4">
            <Button variant="destructive">Destrutivo</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>

          <div className="flex gap-4">
            <Button size="sm">Pequeno</Button>
            <Button size="default">Padrão</Button>
            <Button size="lg">Grande</Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Monorepo configurado com Turbo Repo, pnpm, Vite e shadcn/ui
          </p>
        </div>
      </div>
    </main>
  )
}

export default App
