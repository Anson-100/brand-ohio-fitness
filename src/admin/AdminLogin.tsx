import { useState } from "react"
import ITLogo from "@/assets/it logo (nr).png"
import { userPool } from "@/auth/userPool" // make sure this file exists
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js"

const AdminLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    })

    const user = new CognitoUser({
      Username: email,
      Pool: userPool,
    })

    user.authenticateUser(authDetails, {
      onSuccess: session => {
        console.log("Login success!", session)
        const idToken = session.getIdToken().getJwtToken()
        localStorage.setItem("cognito_id_token", idToken)
        window.location.href = "/admin"
      },

      onFailure: err => {
        console.error("Login error", err)
        setError(err.message || "Login failed")
        setLoading(false)
      },

      newPasswordRequired: userAttributes => {
        console.log("New password required", userAttributes)

        // 👇 set the new password — for demo, we just reuse what they typed
        user.completeNewPasswordChallenge(
          password,
          {},
          {
            onSuccess: session => {
              console.log("Password changed & login success!", session)
              const idToken = session.getIdToken().getJwtToken()
              localStorage.setItem("cognito_id_token", idToken)
              window.location.href = "/admin"
            },
            onFailure: err => {
              console.error("Password change failed", err)
              setError(err.message || "Password change failed")
              setLoading(false)
            },
          }
        )
      },
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center flex-col px-4 relative isolate">
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-zinc-950 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-zinc-950">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>{" "}
      <div className="shadow-xl relative shadow-zinc-950 rounded-lg px-8 pt-6 pb-8 w-full max-w-md bg-zinc-900 backdrop-blur-sm">
        <div className="w-full rounded-t-lg h-2 bg-emerald-theme absolute top-0 left-0"></div>

        <div className="flex flex-col gap-4 items-center justify-center pt-4">
          <img src={ITLogo} alt="IT Logo" className="h-12" />{" "}
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        </div>
        {/* ACTUAL FORM============ */}
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-600 mb-4">{error}</p>}

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
              className="w-full px-3 py-2 rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-zinc-700"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
              className="w-full px-3 py-2 rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-zinc-700"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full justify-center rounded-md bg-emerald-theme px-3 py-1.5  font-semibold text-white shadow-xs hover:bg-sky-550 focus-visible:outline-2 hover:bg-emerald-700 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 hover:cursor-pointer"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
