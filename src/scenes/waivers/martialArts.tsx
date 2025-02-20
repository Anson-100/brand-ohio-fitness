import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import SignaturePad from "./signaturePad"
import { WaiverClause, martialArtsClauses } from "./waiverClauses"

type FormData = {
  waiverType: string
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  signingForChild: boolean
  childFirstName?: string
  childLastName?: string
  childDateOfBirth?: string
  relationshipToChild?: string // New field for relationship to the child
  otherRelationship?: string // Optional field if "Other" is selected
  emergencyContactName: string
  emergencyContactPhone: string
  assumptionOfRiskResponsibility: boolean
  medicalTreatmentEmergencyCare: boolean
  liabilityWaiverIndemnification: boolean
  consentInstructionRules: boolean
  agreeToTerms: boolean
  typedSignature: string // 👈 Add this!
  signature: string | null // 👈 Added this field for the drawn signature
}

const martialArts: React.FC = () => {
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
        waiverType: data.waiverType || "martial_arts",
        typedSignature: data.typedSignature,
        signature,
        // 🆕 Handle "Other" relationship scenario
        relationshipToChild:
          data.relationshipToChild === "Other"
            ? data.otherRelationship || "Other"
            : data.relationshipToChild,
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

  // Extract individual clauses for manual use in JSX
  const {
    assumptionOfRiskResponsibility,
    medicalTreatmentEmergencyCare,
    liabilityWaiverIndemnification,
    consentInstructionRules,
  } = martialArtsClauses.reduce<Record<string, WaiverClause>>((acc, clause) => {
    acc[clause.key] = clause
    return acc
  }, {})

  const clauseStyling =
    "p-4 flex flex-col gap-2 rounded-lg shadow-lg bg-gray-300 text-gray-900"
  const checkboxStyling = "w-5 h-5 accent-emerald-500 mr-2 cursor-pointer"

  return (
    <section className="flex justify-center items-center rounded-lg bg-gray-900 text-white sm:py-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl bg-gray-800 p-4 sm:p-8 rounded-lg shadow-lg space-y-6"
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
        {/* Checkbox for Signing on Behalf of a Child ===================================================================*/}
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            {...register("signingForChild")}
            className="w-5 h-5 accent-emerald-500 mr-2 cursor-pointer"
          />
          <label className="text-sm font-medium">
            I'm signing on behalf of a child
          </label>
        </div>

        {/* Child Information Fields (Only Show If Checkbox is Checked) */}
        {watch("signingForChild") && (
          <div className="mt-4 flex flex-col gap-6 bg-gray-950 p-4 rounded-lg shadow-md">
            {/* Child First Name & Last Name (Side by Side) */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium">
                  Child's First Name
                </label>
                <input
                  type="text"
                  {...register("childFirstName", {
                    required: "Child's first name is required",
                  })}
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
                />
                {errors.childFirstName && (
                  <p className="text-red-500 text-sm">
                    {errors.childFirstName.message}
                  </p>
                )}
              </div>

              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium">
                  Child's Last Name
                </label>
                <input
                  type="text"
                  {...register("childLastName", {
                    required: "Child's last name is required",
                  })}
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
                />
                {errors.childLastName && (
                  <p className="text-red-500 text-sm">
                    {errors.childLastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Child Date of Birth */}
            <div className="flex-1">
              <label className="block mb-2 text-sm font-medium">
                Child's Date of Birth
              </label>
              <Controller
                name="childDateOfBirth"
                control={control}
                rules={{
                  required: "Child's date of birth is required",
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
              {errors.childDateOfBirth && (
                <p className="text-red-500 text-sm">
                  {errors.childDateOfBirth.message}
                </p>
              )}
            </div>
            {/* Relationship to Child */}
            <div className="flex-1">
              <label className="block mb-2 text-sm font-medium">
                Relationship to Child
              </label>
              <select
                {...register("relationshipToChild", {
                  required: "Please specify your relationship to the child",
                })}
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
              >
                <option value="">Select Relationship</option>
                <option value="Parent">Parent</option>
                <option value="Legal Guardian">Legal Guardian</option>
                <option value="Relative">Relative</option>
                <option value="Other">Other</option>
              </select>
              {errors.relationshipToChild && (
                <p className="text-red-500 text-sm">
                  {errors.relationshipToChild.message}
                </p>
              )}
            </div>

            {/* Conditional Text Field for "Other" */}
            {watch("relationshipToChild") === "Other" && (
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium">
                  Specify Relationship
                </label>
                <input
                  type="text"
                  {...register("otherRelationship", {
                    required: "Please specify your relationship to the child",
                  })}
                  placeholder="Specify Relationship"
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-emerald-500"
                />
                {errors.otherRelationship && (
                  <p className="text-red-500 text-sm">
                    {errors.otherRelationship.message}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
        {/* =============================================================== */}
        {/* =============================================================== */}
        {/* =============================================================== */}

        {/* ASSUMPTION OF RISK & RESPONSIBILITY */}
        <div className={`${clauseStyling}`}>
          <h2 className="text-lg font-semibold">
            {assumptionOfRiskResponsibility.title}
          </h2>
          <p className="mt-2 text-base">
            {assumptionOfRiskResponsibility.text}
          </p>
          <div className="mt-3 flex items-center">
            <input
              type="checkbox"
              {...register("assumptionOfRiskResponsibility", {
                required: "You must accept this policy",
              })}
              className={`${checkboxStyling}`}
            />
            <label className="text-sm">
              {assumptionOfRiskResponsibility.acknowledgment}
            </label>
          </div>
          {errors.assumptionOfRiskResponsibility && (
            <p className="text-red-500 text-sm">
              {errors.assumptionOfRiskResponsibility.message}
            </p>
          )}
        </div>

        {/* MEDICAL TREATMENT & EMERGENCY CARE */}
        <div className={`${clauseStyling}`}>
          <h2 className="text-lg font-semibold">
            {medicalTreatmentEmergencyCare.title}
          </h2>
          <p className="mt-2 text-base">{medicalTreatmentEmergencyCare.text}</p>
          <div className="mt-3 flex items-center">
            <input
              type="checkbox"
              {...register("medicalTreatmentEmergencyCare", {
                required: "You must accept this clause",
              })}
              className={`${checkboxStyling}`}
            />
            <label className="text-sm">
              {medicalTreatmentEmergencyCare.acknowledgment}
            </label>
          </div>
          {errors.medicalTreatmentEmergencyCare && (
            <p className="text-red-500 text-sm">
              {errors.medicalTreatmentEmergencyCare.message}
            </p>
          )}
        </div>

        {/* LIABILITY WAIVER & INDEMNIFICATION */}
        <div className={`${clauseStyling}`}>
          <h2 className="text-lg font-semibold">
            {liabilityWaiverIndemnification.title}
          </h2>
          <p className="mt-2 text-base">
            {liabilityWaiverIndemnification.text}
          </p>
          <div className="mt-3 flex items-center">
            <input
              type="checkbox"
              {...register("liabilityWaiverIndemnification", {
                required: "You must accept this policy",
              })}
              className={`${checkboxStyling}`}
            />
            <label className="text-sm">
              {liabilityWaiverIndemnification.acknowledgment}
            </label>
          </div>
          {errors.liabilityWaiverIndemnification && (
            <p className="text-red-500 text-sm">
              {errors.liabilityWaiverIndemnification.message}
            </p>
          )}
        </div>

        {/* CONSENT TO INSTRUCTION & RULES */}
        <div className={`${clauseStyling}`}>
          <h2 className="text-lg font-semibold">
            {consentInstructionRules.title}
          </h2>
          <p className="mt-2 text-base">{consentInstructionRules.text}</p>
          <div className="mt-3 flex items-center">
            <input
              type="checkbox"
              {...register("consentInstructionRules", {
                required: "You must accept this policy",
              })}
              className={`${checkboxStyling}`}
            />
            <label className="text-sm">
              {consentInstructionRules.acknowledgment}
            </label>
          </div>
          {errors.consentInstructionRules && (
            <p className="text-red-500 text-sm">
              {errors.consentInstructionRules.message}
            </p>
          )}
        </div>

        {/* =============================================================== */}
        {/* =============================================================== */}
        {/* =============================================================== */}

        {/* Terms Agreement Section */}
        <div className="space-y-3">
          {/* Checkbox for Agreement */}
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

          {/* Typed Signature Input */}
          <div>
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
        </div>
        <SignaturePad onSave={setSignature} />

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

export default martialArts
