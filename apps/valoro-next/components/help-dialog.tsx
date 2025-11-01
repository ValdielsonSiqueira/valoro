"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Button,
} from "@valoro/ui"
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"

interface HelpDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function HelpDialog({ open, onOpenChange }: HelpDialogProps) {
  const avatarUrl = "https://avatars.githubusercontent.com/u/35588487?v=4"
  const githubUrl = "https://github.com/ValdielsonSiqueira"
  const linkedinUrl = "https://www.linkedin.com/in/valdielson-siqueira-260a34153/"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ajuda</DialogTitle>
          <DialogDescription>
            Informações sobre o desenvolvedor e suporte
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-6 py-4">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage 
                src={avatarUrl} 
                alt="Valdielson Siqueira"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "https://github.com/shadcn.png"
                }}
              />
              <AvatarFallback>VS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center gap-1">
              <h3 className="text-lg font-semibold">Valdielson Siqueira</h3>
              <p className="text-sm text-muted-foreground text-center">
                Desenvolvedor
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-medium">Redes Sociais</h4>
              <div className="flex flex-col gap-3">
                <Button
                  variant="outline"
                  asChild
                  className="w-full justify-start gap-2"
                >
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <IconBrandGithub className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="w-full justify-start gap-2"
                >
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <IconBrandLinkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm text-muted-foreground text-center">
                Para mais informações, entre em contato através das redes sociais acima.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

