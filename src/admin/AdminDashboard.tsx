import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

// TODO: Make sure this path is correct for your project structure
import ITLogo from "@/assets/it logo (nr).png"

// --- Waiver Data Interface ---
interface Waiver {
  key: string
  lastModified: string
  size?: number
}

// --- Simplified Waivers Logic (directly in component) ---
// This hook is now completely independent of any auth state for its execution.
const useWaiversSimplified = () => {
  const [waivers, setWaivers] = useState<Waiver[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [fetchError, setFetchError] = useState<string | null>(null) // This is the error state for fetching

  useEffect(() => {
    const fetchWaivers = async () => {
      setLoading(true)
      setFetchError(null)

      // *** ENSURE THIS IS THE CORRECT AND FULL API ENDPOINT URL ***
      const listApiUrl =
        "https://t9psvrhzie.execute-api.us-east-2.amazonaws.com/waiver_initial_deploy/IT_liabilityWaivers"
      console.log(
        `Fetching waivers (MVP - NO AUTH IN FETCH) from: ${listApiUrl}`
      )

      try {
        const response = await fetch(listApiUrl, {
          method: "GET",
          headers: {
            // NO Authorization header.
            "Content-Type": "application/json",
          },
        })

        if (!response.ok) {
          let errorMsg = `Failed to fetch waivers. Status: ${response.status}`
          try {
            const errorData = await response.json()
            errorMsg =
              errorData.message || `Server responded with ${response.status}`
          } catch (parseError) {
            console.warn(
              "Could not parse error response body as JSON:",
              parseError
            )
          }
          if (response.status === 403) {
            errorMsg +=
              ". This is likely a CORS issue or the API Gateway endpoint is not configured to allow unauthenticated GET requests to this path."
          } else if (response.status === 404) {
            errorMsg += ". The API endpoint path might be incorrect."
          }
          throw new Error(errorMsg)
        }

        const data = await response.json()
        // Assuming your Lambda returns the array directly as per your Lambda code
        if (Array.isArray(data)) {
          setWaivers(data)
        } else {
          console.warn(
            "API response was not a direct array. Checking for 'data.waivers'. Actual data:",
            data
          )
          if (data && Array.isArray(data.waivers)) {
            setWaivers(data.waivers)
          } else {
            setFetchError(
              "Received invalid waiver data format from server. Expected an array."
            )
            setWaivers([])
          }
        }
      } catch (err) {
        if (err instanceof Error) {
          if (
            err.message.includes("Failed to fetch") ||
            err.message.includes("NetworkError")
          ) {
            setFetchError(
              "Network error or CORS issue. Check API Gateway CORS & browser console. Ensure the API URL is correct and reachable, and that the API Gateway endpoint is configured for unauthenticated access if no token is sent."
            )
          } else {
            setFetchError(err.message)
          }
        } else {
          setFetchError("An unknown error occurred while fetching waivers.")
        }
        console.error("Failed to fetch waivers (Simplified - No Auth):", err)
      } finally {
        setLoading(false)
      }
    }

    fetchWaivers() // Fetch immediately on component mount
  }, []) // Empty dependency array: runs ONCE on component mount.

  return { waivers, loading, fetchError, setWaivers } // Returns fetchError
}

// --- Admin Dashboard Component ---
const AdminDashboard = () => {
  const navigate = useNavigate()
  // Correctly destructure fetchError from useWaiversSimplified
  const { waivers, loading, fetchError, setWaivers } = useWaiversSimplified()

  const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false)
  const [waiverToDelete, setWaiverToDelete] = useState<Waiver | null>(null)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [deleteError, setDeleteError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>("")

  // Logout function still needs to clear the Cognito token
  const handleLogout = () => {
    localStorage.removeItem("cognito_id_token")
    navigate("/dev-login")
  }

  // Title-casing helper
  const capitalize = (s: string) =>
    s.length > 0 ? s[0].toUpperCase() + s.slice(1).toLowerCase() : s

  const parseFilename = (key: string) => {
    const nameWithoutExtension = key.replace(".pdf", "")
    const parts = nameWithoutExtension.split("_")
    if (parts.length < 3) {
      console.warn("Unexpected filename format:", key)
      return {
        fullName: "Unknown Name",
        type: "Unknown",
        id: "N/A",
        originalKey: key,
      }
    }
    const lastName = parts[0]
    const firstName = parts[1]
    let type, id
    if (parts.length === 4) {
      type = parts[2]
      id = parts[3]
    } else if (parts.length === 5 && parts[2].toUpperCase() === "CHILD") {
      type = `${parts[2]} ${parts[3]}`
      id = parts[4]
    } else {
      type = parts.slice(2, parts.length - 1).join("_")
      id = parts[parts.length - 1]
    }
    return {
      fullName: `${capitalize(firstName)} ${capitalize(lastName)}`,
      type,
      id,
      originalKey: key,
    }
  }

  const handleDeleteWaiver = async () => {
    if (!waiverToDelete) return
    setIsDeleting(true)
    setDeleteError(null)
    try {
      console.log(
        `Attempting to delete waiver (simulated): ${waiverToDelete.key}`
      )
      await new Promise(resolve => setTimeout(resolve, 500))
      console.log(`Simulated successful deletion of: ${waiverToDelete.key}`)
      setWaivers(prevWaivers =>
        prevWaivers.filter(w => w.key !== waiverToDelete.key)
      )
      setShowConfirmDialog(false)
      setWaiverToDelete(null)
    } catch (err: any) {
      setDeleteError(
        err.message || "An unknown error occurred during deletion."
      )
      console.error("Failed to delete waiver (simulated):", err)
    } finally {
      setIsDeleting(false)
    }
  }

  const openConfirmDialog = (waiver: Waiver) => {
    setWaiverToDelete(waiver)
    setDeleteError(null)
    setShowConfirmDialog(true)
  }

  const closeConfirmDialog = () => {
    setShowConfirmDialog(false)
    setWaiverToDelete(null)
  }

  const cloudFrontBaseUrl = "https://d101wpwppcj5ym.cloudfront.net"
  const cloudFrontObjectPrefix = ""

  const displayedWaivers = waivers.filter(w => {
    const { fullName } = parseFilename(w.key)
    return fullName.toLowerCase().includes(searchTerm.trim().toLowerCase())
  })

  // inside your component
  const handleDownload = async (waiver: { key: string }) => {
    const url = `${cloudFrontBaseUrl}${cloudFrontObjectPrefix}/${encodeURIComponent(
      waiver.key
    )}`

    // fetch the PDF as a blob
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Download failed: ${res.status}`)
    const blob = await res.blob()

    // create a temporary <a> to trigger download
    const blobUrl = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = blobUrl
    // set the filename you want
    link.download = waiver.key
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(blobUrl)
  }

  return (
    <section className="min-h-screen relative isolate overflow-hidden font-sans">
      <div className="shadow-sm sticky top-0 z-10">
        <div className="container mx-auto max-w-7xl flex items-center justify-between p-4">
          <img src={ITLogo} alt="IT Logo" className="h-10 md:h-12" />
          <button
            onClick={handleLogout}
            className="rounded-md bg-zinc-600 text-white px-4 py-2  font-semibold hover:bg-zinc-700 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Log Out
          </button>
        </div>
      </div>
      {/* Search by name */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mt-8 md:mt-12 isolate px-4 w-full max-w-7xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Manage Waivers</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name…"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full max-w-sm px-3 py-2 rounded-lg border border-gray-600 bg-zinc-900 text-gray-200 focus:ring-1 "
          />
        </div>{" "}
        <div className="overflow-hidden rounded-lg shadow-lg shadow-black bg-zinc-800">
          <div className=" bg-zinc-700">
            {loading && (
              <div className="flex justify-center items-center py-10">
                <svg
                  className="animate-spin h-8 w-8 text-emerald-theme"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>{" "}
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>{" "}
                </svg>
                <p className="ml-3 text-gray-600">Loading waivers...</p>
              </div>
            )}
            {fetchError && (
              <div
                className="p-4 text-center text-red-700 bg-red-100 rounded-md border border-red-200"
                role="alert"
              >
                <strong>Error:</strong> {fetchError}
              </div>
            )}
            {!loading && waivers.length === 0 && !fetchError && (
              <p className="p-6 text-center text-gray-200">No waivers found.</p>
            )}
          </div>

          {!loading && displayedWaivers.length > 0 && !fetchError && (
            <div className="overflow-x-auto">
              {" "}
              <table className="w-full text-left ">
                <thead className=" bg-zinc-700 h-16">
                  <tr className="text-gray-50 uppercase tracking-wider">
                    <th className="px-5 py-3 font-semibold">Name</th>
                    <th className="px-5 py-3 font-semibold">Type</th>
                    <th className="px-5 py-3 font-semibold">Date Submitted</th>
                    <th className="px-5 py-3 font-semibold text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-200 divide-y divide-zinc-700">
                  {displayedWaivers.map(waiver => {
                    const parsed = parseFilename(waiver.key)
                    const waiverUrl = `${cloudFrontBaseUrl}${cloudFrontObjectPrefix}/${encodeURIComponent(
                      parsed.originalKey
                    )}`
                    return (
                      <tr
                        key={parsed.originalKey}
                        className="hover:bg-zinc-900 transition-colors duration-150"
                      >
                        <td className="px-5 py-4 whitespace-nowrap">
                          {parsed.fullName}
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap">
                          {parsed.type}
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap flex items-center">
                          {new Date(waiver.lastModified).toLocaleDateString()}
                          <span className="text-gray-200 ml-1 text-xs">
                            (
                            {new Date(waiver.lastModified).toLocaleTimeString()}
                            )
                          </span>
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-center space-x-3">
                          <a
                            href={waiverUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-300  hover:underline font-medium transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-emerald-500 rounded"
                            title="View Waiver"
                          >
                            View
                          </a>
                          <button
                            onClick={() => handleDownload(waiver)}
                            className="text-gray-300  hover:underline font-medium transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-gray-500 rounded"
                            title="Download Waiver"
                          >
                            Download
                          </button>

                          <button
                            onClick={() => openConfirmDialog(waiver)}
                            className="text-red-400 hover:underline font-medium transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-red-500 rounded"
                            title="Delete Waiver"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </motion.div>

      {waivers.length > 10 && (
        <div className="mt-12 md:mt-16 flex justify-center pb-8">
          {" "}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:cursor-pointer px-6 py-3 bg-gray-700 text-gray-200 rounded-md shadow-sm hover:bg-gray-800 font-semibold transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            {" "}
            ↑ Back to Top{" "}
          </button>{" "}
        </div>
      )}

      {showConfirmDialog && waiverToDelete && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md"
          >
            <h3
              id="modal-title"
              className="text-lg font-semibold text-gray-900"
            >
              {" "}
              Confirm Deletion{" "}
            </h3>
            {deleteError && (
              <div
                className="mt-3 p-3 text-sm text-red-700 bg-red-100 rounded-md border border-red-200"
                role="alert"
              >
                {" "}
                <p>
                  <strong className="font-semibold">Error:</strong>{" "}
                  {deleteError}
                </p>{" "}
              </div>
            )}
            <div className="mt-3">
              {" "}
              <p className=" text-gray-600">
                {" "}
                Are you sure you want to delete the waiver for{" "}
                <strong className="font-medium text-gray-800">
                  {parseFilename(waiverToDelete.key).fullName}
                </strong>
                ? This action cannot be undone.{" "}
              </p>{" "}
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={closeConfirmDialog}
                disabled={isDeleting}
                className="px-4 py-2  font-medium text-gray-700 bg-gray-100 rounded-md border border-gray-300 shadow-sm hover:bg-gray-200 disabled:opacity-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {" "}
                Cancel{" "}
              </button>
              <button
                type="button"
                onClick={handleDeleteWaiver}
                disabled={isDeleting}
                className="px-4 py-2  font-medium text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-red-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center justify-center min-w-[90px]"
              >
                {isDeleting ? (
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>{" "}
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>{" "}
                  </svg>
                ) : null}
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default AdminDashboard
