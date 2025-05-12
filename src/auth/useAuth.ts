import { useMemo } from "react"

export default function useAuth() {
  const token = localStorage.getItem("cognito_id_token")

  const isAuthenticated = useMemo(() => {
    if (!token) return false

    try {
      const [, payload] = token.split(".")
      const decoded = JSON.parse(atob(payload))
      const now = Math.floor(Date.now() / 1000)
      return decoded.exp > now
    } catch {
      return false
    }
  }, [token])

  const logout = () => {
    localStorage.removeItem("cognito_id_token")
    window.location.href = "/dev-login"
  }

  return { isAuthenticated, logout }
}
