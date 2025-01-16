import React, { useState } from "react"

const MartialArts: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    isGuardian: false,
    childName: "",
    childDateOfBirth: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    agreeToTerms: false,
    medicalConsentInitials: "", // For the Medical Consent section
    physicalContactInitials: "", // For the Physical Contact section
    riskAcknowledgmentInitials: "", // For the Risk Acknowledgment section
    arbitrationInitials: "", // For the Arbitration and Indemnification section
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target

    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation to ensure all fields are filled and checkboxes are checked
    const allFieldsFilled = Object.entries(formData).every(([value]) =>
      typeof value === "boolean" ? value === true : value.trim() !== ""
    )

    if (!allFieldsFilled) {
      alert("Please fill out all fields and agree to the terms.")
      return
    }

    // Data submission logic (replace with your actual endpoint)
    try {
      const response = await fetch("https://your-api-endpoint.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Submission failed")
      alert("Form successfully submitted!")
    } catch (error) {
      alert("An error occurred while submitting the form. Please try again.")
      console.error("Error:", error)
    }
  }

  return (
    <section className="flex justify-center items-center rounded-lg bg-gray-900 text-white sm:py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">
          Martial Arts Liability Waiver
        </h2>

        {/* First Name and Last Name (Side by Side) */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* First Name */}
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
            />
          </div>

          {/* Last Name */}
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Email and Phone Number (Side by Side) */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Email */}
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
            />
          </div>

          {/* Phone */}
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Date of Birth
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
          />
        </div>

        {/* Guardian Checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isGuardian"
            checked={formData.isGuardian}
            onChange={handleChange}
            className="w-5 h-5 accent-emerald-500"
          />
          <label className="text-sm font-medium">
            I am signing as the guardian of a child
          </label>
        </div>

        {/* Conditional Child Fields */}
        {formData.isGuardian && (
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Child's Name */}
            <div className="flex-1">
              <label className="block mb-2 text-sm font-medium">
                Child's Full Name
              </label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                required={formData.isGuardian}
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
              />
            </div>

            {/* Child's Date of Birth */}
            <div className="flex-1">
              <label className="block mb-2 text-sm font-medium">
                Child's Date of Birth
              </label>
              <input
                type="date"
                name="childDateOfBirth"
                value={formData.childDateOfBirth}
                onChange={handleChange}
                required={formData.isGuardian}
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
              />
            </div>
          </div>
        )}

        {/* Emergency Contact Name and Phone (Side by Side) */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium">
              Emergency Contact Name
            </label>
            <input
              type="text"
              name="emergencyContactName"
              value={formData.emergencyContactName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
            />
          </div>

          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium">
              Emergency Contact Phone
            </label>
            <input
              type="tel"
              name="emergencyContactPhone"
              value={formData.emergencyContactPhone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
            />
          </div>
        </div>
        {/* Collapsible Clauses Section with Summary and Detailed Description */}
        <div className="mt-8 space-y-6">
          {/* Medical Treatment Consent */}
          <details className="group border border-gray-600 rounded-lg p-4 bg-gray-800">
            <summary className="flex justify-between items-center cursor-pointer">
              <span className="font-semibold text-lg">
                Medical Treatment Consent
              </span>
              <span className="group-open:rotate-180 transition-transform">
                &#9662;
              </span>
            </summary>
            <p className="mt-4 text-sm text-gray-300 font-semibold">
              *Summary:* I authorize the martial arts center to seek medical
              treatment on my behalf in case of an emergency.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              I understand that the instructors may seek emergency medical
              assistance if necessary. This consent includes contacting
              emergency medical services and authorizing necessary treatment,
              even if I cannot be reached. I acknowledge that I am responsible
              for any medical expenses incurred as a result of treatment
              administered during training or while present at the facility.
            </p>
            <label className="block mt-4 text-sm font-medium">
              Initial Here to Consent
            </label>
            <input
              type="text"
              name="medicalConsentInitials"
              value={formData.medicalConsentInitials}
              onChange={handleChange}
              required
              className="w-24 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
            />
          </details>

          {/* Physical Contact Consent */}
          <details className="group border border-gray-600 rounded-lg p-4 bg-gray-800">
            <summary className="flex justify-between items-center cursor-pointer">
              <span className="font-semibold text-lg">
                Physical Contact Consent
              </span>
              <span className="group-open:rotate-180 transition-transform">
                &#9662;
              </span>
            </summary>
            <p className="mt-4 text-sm text-gray-300 font-semibold">
              *Summary:* I consent to physical contact as part of martial arts
              training under appropriate supervision.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Martial arts involves physical contact, including drills,
              sparring, and self-defense techniques that may result in contact
              with various parts of the body. I acknowledge that such contact is
              inherent to training and consent to participate with the
              understanding that all contact will be controlled and respectful.
            </p>
            <label className="block mt-4 text-sm font-medium">
              Initial Here to Consent
            </label>
            <input
              type="text"
              name="physicalContactInitials"
              value={formData.physicalContactInitials}
              onChange={handleChange}
              required
              className="w-24 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
            />
          </details>

          {/* Risk Acknowledgment */}
          <details className="group border border-gray-600 rounded-lg p-4 bg-gray-800">
            <summary className="flex justify-between items-center cursor-pointer">
              <span className="font-semibold text-lg">Risk Acknowledgment</span>
              <span className="group-open:rotate-180 transition-transform">
                &#9662;
              </span>
            </summary>
            <p className="mt-4 text-sm text-gray-300 font-semibold">
              *Summary:* I acknowledge the risks associated with martial arts
              training, including minor and serious injuries.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              I understand that martial arts training involves physical activity
              that can lead to injuries, such as bruises, sprains, fractures,
              and more serious injuries. I accept these risks and agree to take
              personal responsibility for my safety during training, reporting
              any unsafe conditions or injuries immediately to the staff.
            </p>
            <label className="block mt-4 text-sm font-medium">
              Initial Here to Acknowledge
            </label>
            <input
              type="text"
              name="riskAcknowledgmentInitials"
              value={formData.riskAcknowledgmentInitials}
              onChange={handleChange}
              required
              className="w-24 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
            />
          </details>

          {/* Arbitration and Indemnification */}
          <details className="group border border-gray-600 rounded-lg p-4 bg-gray-800">
            <summary className="flex justify-between items-center cursor-pointer">
              <span className="font-semibold text-lg">
                Arbitration and Indemnification
              </span>
              <span className="group-open:rotate-180 transition-transform">
                &#9662;
              </span>
            </summary>
            <p className="mt-4 text-sm text-gray-300 font-semibold">
              *Summary:* I agree to resolve disputes through binding arbitration
              and release the center from liability.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              I agree to resolve any disputes or claims related to my
              participation in martial arts training through binding arbitration
              rather than litigation. I also release the martial arts center,
              its instructors, and staff from liability for any injuries, except
              in cases of criminal misconduct.
            </p>
            <label className="block mt-4 text-sm font-medium">
              Initial Here to Consent
            </label>
            <input
              type="text"
              name="arbitrationInitials"
              value={formData.arbitrationInitials}
              onChange={handleChange}
              required
              className="w-24 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
            />
          </details>
        </div>

        {/* Terms Agreement Checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
            className="w-5 h-5 accent-emerald-500"
          />
          <label className="text-sm font-medium">
            I agree to the terms and conditions of this liability waiver.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all"
        >
          Submit Waiver
        </button>
      </form>
    </section>
  )
}

export default MartialArts
