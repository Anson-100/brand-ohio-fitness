import React, { useState } from "react"

const Fitness: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    agreeToTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Fitness Waiver Data Submitted:", formData)
    // Add your data submission logic here
  }

  const clauseStyling =
    "p-4 flex flex-col gap-2 rounded-lg shadow-lg bg-gray-300 text-gray-900"
  const checkboxStyling =
    "mr-2 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all"

  return (
    <section className="flex justify-center items-center rounded-lg bg-gray-900 text-white sm:py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">
          Fitness Liability Waiver
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
        {/* ASSUMPTION OF RISK CLAUSE============================================================= */}
        <div className={`${clauseStyling}`}>
          <h2 className="text-lg font-semibold ">Assumption of Risk</h2>
          <p className="mt-2 text-base">
            By using the facility, the participant acknowledges that they do so
            at their own risk. The participant waives any claims for injury,
            damage, loss, or theft of property related to the use of any area
            within the facility, including parking areas. Additionally, the
            participant assumes full responsibility for any injuries or losses
            sustained by themselves, their guests, or family members while using
            the facility.
          </p>

          <div className="mt-3 flex items-center">
            <input
              type="checkbox"
              id="assumptionOfRisk"
              name="assumptionOfRisk"
              required
              className={`${checkboxStyling}`}
            />
            <label htmlFor="assumptionOfRisk" className="text-sm">
              I acknowledge and accept the Assumption of Risk clause.
            </label>
          </div>
        </div>
        {/* AWARENESS OF STRENUOUS ACTIVITY============================================== */}
        <div className={`${clauseStyling}`}>
          <h2 className="text-lg font-semibold ">
            Awareness of Strenuous Activity
          </h2>
          <p className="mt-2 text-base">
            The participant acknowledges and understands that activities such as
            weight training, aerobics, cardiovascular training, and martial arts
            involve inherent risks. These activities may pose hazards to certain
            individuals and could result in injury to themselves, other members,
            or guests.
          </p>

          <div className="mt-3 flex items-center">
            <input
              type="checkbox"
              id="awarenessOfStrenuousActivity"
              name="awarenessOfStrenuousActivity"
              required
              className={`${checkboxStyling}`}
            />
            <label htmlFor="awarenessOfStrenuousActivity" className="text-sm">
              I acknowledge and accept the Awareness of Strenuous Activity
              clause.
            </label>
          </div>
        </div>
        {/* RELEASE OF LIABILITY CLAUSE ======================================================= */}
        <div className={`${clauseStyling}`}>
          <h2 className="text-lg font-semibold ">Release of Liability</h2>
          <p className="mt-2 text-base">
            In consideration for permission to enter and use the facilities at{" "}
            <strong>Ohio Fitness and IT Martial Arts Center</strong>, the
            participant assumes all risks of injury while on the premises. The
            participant further agrees to release and not pursue legal action
            against <strong>Ohio Fitness and IT Martial Arts Center</strong>,
            its agents, employees, associates, or any affiliated parties for any
            claims, damages, costs, or causes of action that may arise from
            injuries or damages sustained while on the premises.
          </p>

          <div className="mt-3 flex items-center">
            <input
              type="checkbox"
              id="releaseOfLiability"
              name="releaseOfLiability"
              required
              className={`${checkboxStyling}`}
            />
            <label htmlFor="releaseOfLiability" className="text-sm">
              I acknowledge and accept the Release of Liability clause.
            </label>
          </div>
        </div>
        {/* TAILGAITING CLAUSE============================================================ */}
        <div className={`${clauseStyling}`}>
          <h2 className="text-lg font-semibold ">Unauthorized Access Policy</h2>
          <p className="mt-2 text-base">
            Members may not bring guests, share scan cards, or let others in
            without written consent from the facility (via our Facebook business
            page). Violations will result in a{" "}
            <strong>one-day visit fee</strong> and may lead to{" "}
            <strong>membership suspension or cancellation</strong>.
          </p>

          <div className="mt-3 flex items-center">
            <input
              type="checkbox"
              id="unauthorizedAccess"
              name="unauthorizedAccess"
              required
              className={`${checkboxStyling}`}
            />
            <label htmlFor="unauthorizedAccess" className="text-sm">
              I acknowledge and accept the Unauthorized Access Policy.
            </label>
          </div>
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

export default Fitness
