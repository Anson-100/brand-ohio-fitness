import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import SignaturePad from "./signaturePad"
import { WaiverClause, fitnessClauses } from "./waiverClauses"

type FormData = {
  waiverType: string
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
  typedSignature: string // 👈 Add this!
  signature: string | null // 👈 Added this field for the drawn signature
}

const Fitness: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,

    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null)
  const [signature, setSignature] = useState<string | null>(null)
  // ONSUBMIT FUNCTION===============================================================================
  const onSubmit = async (data: FormData) => {
    try {
      setSubmissionStatus(null)

      // ✅ Prevent submission if signature is empty
      if (!signature) {
        alert("Please sign the form before submitting.")
        return
      }

      const requestData = {
        ...data,
        waiverType: data.waiverType || "fitness",
        typedSignature: data.typedSignature, // 👈 Add this
        signature, // 👈 Ensure drawn signature is included in payload
      }

      const response = await fetch(
        "https://t9psvrhzie.execute-api.us-east-2.amazonaws.com/waiver_initial_deploy/IT_liabilityWaivers",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      console.log("Form submitted successfully:", requestData)
      setSubmissionStatus("success")
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmissionStatus("error")
    }
  }

  const {
    assumptionOfRisk,
    awarenessOfStrenuousActivity,
    releaseOfLiability,
    unauthorizedAccess,
  } = fitnessClauses.reduce<Record<string, WaiverClause>>((acc, clause) => {
    acc[clause.key] = clause
    return acc
  }, {})

  const policyStyling =
    "p-4 flex flex-col gap-2 rounded-lg shadow-lg bg-gray-300 text-gray-900"
  const checkboxStyling = "w-5 h-5 accent-emerald-500 mr-2 cursor-pointer"

  return (
    <section className="flex justify-center items-center rounded-lg bg-gray-900 text-white sm:py-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl bg-gray-800 p-4 sm:p-8 rounded-lg shadow-lg space-y-6"
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
        <div className="flex-1">
          <label className="block mb-2 text-sm font-medium">
            Date of Birth
          </label>
          <Controller
            name="dateOfBirth"
            control={control}
            rules={{
              required: "Date of birth is required",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/,
                message: "Format: MM/DD/YYYY",
              },
            }}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                maxLength={10} // Prevents typing beyond MM/DD/YYYY
                placeholder="MM/DD/YYYY"
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
                onChange={e => {
                  let value = e.target.value.replace(/\D/g, "") // Remove non-numeric characters

                  // Insert slashes automatically
                  if (value.length > 2)
                    value = `${value.slice(0, 2)}/${value.slice(2)}`
                  if (value.length > 5)
                    value = `${value.slice(0, 5)}/${value.slice(5, 9)}`

                  field.onChange(value) // Update field value
                }}
              />
            )}
          />
        </div>
        {errors.dateOfBirth && (
          <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>
        )}

        {/* Emergency Contact Name and Phone (Side by Side) */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Emergency Contact Name */}
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium">
              Emergency Contact Name
            </label>
            <Controller
              name="emergencyContactName"
              control={control}
              rules={{
                required: "Emergency contact name is required",
                pattern: {
                  value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                  message: "Please enter a valid first and last name",
                },
              }}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  placeholder="John Doe"
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
                />
              )}
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
        {/* ============================================================================================= */}
        {/* ================================================================================================== */}
        {/* ============================================================================================== */}
        {/* ASSUMPTION OF RISK */}
        <div className={`${policyStyling}`}>
          <h2 className="text-lg font-semibold">{assumptionOfRisk.title}</h2>
          <p className="mt-2 text-base">{assumptionOfRisk.text}</p>
          <div className="mt-3 flex items-center">
            <input
              type="checkbox"
              {...register("assumptionOfRisk", {
                required: "You must accept this policy",
              })}
              className={`${checkboxStyling}`}
            />
            <label className="text-sm">{assumptionOfRisk.acknowledgment}</label>
          </div>
          {errors.assumptionOfRisk && (
            <p className="text-red-500 text-sm">
              {errors.assumptionOfRisk.message}
            </p>
          )}
        </div>

        {/* AWARENESS OF STRENUOUS ACTIVITY */}
        <div className={`${policyStyling}`}>
          <h2 className="text-lg font-semibold">
            {awarenessOfStrenuousActivity.title}
          </h2>
          <p className="mt-2 text-base">{awarenessOfStrenuousActivity.text}</p>
          <div className="mt-3 flex items-center">
            <input
              type="checkbox"
              {...register("awarenessOfStrenuousActivity", {
                required: "You must accept this policy",
              })}
              className={`${checkboxStyling}`}
            />
            <label className="text-sm">
              {awarenessOfStrenuousActivity.acknowledgment}
            </label>
          </div>
          {errors.awarenessOfStrenuousActivity && (
            <p className="text-red-500 text-sm">
              {errors.awarenessOfStrenuousActivity.message}
            </p>
          )}
        </div>

        {/* RELEASE OF LIABILITY */}
        <div className={`${policyStyling}`}>
          <h2 className="text-lg font-semibold">{releaseOfLiability.title}</h2>
          <p className="mt-2 text-base">{releaseOfLiability.text}</p>
          <div className="mt-3 flex items-center">
            <input
              type="checkbox"
              {...register("releaseOfLiability", {
                required: "You must accept this policy",
              })}
              className={`${checkboxStyling}`}
            />
            <label className="text-sm">
              {releaseOfLiability.acknowledgment}
            </label>
          </div>
          {errors.releaseOfLiability && (
            <p className="text-red-500 text-sm">
              {errors.releaseOfLiability.message}
            </p>
          )}
        </div>

        {/* UNAUTHORIZED ACCESS POLICY */}
        <div className={`${policyStyling}`}>
          <h2 className="text-lg font-semibold">{unauthorizedAccess.title}</h2>
          <p className="mt-2 text-base">{unauthorizedAccess.text}</p>
          <div className="mt-3 flex items-center">
            <input
              type="checkbox"
              {...register("unauthorizedAccess", {
                required: "You must accept this policy",
              })}
              className={`${checkboxStyling}`}
            />
            <label className="text-sm">
              {unauthorizedAccess.acknowledgment}
            </label>
          </div>
          {errors.unauthorizedAccess && (
            <p className="text-red-500 text-sm">
              {errors.unauthorizedAccess.message}
            </p>
          )}
        </div>

        {/* =======================================================================
        // =======================================================================================
        // ============================================================================ */}

        {/* Terms Agreement Section */}

        <div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register("agreeToTerms", {
                required: "You must agree to the terms",
              })}
              className={`${checkboxStyling}`}
            />
            <label className="text-sm font-medium">
              I agree to the terms and conditions of this liability waiver
              (check box and sign first and last name below).
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="text-red-500 text-sm">
              {errors.agreeToTerms.message}
            </p>
          )}
        </div>

        {/* Typed Signature Input */}
        <div className="mt-4">
          <input
            type="text"
            {...register("typedSignature", {
              required: "You must type your full name to sign",
              validate: value => {
                const firstName = watch("firstName")
                const lastName = watch("lastName")
                return (
                  value.trim() === `${firstName} ${lastName}` ||
                  "Name must match your first and last name"
                )
              },
            })}
            placeholder="John Doe"
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
          />
          {errors.typedSignature && (
            <p className="text-red-500 text-sm">
              {errors.typedSignature.message}
            </p>
          )}
        </div>
        {/* SIGNATURE PAD=========================================================================== */}
        <SignaturePad onSave={setSignature} />
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
