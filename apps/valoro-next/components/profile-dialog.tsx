"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
  Button,
} from "@valoro/ui"
import { getUserProfile, saveUserProfile, UserProfile } from "@/lib/user-service"

type ProfileFormData = {
  name: string
  email: string
  avatar: string
}

interface ProfileDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onProfileUpdate?: (user: UserProfile) => void
}

export function ProfileDialog({
  open,
  onOpenChange,
  onProfileUpdate,
}: ProfileDialogProps) {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [avatar, setAvatar] = useState<string>("")
  const [errors, setErrors] = useState<Partial<Record<keyof ProfileFormData, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof ProfileFormData, boolean>>>({})

  useEffect(() => {
    if (open) {
      const user = getUserProfile()
      setName(user.name)
      setEmail(user.email)
      setAvatar(user.avatar)
      setErrors({})
      setTouched({})
    }
  }, [open])

  const validateForm = (): boolean => {
    const fieldErrors: Partial<Record<keyof ProfileFormData, string>> = {}

    if (!name || name.trim() === "") {
      fieldErrors.name = "O nome é obrigatório"
    }

    if (!email || email.trim() === "") {
      fieldErrors.email = "O email é obrigatório"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      fieldErrors.email = "Email inválido"
    }

    if (avatar && avatar.trim() !== "") {
      try {
        new URL(avatar.trim())
      } catch {
        fieldErrors.avatar = "URL do avatar inválida"
      }
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      setTouched({
        name: true,
        email: true,
        avatar: true,
      })
      return false
    }

    setErrors({})
    return true
  }

  const handleSubmit = () => {
    if (!validateForm()) {
      return
    }

    const updatedUser: UserProfile = {
      name: name.trim(),
      email: email.trim(),
      avatar: avatar.trim() || "https://github.com/shadcn.png",
    }

    saveUserProfile(updatedUser)
    
    if (onProfileUpdate) {
      onProfileUpdate(updatedUser)
    }

    onOpenChange(false)
  }

  const handleCancel = () => {
    onOpenChange(false)
    const user = getUserProfile()
    setName(user.name)
    setEmail(user.email)
    setAvatar(user.avatar)
    setErrors({})
    setTouched({})
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Perfil</DialogTitle>
          <DialogDescription>
            Atualize suas informações de perfil. As alterações serão salvas automaticamente.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <Label htmlFor="name">Nome do Usuário</Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  if (touched.name && errors.name) {
                    setErrors((prev) => ({ ...prev, name: undefined }))
                  }
                }}
                onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {(touched.name || errors.name) && errors.name && (
                <span id="name-error" className="text-sm text-destructive">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (touched.email && errors.email) {
                    setErrors((prev) => ({ ...prev, email: undefined }))
                  }
                }}
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {(touched.email || errors.email) && errors.email && (
                <span id="email-error" className="text-sm text-destructive">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <Label htmlFor="avatar">URL do Avatar</Label>
              <Input
                id="avatar"
                type="url"
                placeholder="https://exemplo.com/avatar.jpg"
                value={avatar}
                onChange={(e) => {
                  setAvatar(e.target.value)
                  if (touched.avatar && errors.avatar) {
                    setErrors((prev) => ({ ...prev, avatar: undefined }))
                  }
                }}
                onBlur={() => setTouched((prev) => ({ ...prev, avatar: true }))}
                aria-invalid={errors.avatar ? true : undefined}
                aria-describedby={errors.avatar ? "avatar-error" : undefined}
              />
              {(touched.avatar || errors.avatar) && errors.avatar && (
                <span id="avatar-error" className="text-sm text-destructive">
                  {errors.avatar}
                </span>
              )}
              <p className="text-sm text-muted-foreground">
                Deixe vazio para usar a imagem padrão
              </p>
            </div>
          </form>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit}>
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

