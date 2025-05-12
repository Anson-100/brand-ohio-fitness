import { Navigate } from "react-router-dom"
import useAuth from "@/auth/useAuth"

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) return <Navigate to="/dev-login" replace />
  return children
}

export default ProtectedRoute
