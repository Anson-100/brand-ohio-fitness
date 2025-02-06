import { useRef, useState } from "react"
import SignatureCanvas from "react-signature-canvas"

interface SignaturePadProps {
  onSave: (signature: string | null) => void
}

const SignaturePad: React.FC<SignaturePadProps> = ({ onSave }) => {
  const sigCanvas = useRef<SignatureCanvas>(null!)
  const [isSigned, setIsSigned] = useState(false)

  const saveSignature = () => {
    if (sigCanvas.current && !sigCanvas.current.isEmpty()) {
      const signatureData = sigCanvas.current.toDataURL("image/png")
      setIsSigned(true)
      onSave(signatureData) // Pass the base64 signature to parent
    }
  }

  const clearSignature = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear()
      setIsSigned(false)
      onSave(null) // Reset signature in parent state
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-lg font-semibold">Sign Here</h3>
      <div className="border border-gray-600 rounded-md">
        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          canvasProps={{
            width: 400,
            height: 150,
            style: {
              backgroundColor: "#e5e7eb",
              borderRadius: ".35rem",
            },
          }}
        />
      </div>
      <div className="flex space-x-4 w-[400px] text-gray-100">
        <button
          type="button" // ✅ Prevents form submission
          onClick={saveSignature}
          className="bg-green-700  px-4 py-2 rounded-md hover:bg-green-600 flex-1"
        >
          Save
        </button>
        <button
          type="button" // ✅ Prevents form submission
          onClick={clearSignature}
          className=" px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-700 flex-1"
        >
          Clear
        </button>
      </div>
      {isSigned && <p className="text-sm text-green-600">Signature saved!</p>}
    </div>
  )
}

export default SignaturePad
