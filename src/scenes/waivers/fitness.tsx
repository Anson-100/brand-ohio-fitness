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
