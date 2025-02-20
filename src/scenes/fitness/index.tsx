import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { useState } from "react"
import useMediaQuery from "@/hooks/useMediaQuery"
import Dropdown from "@/components/Dropdown"
import DropdownMobile from "@/components/DropdownMobile"

import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid"
import weightsImg from "@/assets/weights-img.jpg"
import cardioImg from "@/assets/cardio-img.jpg"
import crossfitImg from "@/assets/crossfit-img.jpg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Fitness = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  const [isWeightsOpen, setWeightsOpen] = useState(false)
  const [isCardioOpen, setCardioOpen] = useState(false)
  const [isCrossFitOpen, setCrossFitOpen] = useState(false)

  const [isWeightsMobileOpen, setWeightsMobileOpen] = useState(false)
  const [isCardioMobileOpen, setCardioMobileOpen] = useState(false)
  const [isCrossFitMobileOpen, setCrossFitMobileOpen] = useState(false)
  const boxStyle =
    "bg-gradient-to-br from-zinc-800 to-zinc-900 border border-l-zinc-700 border-t-zinc-700 border-r-zinc-900 border-b-zinc-900 rounded-md shadow-lg flex-col flex items-center items-center  rounded p-2"
  return (
    <section
      id="fitness"
      className="mx-auto min-h-[100svh] pt-[7rem] pb-[4rem] relative isolate"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Fitness)}>
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
                    Fitness
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
                    Experience top-level fitness at Ohio Fitness & Martial Arts,
                    featuring cutting-edge weightlifting, cardio equipment, and
                    personal training
                  </p>
                </motion.div>
              </div>
              {/* INFO========================================================================================= */}
              <div className="col-span-7 flex flex-col lg:gap-2 my-2">
                {/* DROPDOWN 1 */}
                <div className="h-1/3 grid grid-cols-7 my-2">
                  <div
                    className={`${isWeightsOpen ? "col-span-7" : "col-span-5"}`}
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
                        onClick={() => setWeightsOpen(!isWeightsOpen)}
                      >
                        <div className="flex items-center">
                          {" "}
                          {isWeightsOpen ? (
                            <MinusIcon className="h-6 p-[3px] mr-2 text-zinc-800 group-hover:bg-emerald-500 bg-emerald-theme rounded-full" />
                          ) : (
                            <PlusIcon className="h-6 p-[3px] mr-2 text-zinc-800 group-hover:bg-emerald-500 bg-emerald-theme rounded-full" />
                          )}
                          <div className="flex items-center">
                            <p className="scene-title text-[1.3rem] font-semibold pr-1">
                              Weights
                            </p>
                          </div>
                        </div>

                        <div className="bg-zinc-600 h-[1px] w-full mt-3 mb-5 group-hover:bg-zinc-500"></div>
                      </button>
                    </motion.div>

                    {isWeightsOpen ? (
                      ""
                    ) : (
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
                          free weights, cable machines, and more
                        </p>
                      </motion.div>
                    )}
                  </div>
                  {isWeightsOpen ? (
                    ""
                  ) : (
                    <div className="col-span-2">
                      <img
                        className="object-cover zinc-shadow rounded-sm"
                        src={weightsImg}
                        alt="Weights"
                      />
                    </div>
                  )}
                </div>
                <Dropdown
                  section="weights"
                  isOpen={isWeightsOpen}
                  toggleDropdown={() => setWeightsOpen(!isWeightsOpen)}
                />

                {/* DROPDOWN 2 */}
                <div className="h-1/3 grid grid-cols-7 my-2">
                  <div
                    className={`${isCardioOpen ? "col-span-7" : "col-span-5"}`}
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
                        onClick={() => setCardioOpen(!isCardioOpen)}
                      >
                        <div className="flex items-center">
                          {isCardioOpen ? (
                            <MinusIcon className="h-6 p-[3px] mr-2 text-zinc-800 group-hover:bg-emerald-500 bg-emerald-theme rounded-full" />
                          ) : (
                            <PlusIcon className="h-6 p-[3px] mr-2 text-zinc-800 group-hover:bg-emerald-500 bg-emerald-theme rounded-full" />
                          )}
                          <p className="scene-title text-[1.3rem] font-semibold pr-1">
                            Cardio
                          </p>
                        </div>
                        <div className="bg-zinc-600 h-[1px] w-full mt-3 mb-5 group-hover:bg-zinc-500"></div>
                      </button>
                    </motion.div>

                    {isCardioOpen ? (
                      ""
                    ) : (
                      <motion.div
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
                          Treadmills, ellipticals, and more
                        </p>
                      </motion.div>
                    )}
                  </div>
                  {isCardioOpen ? (
                    ""
                  ) : (
                    <div className="col-span-2">
                      <img
                        className="object-cover zinc-shadow rounded-sm"
                        src={cardioImg}
                        alt="Cardio"
                      />
                    </div>
                  )}
                </div>
                <Dropdown
                  section="cardio"
                  isOpen={isCardioOpen}
                  toggleDropdown={() => setCardioOpen(!isCardioOpen)}
                />

                {/* DROPDOWN 3 */}
                <div className="h-1/3 grid grid-cols-7 my-2">
                  <div
                    className={`${
                      isCrossFitOpen ? "col-span-7" : "col-span-5"
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
                        onClick={() => setCrossFitOpen(!isCrossFitOpen)}
                      >
                        <div className="flex items-center">
                          {isCrossFitOpen ? (
                            <MinusIcon className="h-6 p-[3px] mr-2 text-zinc-800 group-hover:bg-emerald-500 bg-emerald-theme rounded-full" />
                          ) : (
                            <PlusIcon className="h-6 p-[3px] mr-2 text-zinc-800 group-hover:bg-emerald-500 bg-emerald-theme rounded-full" />
                          )}
                          <p className="scene-title text-[1.3rem] font-semibold pr-1 ">
                            Personal Training/Group Classes
                          </p>
                        </div>
                        <div className="bg-zinc-600 h-[1px] w-full mt-3 mb-5 group-hover:bg-zinc-500"></div>
                      </button>
                    </motion.div>

                    {isCrossFitOpen ? (
                      ""
                    ) : (
                      <motion.div
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
                          Certified trainers, small group classes, flexible
                          scheduling
                        </p>
                      </motion.div>
                    )}
                  </div>
                  {isCrossFitOpen ? (
                    ""
                  ) : (
                    <div className="col-span-2">
                      <img
                        className="object-cover zinc-shadow rounded-sm"
                        src={crossfitImg}
                        alt="Personal Training"
                      />
                    </div>
                  )}
                </div>
                <Dropdown
                  section="crossfit"
                  isOpen={isCrossFitOpen}
                  toggleDropdown={() => setCrossFitOpen(!isCrossFitOpen)}
                />
              </div>
            </div>
          ) : (
            <div className="w-[90%] xs:w-3/4 mx-auto">
              {/* MOBILE SECTION=============================================================================================================*/}
              <div className="flex items-center  mb-8  mx-auto">
                {" "}
                <h1 className="font-bold text-gray-100 text-[1.5rem] border-b-[1px] border-emerald-theme pb-2">
                  Fitness
                </h1>
              </div>

              {/* MOBILE FITNESS INFO ============================================================*/}
              <div className="flex flex-col gap-3  mx-auto">
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
                  <div className={`${boxStyle}`}>
                    <button
                      className="cursor-pointer flex justify-between w-full "
                      onClick={() => setWeightsMobileOpen(!isWeightsMobileOpen)}
                    >
                      {" "}
                      <div className="mb-2">
                        {" "}
                        <p className=" text-left font-bold">Weights</p>
                        <p className="mt-2 text-gray-300 text-sm">
                          Cable Machines, Free-Weights, etc.
                        </p>{" "}
                      </div>
                      {isWeightsMobileOpen ? (
                        <MinusIcon className="h-5  text-emerald-theme " />
                      ) : (
                        <PlusIcon className="h-5  text-emerald-theme " />
                      )}
                    </button>
                    <DropdownMobile
                      section="weights-mobile"
                      isOpen={isWeightsMobileOpen}
                      toggleDropdown={() =>
                        setWeightsMobileOpen(!isWeightsMobileOpen)
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
                  <div className={`${boxStyle}`}>
                    <button
                      className="cursor-pointer flex justify-between w-full"
                      onClick={() => setCardioMobileOpen(!isCardioMobileOpen)}
                    >
                      <div className="mb-2">
                        <p className=" text-left font-bold">Cardio</p>
                        <p className="mt-2 text-gray-300 text-sm">
                          Treadmills, elipticals, etc.
                        </p>
                      </div>
                      {isCardioMobileOpen ? (
                        <MinusIcon className="h-5  text-emerald-theme " />
                      ) : (
                        <PlusIcon className="h-5  text-emerald-theme " />
                      )}
                    </button>
                    <DropdownMobile
                      section="cardio-mobile"
                      isOpen={isCardioMobileOpen}
                      toggleDropdown={() =>
                        setCardioMobileOpen(!isCardioMobileOpen)
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
                  <div className={`${boxStyle}`}>
                    <button
                      className="cursor-pointer flex justify-between w-full"
                      onClick={() =>
                        setCrossFitMobileOpen(!isCrossFitMobileOpen)
                      }
                    >
                      <div className="mb-2">
                        <p className=" text-left font-bold">
                          Personal Training
                        </p>
                        <p className="mt-2 text-gray-300 text-sm">
                          Expert coaching by certified trainers
                        </p>
                      </div>
                      {isCrossFitMobileOpen ? (
                        <MinusIcon className="h-5  text-emerald-theme " />
                      ) : (
                        <PlusIcon className="h-5  text-emerald-theme " />
                      )}
                    </button>
                    <DropdownMobile
                      section="crossfit-mobile"
                      isOpen={isCrossFitMobileOpen}
                      toggleDropdown={() =>
                        setCrossFitMobileOpen(!isCrossFitMobileOpen)
                      }
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

export default Fitness
