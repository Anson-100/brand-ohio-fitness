import { useEffect, useState } from "react"

type WaiverItem = {
  key: string
  lastModified: string
  size: number
}

const API_URL =
  "https://t9psvrhzie.execute-api.us-east-2.amazonaws.com/waiver_initial_deploy/IT_liabilityWaivers"

export default function useWaivers() {
  const [waivers, setWaivers] = useState<WaiverItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWaivers = async () => {
      try {
        const res = await fetch(API_URL)
        if (!res.ok) throw new Error("Failed to fetch waivers")
        const data = await res.json()
        setWaivers(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchWaivers()
  }, [])

  return { waivers, loading, error }
}
