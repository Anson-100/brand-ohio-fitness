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
      <div className="border-2 border-gray-300 rounded-md">
        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          canvasProps={{
            width: 400,
            height: 150,
            style: { border: "2px solid black", backgroundColor: "white" },
          }}
          onEnd={saveSignature} // Auto-save when user stops drawing
        />
      </div>
      <div className="flex space-x-4">
        <button
          onClick={saveSignature}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Save
        </button>
        <button
          onClick={clearSignature}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Clear
        </button>
      </div>
      {isSigned && <p className="text-sm text-green-600">Signature saved!</p>}
    </div>
  )
}

export default SignaturePad
