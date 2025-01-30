import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  emergencyContactName: string
  emergencyContactPhone: string
  assumptionOfRisk: boolean
  awarenessOfStrenuousActivity: boolean
  releaseOfLiability: boolean
  unauthorizedAccess: boolean
  agreeToTerms: boolean
}

const Fitness: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null)

  const onSubmit = async (data: FormData) => {
    try {
      setSubmissionStatus(null) // Reset status

      const response = await fetch("https://your-api-url.com/submit-waiver", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form") // Handle error
      }

      console.log("Form submitted successfully:", data)
      setSubmissionStatus("success")
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmissionStatus("error")
    }
  }

  const clauseStyling =
    "p-4 flex flex-col gap-2 rounded-lg shadow-lg bg-gray-300 text-gray-900"
  const checkboxStyling = "w-5 h-5 accent-emerald-500 mr-2 cursor-pointer"

  return (
    <section className="flex justify-center items-center rounded-lg bg-gray-900 text-white sm:py-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
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
              {...register("firstName", { required: "First name is required" })}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium">Last Name</label>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium">
              Phone Number
            </label>

            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Phone number is required",
                pattern: {
                  value: /^\d{3}-\d{3}-\d{4}$/,
                  message: "Format: 123-456-7890",
                },
              }}
              render={({ field }) => (
                <input
                  type="tel"
                  {...field}
                  onChange={e => {
                    let value = e.target.value.replace(/\D/g, "") // Remove non-numeric characters

                    if (value.length > 3 && value.length <= 6) {
                      value = `${value.slice(0, 3)}-${value.slice(3)}`
                    } else if (value.length > 6) {
                      value = `${value.slice(0, 3)}-${value.slice(
                        3,
                        6
                      )}-${value.slice(6, 10)}`
                    }

                    field.onChange(value) // Update the field with formatted value
                  }}
                  maxLength={12}
                  placeholder="123-456-7890"
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
                />
              )}
            />

            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Date of Birth
          </label>
          <input
            type="text"
            {...register("dateOfBirth", {
              required: "Date of birth is required",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/,
                message: "Format: MM/DD/YYYY",
              },
            })}
            maxLength={10} // Prevents typing beyond MM/DD/YYYY
            placeholder="MM/DD/YYYY"
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>
          )}
        </div>

        {/* Emergency Contact Name and Phone (Side by Side) */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Emergency Contact Name */}
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium">
              Emergency Contact Name
            </label>
            <input
              type="text"
              {...register("emergencyContactName", {
                required: "Emergency contact name is required",
              })}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
            />
            {errors.emergencyContactName && (
              <p className="text-red-500 text-sm">
                {errors.emergencyContactName.message}
              </p>
            )}
          </div>

          {/* Emergency Contact Phone */}
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium">
              Emergency Contact Phone
            </label>

            <Controller
              name="emergencyContactPhone"
              control={control}
              rules={{
                required: "Emergency contact phone is required",
                pattern: {
                  value: /^\d{3}-\d{3}-\d{4}$/,
                  message: "Format: 123-456-7890",
                },
              }}
              render={({ field }) => (
                <input
                  type="tel"
                  {...field}
                  onChange={e => {
                    let value = e.target.value.replace(/\D/g, "") // Remove non-numeric characters

                    if (value.length > 3 && value.length <= 6) {
                      value = `${value.slice(0, 3)}-${value.slice(3)}`
                    } else if (value.length > 6) {
                      value = `${value.slice(0, 3)}-${value.slice(
                        3,
                        6
                      )}-${value.slice(6, 10)}`
                    }

                    field.onChange(value) // Update the field with formatted value
                  }}
                  maxLength={12}
                  placeholder="123-456-7890"
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
                />
              )}
            />

            {errors.emergencyContactPhone && (
              <p className="text-red-500 text-sm">
                {errors.emergencyContactPhone.message}
              </p>
            )}
          </div>
        </div>

        {/* ASSUMPTION OF RISK CLAUSE */}
        <div className={`${clauseStyling}`}>
          <h2 className="text-lg font-semibold">Assumption of Risk</h2>
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
              {...register("assumptionOfRisk", {
                required: "You must accept this clause",
              })}
              className={`${checkboxStyling}`}
            />
            <label className="text-sm">
              I acknowledge and accept the Assumption of Risk clause.
            </label>
          </div>
          {errors.assumptionOfRisk && (
            <p className="text-red-500 text-sm">
              {errors.assumptionOfRisk.message}
            </p>
          )}
        </div>

        {/* AWARENESS OF STRENUOUS ACTIVITY */}
        <div className={`${clauseStyling}`}>
          <h2 className="text-lg font-semibold">
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
              {...register("awarenessOfStrenuousActivity", {
                required: "You must accept this clause",
              })}
              className={`${checkboxStyling}`}
            />
            <label className="text-sm">
              I acknowledge and accept the Awareness of Strenuous Activity
              clause.
            </label>
          </div>
          {errors.awarenessOfStrenuousActivity && (
            <p className="text-red-500 text-sm">
              {errors.awarenessOfStrenuousActivity.message}
            </p>
          )}
        </div>

        {/* RELEASE OF LIABILITY CLAUSE */}
        <div className={`${clauseStyling}`}>
          <h2 className="text-lg font-semibold">Release of Liability</h2>
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
              {...register("releaseOfLiability", {
                required: "You must accept this clause",
              })}
              className={`${checkboxStyling}`}
            />
            <label className="text-sm">
              I acknowledge and accept the Release of Liability clause.
            </label>
          </div>
          {errors.releaseOfLiability && (
            <p className="text-red-500 text-sm">
              {errors.releaseOfLiability.message}
            </p>
          )}
        </div>

        {/* UNAUTHORIZED ACCESS POLICY */}
        <div className={`${clauseStyling}`}>
          <h2 className="text-lg font-semibold">Unauthorized Access Policy</h2>
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
              {...register("unauthorizedAccess", {
                required: "You must accept this clause",
              })}
              className={`${checkboxStyling}`}
            />
            <label className="text-sm">
              I acknowledge and accept the Unauthorized Access Policy.
            </label>
          </div>
          {errors.unauthorizedAccess && (
            <p className="text-red-500 text-sm">
              {errors.unauthorizedAccess.message}
            </p>
          )}
        </div>

        {/* Terms Agreement Checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("agreeToTerms", {
              required: "You must agree to the terms",
            })}
            className={`${checkboxStyling}`}
          />
          <label className="text-sm font-medium">
            I agree to the terms and conditions of this liability waiver.
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-red-500 text-sm">{errors.agreeToTerms.message}</p>
        )}
        {/* Submission Messages */}
        {submissionStatus === "success" && (
          <p className="text-center text-emerald-500 font-semibold">
            Form submitted successfully!
          </p>
        )}
        {submissionStatus === "error" && (
          <p className="text-center text-red-500 font-semibold">
            Error submitting form. Please try again.
          </p>
        )}
        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full mt-6 py-3 font-semibold rounded-lg transition-all ${
            isSubmitting
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-emerald-700 hover:bg-emerald-600 text-white"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit Waiver"}
        </button>
      </form>
    </section>
  )
}

export default Fitness
