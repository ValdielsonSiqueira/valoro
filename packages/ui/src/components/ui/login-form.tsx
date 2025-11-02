import * as React from "react"
import { cn } from "../../lib/utils"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Spinner } from "./spinner"

export interface LoginFormProps extends React.ComponentPropsWithoutRef<"form"> {
  title?: string
  subtitle?: string
  nameLabel?: string
  namePlaceholder?: string
  emailLabel?: string
  emailPlaceholder?: string
  submitButtonText?: string
  isLoading?: boolean
  errors?: {
    name?: string
    email?: string
  }
}

export function LoginForm({
  className,
  title = "Login to your account",
  subtitle = "Enter your information to login to your account",
  nameLabel = "Name",
  namePlaceholder = "Enter your name",
  emailLabel = "Email",
  emailPlaceholder = "m@example.com",
  submitButtonText = "Login",
  isLoading = false,
  errors,
  ...props
}: LoginFormProps) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        {subtitle && (
          <p className="text-balance text-sm text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">{nameLabel}</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={namePlaceholder}
            disabled={isLoading}
            aria-invalid={!!errors?.name}
            aria-describedby={errors?.name ? "name-error" : undefined}
            className={errors?.name ? "border-destructive" : ""}
          />
          {errors?.name && (
            <span id="name-error" className="text-sm text-destructive">
              {errors.name}
            </span>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">{emailLabel}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={emailPlaceholder}
            disabled={isLoading}
            aria-invalid={!!errors?.email}
            aria-describedby={errors?.email ? "email-error" : undefined}
            className={errors?.email ? "border-destructive" : ""}
          />
          {errors?.email && (
            <span id="email-error" className="text-sm text-destructive">
              {errors.email}
            </span>
          )}
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Spinner className="mr-2" />
              {submitButtonText}
            </>
          ) : (
            submitButtonText
          )}
        </Button>
      </div>
    </form>
  )
}
