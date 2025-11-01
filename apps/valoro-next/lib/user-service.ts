const USER_STORAGE_KEY = "valoro_user"

export interface UserProfile {
  name: string
  email: string
  avatar: string
}

const defaultUser: UserProfile = {
  name: "Valdielson",
  email: "valdielson@example.com",
  avatar: "https://github.com/shadcn.png",
}

export function getUserProfile(): UserProfile {
  if (typeof window === "undefined") {
    return defaultUser
  }

  try {
    const stored = localStorage.getItem(USER_STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.error("Erro ao recuperar perfil do usuário:", error)
  }

  return defaultUser
}

export function saveUserProfile(user: UserProfile): void {
  if (typeof window === "undefined") {
    return
  }

  try {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
  } catch (error) {
    console.error("Erro ao salvar perfil do usuário:", error)
  }
}

