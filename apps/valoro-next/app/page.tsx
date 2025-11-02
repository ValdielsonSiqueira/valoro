"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { LoginForm } from "@valoro/ui"
import { saveUserProfile } from "@/lib/user-service"

type LoginFormData = {
  name: string
  email: string
}

export default function LoginPage() {
  const router = useRouter()
  const [errors, setErrors] = useState<Partial<Record<keyof LoginFormData, string>>>({})

  const validateForm = (name: string, email: string): boolean => {
    const fieldErrors: Partial<Record<keyof LoginFormData, string>> = {}

    if (!name || name.trim() === "") {
      fieldErrors.name = "O nome é obrigatório"
    }

    if (!email || email.trim() === "") {
      fieldErrors.email = "O email é obrigatório"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      fieldErrors.email = "Email inválido"
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return false
    }

    setErrors({})
    return true
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string

    if (!validateForm(name, email)) {
      return
    }

    const userProfile = {
      name: name.trim(),
      email: email.trim(),
      avatar: "https://github.com/shadcn.png",
    }

    saveUserProfile(userProfile)
    
    router.push("/dashboard")
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center md:justify-start">
          <Link href="/" className="flex items-center font-medium">
              <Image src="/logo-light.svg" alt="Logo" width={50} height={50} />
              <span className="text-xl font-bold">Valoro</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm
              title="Bem-vindo"
              subtitle="Entre com suas informações para acessar sua conta"
              nameLabel="Nome"
              namePlaceholder="Digite seu nome"
              emailLabel="E-mail"
              emailPlaceholder="seu@email.com"
              submitButtonText="Entrar"
              errors={errors}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:!block overflow-hidden min-h-full">
        <Image
          src="/placeholder.svg"
          alt="Imagem de login"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 0vw, 50vw"
        />
      </div>
    </div>
  )
}
