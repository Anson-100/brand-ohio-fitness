import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { useState } from "react"
import useMediaQuery from "@/hooks/useMediaQuery"
import Dropdown from "@/components/Dropdown"
import DropdownMobile from "@/components/DropdownMobile"

import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid"
import kidsClassImg from "@/assets/kids-class-img.jpg"
import mmaImg from "@/assets/mma-img.jpg"
import bjjImg from "@/assets/bjj-img.jpg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const MartialArts = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  const [isKidsClassOpen, setKidsClassOpen] = useState(false)
  const [isAdultMMAOpen, setAdultMMAOpen] = useState(false)
  const [isBJJOpen, setBJJOpen] = useState(false)

  const [isKidsClassMobileOpen, setKidsClassMobileOpen] = useState(false)
  const [isAdultMMAMobileOpen, setAdultMMAMobileOpen] = useState(false)
  const [isBJJMobileOpen, setBJJMobileOpen] = useState(false)
  const boxMobileStyle =
    "bg-gradient-to-br from-zinc-800 to-zinc-900 border border-l-zinc-700 border-t-zinc-700 border-r-zinc-900 border-b-zinc-900 rounded-md shadow-lg flex-col flex items-center items-center  rounded p-2"

  // const boxStyle =
  //   "bg-gradient-to-br from-zinc-800 to-zinc-900 border border-l-zinc-700 border-t-zinc-700 border-r-zinc-900 border-b-zinc-900 rounded-sm shadow-lg  flex items-center p-8"
  return (
    <section
      id="martialarts"
      className="mx-auto min-h-[100svh] pt-[7rem] pb-[4rem] relative isolate"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.MartialArts)}
      >
        {/* PATTERN DESIGN=========================================== */}
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-zinc-800 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
        <div className="h-full w-full md:w-5/6 mx-auto">
          {isAboveMediumScreens ? (
            <div className="grid grid-cols-10 w-full mt-5">
              {/* HEADER */}
              <div className="col-span-3 mt-[10vh] flex flex-col gap-6 text-gray-100">
                <motion.div
                  className=""
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <h1 className=" text-[2rem] border-b-[1px] border-emerald-theme pb-2 font-bold inline-block">
                    Martial Arts
                  </h1>
                </motion.div>

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
                  <p className="w-4/6 text-gray-300">
                    Experience top-tier martial arts training at Ohio Fitness &
                    Martial Arts, featuring kids' classes, adult MMA, and
                    Brazilian Jiu-Jitsu.
                  </p>
                </motion.div>
              </div>

              {/* INFO */}
              <div className="col-span-7 flex flex-col lg:gap-2 my-2">
                {/* DROPDOWN 1 */}

                <div className={`h-1/3 grid grid-cols-7 my-2`}>
                  <div
                    className={`${
                      isKidsClassOpen ? "col-span-7" : "col-span-5"
                    }`}
                  >
                    <motion.div
                      className="group"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <button
                        className="group flex flex-col cursor-pointer w-full"
                        onClick={() => setKidsClassOpen(!isKidsClassOpen)}
                      >
                        <div className="flex items-center">
                          {isKidsClassOpen ? (
                            <MinusIcon className="h-6 p-[3px] mr-2 text-zinc-800 group-hover:bg-emerald-500 bg-emerald-theme rounded-full" />
                          ) : (
                            <PlusIcon className="h-6 p-[3px] mr-2 text-zinc-800 group-hover:bg-emerald-500 bg-emerald-theme rounded-full" />
                          )}
                          <p className="scene-title text-[1.3rem] font-semibold pr-1">
                            Kids Martial Arts
                          </p>
                        </div>

                        <div className="bg-zinc-600 h-[1px] w-full mt-3 mb-5 group-hover:bg-zinc-500"></div>
                      </button>
                    </motion.div>

                    {!isKidsClassOpen && (
                      <motion.div
                        className=""
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.3 }}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                      >
                        <p className="w-2/3 text-gray-300 text-sm ml:text-base">
                          A fun, safe, and structured environment for your kids
                          to build confidence, learn self-defense, and
                          situational-awareness.
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {!isKidsClassOpen && (
                    <div className="col-span-2">
                      <img
                        className="object-cover zinc-shadow rounded-sm"
                        src={kidsClassImg}
                        alt="Kids Martial Arts"
                      />
                    </div>
                  )}
                </div>
                <Dropdown
                  section="kids-class"
                  isOpen={isKidsClassOpen}
                  toggleDropdown={() => setKidsClassOpen(!isKidsClassOpen)}
                />

                {/* DROPDOWN 2 */}
                <div className="h-1/3 grid grid-cols-7 my-2">
                  <div
                    className={`${
                      isAdultMMAOpen ? "col-span-7" : "col-span-5"
                    }`}
                  >
                    <motion.div
                      className="group"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <button
                        className="group flex flex-col cursor-pointer w-full"
                        onClick={() => setAdultMMAOpen(!isAdultMMAOpen)}
                      >
                        <div className="flex items-center">
                          {isAdultMMAOpen ? (
                            <MinusIcon className="h-6 p-[3px] mr-2 text-zinc-800 group-hover:bg-emerald-500 bg-emerald-theme rounded-full" />
                          ) : (
                            <PlusIcon className="h-6 p-[3px] mr-2 text-zinc-800 group-hover:bg-emerald-500 bg-emerald-theme rounded-full" />
                          )}
                          <p className="scene-title text-[1.3rem] font-semibold pr-1">
                            Adult MMA/IT Fight Team
                          </p>
                        </div>

                        <div className="bg-zinc-600 h-[1px] w-full mt-3 mb-5 group-hover:bg-zinc-500"></div>
                      </button>
                    </motion.div>

                    {!isAdultMMAOpen && (
                      <motion.div
                        className=""
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.3 }}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                      >
                        <p className="w-2/3 text-gray-300 text-sm ml:text-base">
                          Hobbyists, amateurs, and professional fighters can
                          train in a huge space and learn from the best.
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {!isAdultMMAOpen && (
                    <div className="col-span-2">
                      <img
                        className="object-cover zinc-shadow rounded-sm"
                        src={mmaImg}
                        alt="Adult MMA"
                      />
                    </div>
                  )}
                </div>
                <Dropdown
                  section="adult-mma"
                  isOpen={isAdultMMAOpen}
                  toggleDropdown={() => setAdultMMAOpen(!isAdultMMAOpen)}
                />

                {/* DROPDOWN 3 */}
                <div className="h-1/3 grid grid-cols-7 my-2">
                  <div className={`${isBJJOpen ? "col-span-7" : "col-span-5"}`}>
                    <motion.div
                      className="group"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <button
                        className="group flex flex-col cursor-pointer w-full"
                        onClick={() => setBJJOpen(!isBJJOpen)}
                      >
                        <div className="flex items-center">
                          {isBJJOpen ? (
                            <MinusIcon className="h-6 p-[3px] mr-2 text-zinc-800 group-hover:bg-emerald-500 bg-emerald-theme rounded-full" />
                          ) : (
                            <PlusIcon className="h-6 p-[3px] mr-2 text-zinc-800 group-hover:bg-emerald-500 bg-emerald-theme rounded-full" />
                          )}
                          <p className="scene-title text-[1.3rem] font-semibold pr-1">
                            Brazilian Jiu-Jitsu
                          </p>
                        </div>

                        <div className="bg-zinc-600 h-[1px] w-full mt-3 mb-5 group-hover:bg-zinc-500"></div>
                      </button>
                    </motion.div>

                    {!isBJJOpen && (
                      <motion.div
                        className=""
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.3 }}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                      >
                        <p className="w-2/3 text-gray-300 text-sm ml:text-base">
                          Gi and no-gi classes offered multiple times per week.
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {!isBJJOpen && (
                    <div className="col-span-2">
                      <img
                        className="object-cover zinc-shadow rounded-sm"
                        src={bjjImg}
                        alt="Brazilian Jiu-Jitsu"
                      />
                    </div>
                  )}
                </div>
                <Dropdown
                  section="bjj"
                  isOpen={isBJJOpen}
                  toggleDropdown={() => setBJJOpen(!isBJJOpen)}
                />
              </div>
            </div>
          ) : (
            <div className="w-[90%] xs:w-3/4 mx-auto">
              {/* MOBILE SECTION ==================================================================================*/}
              <div className="flex items-center  mb-8  mx-auto">
                {" "}
                <h1 className="font-bold text-gray-100 text-[1.5rem] border-b-[1px] border-emerald-theme pb-2">
                  Martial Arts
                </h1>
              </div>
              <div className="flex flex-col gap-3  mx-auto">
                {/* MOBILE DROPDOWNS */}
                <motion.div
                  className=""
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className={`${boxMobileStyle}`}>
                    <button
                      className="cursor-pointer flex justify-between w-full"
                      onClick={() =>
                        setKidsClassMobileOpen(!isKidsClassMobileOpen)
                      }
                    >
                      <div className="mb-2">
                        <p className=" text-left font-bold">
                          Kids Martial Arts
                        </p>
                        <p className="mt-2 text-gray-300 text-sm">
                          Build confidence and skills for life
                        </p>
                      </div>
                      {isKidsClassMobileOpen ? (
                        <MinusIcon className="h-5  text-emerald-theme " />
                      ) : (
                        <PlusIcon className="h-5  text-emerald-theme " />
                      )}
                    </button>
                    <DropdownMobile
                      section="kids-class-mobile"
                      isOpen={isKidsClassMobileOpen}
                      toggleDropdown={() =>
                        setKidsClassMobileOpen(!isKidsClassMobileOpen)
                      }
                    />
                  </div>
                </motion.div>

                <motion.div
                  className=""
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className={`${boxMobileStyle}`}>
                    <button
                      className="cursor-pointer flex justify-between w-full"
                      onClick={() =>
                        setAdultMMAMobileOpen(!isAdultMMAMobileOpen)
                      }
                    >
                      <div className="mb-2">
                        <p className=" text-left font-bold">Adult MMA</p>
                        <p className="mt-2 text-gray-300 text-sm">
                          World-class coaching and facility
                        </p>
                      </div>
                      {isAdultMMAMobileOpen ? (
                        <MinusIcon className="h-5  text-emerald-theme " />
                      ) : (
                        <PlusIcon className="h-5  text-emerald-theme " />
                      )}
                    </button>
                    <DropdownMobile
                      section="adult-mma-mobile"
                      isOpen={isAdultMMAMobileOpen}
                      toggleDropdown={() =>
                        setAdultMMAMobileOpen(!isAdultMMAMobileOpen)
                      }
                    />
                  </div>
                </motion.div>

                <motion.div
                  className=""
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className={`${boxMobileStyle}`}>
                    <button
                      className="cursor-pointer flex justify-between w-full"
                      onClick={() => setBJJMobileOpen(!isBJJMobileOpen)}
                    >
                      <div className="mb-2">
                        <p className=" text-left font-bold">
                          Brazilian Jiu-Jitsu
                        </p>
                        <p className="mt-2 text-gray-300 text-sm">
                          Gi and no-gi training
                        </p>
                      </div>
                      {isBJJMobileOpen ? (
                        <MinusIcon className="h-5  text-emerald-theme " />
                      ) : (
                        <PlusIcon className="h-5  text-emerald-theme " />
                      )}
                    </button>
                    <DropdownMobile
                      section="bjj-mobile"
                      isOpen={isBJJMobileOpen}
                      toggleDropdown={() => setBJJMobileOpen(!isBJJMobileOpen)}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default MartialArts
