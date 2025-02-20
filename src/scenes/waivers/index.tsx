import React, { useState } from "react"
import MartialArts from "./martialArts"
import Fitness from "./fitness"

import {
  ChevronDownIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid"
import { motion, AnimatePresence } from "framer-motion"

interface PolicyItem {
  id: string
  question: string
  answer: string | (() => JSX.Element)
}

const Waivers: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({})

  const toggleOpen = (id: string): void => {
    setIsOpen(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }

  const PolicyItems: PolicyItem[] = [
    {
      id: "policy1",
      question: "Martial Arts Waiver (Kids and Adults)",
      answer: () => <MartialArts />, // Renders the Martial Arts waiver
    },
    {
      id: "policy2",
      question: "Fitness Waiver",
      answer: () => <Fitness />, // Renders the Fitness waiver here
    },
  ]
  return (
    <section
      id="waivers"
      className="flex flex-col items-center min-h-[100svh] py-16 w-[90%] md:w-5/6 mx-auto relative isolate overflow-hidden"
    >
      {/* BG DESIGN PATTERN================================== */}
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-zinc-950 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-zinc-950">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mt-[10vh] mr-auto flex flex-col gap-6 text-gray-100 mb-8 md:mb-16">
        {/* <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        ></motion.div> */}
        <div className="flex">
          <h1 className="scene-title md:text-[2rem] text-[1.5rem] font-bold inline-block border-b-[1px] border-emerald-theme pb-2">
            Waivers
          </h1>
        </div>

        <motion.div
          className="text-gray-200 text-base lg:text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="w-4/6"></p>
        </motion.div>
      </div>
      <div className="w-full h-[1px] bg-neutral-600"></div>

      {/* WAIVERS======================================================= */}

      <div className="w-full flex flex-col  font-quest text-gray-200 text-base md:text-lg">
        {PolicyItems.map(item => (
          <div key={item.id} className="flex flex-col">
            <button
              onClick={() => toggleOpen(item.id)}
              className="flex items-center justify-between w-full text-left py-6 px-2"
            >
              <span
                className={`${
                  isOpen[item.id] ? "text-gray-200" : "text-gray-200"
                } transition-all duration-200`}
              >
                {item.question}
              </span>
              {isOpen[item.id] ? (
                <ChevronDoubleDownIcon className="w-5 h-5 text-gray-200" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </button>
            <AnimatePresence>
              {isOpen[item.id] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <p className="pb-4 ">
                    {typeof item.answer === "function"
                      ? item.answer()
                      : item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="w-full h-[1px] bg-neutral-600"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Waivers
