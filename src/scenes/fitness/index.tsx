import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { useState } from "react"
import useMediaQuery from "@/hooks/useMediaQuery"
import Dropdown from "@/components/Dropdown"
import DropdownMobile from "@/components/DropdownMobile"

import {
  ChevronDoubleDownIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid"
import weightsImg from "@/assets/weights-img.jpg"
import cardioImg from "@/assets/cardio-img.jpg"
import crossfitImg from "@/assets/crossfit-img.jpg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Fitness = ({}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  const [isWeightsOpen, setWeightsOpen] = useState(false)
  const [isCardioOpen, setCardioOpen] = useState(false)
  const [isCrossFitOpen, setCrossFitOpen] = useState(false)

  const [isWeightsMobileOpen, setWeightsMobileOpen] = useState(false)
  const [isCardioMobileOpen, setCardioMobileOpen] = useState(false)
  const [isCrossFitMobileOpen, setCrossFitMobileOpen] = useState(false)

  return (
    <section
      id="fitness"
      className="mx-auto min-h-[100svh] pt-[6rem] pb-[4rem]"
    >
      <div className="h-full w-5/6 mx-auto">
        {isAboveMediumScreens ? (
          <div className="grid grid-cols-10 w-full">
            {/* HEADER */}
            <div className="col-span-3 mt-[10vh]">
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
                <p className="scene-title text-[2rem]  font-bold">Fitness</p>
              </motion.div>

              <div className="bg-gradient-theme h-[1px] max-w-[150px] mt-5 mb-10"></div>

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
                <p className="w-4/6 text-gray-100">
                  Embrace a world-class fitness experience here at Ohio Fitness
                  & Martial Arts. Here you will find a comprehensive range of
                  cutting-edge weightlifting and cardio equipment alongside a
                  dedicated CrossFit zone for those who crave intensity.
                </p>
              </motion.div>
            </div>
            {/* INFO========================================================================================= */}
            <div className="col-span-7 flex flex-col my-2">
              {/* DROPDOWN 1 */}
              <div className="h-1/3 grid grid-cols-7 my-2">
                <div
                  className={`${isWeightsOpen ? "col-span-7" : "col-span-5"}`}
                >
                  <motion.div
                    className=""
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
                      className="flex items-center cursor-pointer"
                      onClick={() => setWeightsOpen(!isWeightsOpen)}
                    >
                      {isWeightsOpen ? (
                        <ChevronDoubleDownIcon className="h-[1.2rem] pr-2 text-zinc-theme" />
                      ) : (
                        <ChevronDownIcon className="h-[1.2rem] pr-2 text-zinc-theme" />
                      )}
                      <p className="scene-title text-[1.3rem] font-semibold pr-1">
                        Weights
                      </p>
                    </button>
                  </motion.div>

                  <div className="bg-gradient-theme h-[1px] w-full mt-3 mb-5"></div>
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
                      <p className="w-2/3">
                        Free weights, cable machines, and more!
                      </p>
                    </motion.div>
                  )}
                </div>
                {isWeightsOpen ? (
                  ""
                ) : (
                  <div className="col-span-2">
                    <img
                      className="object-cover border-[1px] border-emerald-theme rounded-sm"
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
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                  >
                    {" "}
                    <button
                      className="flex items-center cursor-pointer"
                      onClick={() => setCardioOpen(!isCardioOpen)}
                    >
                      {isCardioOpen ? (
                        <ChevronDoubleDownIcon className="h-[1.2rem] pr-2 text-zinc-theme" />
                      ) : (
                        <ChevronDownIcon className="h-[1.2rem] pr-2 text-zinc-theme" />
                      )}
                      <p className="scene-title text-[1.3rem] font-bold">
                        Cardio
                      </p>
                    </button>
                  </motion.div>

                  <div className="bg-gradient-theme h-[1px] w-full mt-3 mb-5"></div>
                  {isCardioOpen ? (
                    ""
                  ) : (
                    <motion.div
                      className=""
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                    >
                      <p className="w-2/3">
                        Treadmills, ellipticals, and a StairMaster!
                      </p>
                    </motion.div>
                  )}
                </div>
                {isCardioOpen ? (
                  ""
                ) : (
                  <div className="col-span-2">
                    <img
                      className="object-cover border-[1px] border-emerald-theme rounded-sm"
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
                  className={`${isCrossFitOpen ? "col-span-7" : "col-span-5"}`}
                >
                  {" "}
                  <motion.div
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                  >
                    <button
                      className="flex items-center cursor-pointer"
                      onClick={() => setCrossFitOpen(!isCrossFitOpen)}
                    >
                      {isCrossFitOpen ? (
                        <ChevronDoubleDownIcon className="h-[1.2rem] pr-2 text-zinc-theme" />
                      ) : (
                        <ChevronDownIcon className="h-[1.2rem] pr-2 text-zinc-theme" />
                      )}
                      <p className="scene-title text-[1.3rem] font-bold">
                        Personal Training/Group Classes
                      </p>
                    </button>
                  </motion.div>
                  <div className="bg-gradient-theme h-[1px] w-full mt-3 mb-5"></div>
                  {isCrossFitOpen ? (
                    ""
                  ) : (
                    <motion.div
                      className=""
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                    >
                      <p className="w-2/3">
                        Fully dedicated crossfit zone with airdyne bikes,
                        kettlebells, bumper weights, and more!
                      </p>
                    </motion.div>
                  )}
                </div>
                {isCrossFitOpen ? (
                  ""
                ) : (
                  <div className="col-span-2">
                    <img
                      className="object-cover border-[1px] border-emerald-theme rounded-sm"
                      src={crossfitImg}
                      alt="Crossfit"
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
          <div>
            {/* MOBILE=============================================================================================================*/}
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {" "}
              <p className="scene-title text-center font-bold text-gray-100 text-[1.75rem]">
                Fitness
              </p>
            </motion.div>

            <div className="h-[1px] w-2/3 sm:w-1/3 bg-gradient-theme mx-auto mt-3 mb-7"></div>

            {/* MOBILE FITNESS INFO ============================================================*/}
            <div className="flex flex-col gap-3 sm:w-2/3 mx-auto">
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
                <div className="items-center border-[1px] border-zinc-700 bg-zinc-900 rounded-sm p-2">
                  <button
                    className="cursor-pointer flex justify-between w-full "
                    onClick={() => setWeightsMobileOpen(!isWeightsMobileOpen)}
                  >
                    {" "}
                    <div className="mb-2">
                      {" "}
                      <p className="text-[1.2rem] text-left font-bold">
                        Weights
                      </p>
                      <p className="mt-2 text-gray-300">
                        Build muscle and strength!
                      </p>{" "}
                    </div>
                    {isWeightsMobileOpen ? (
                      <ChevronDoubleDownIcon className="h-[1.5rem]  text-zinc-theme  " />
                    ) : (
                      <ChevronDownIcon className="h-[1.5rem]  text-zinc-theme  " />
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
                <div className="items-center border-[1px] border-zinc-700 bg-zinc-900 rounded-sm p-2">
                  <button
                    className="cursor-pointer flex justify-between w-full"
                    onClick={() => setCardioMobileOpen(!isCardioMobileOpen)}
                  >
                    <div className="mb-2">
                      <p className="text-[1.2rem] text-left font-bold">
                        Cardio
                      </p>
                      <p className="mt-2 text-gray-300">
                        Stay toned and build endurance!
                      </p>
                    </div>
                    {isCardioMobileOpen ? (
                      <ChevronDoubleDownIcon className="h-[1.5rem] text-zinc-theme" />
                    ) : (
                      <ChevronDownIcon className="h-[1.5rem] text-zinc-theme" />
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
                <div className="items-center border-[1px] border-zinc-700 bg-zinc-900 rounded-sm p-2">
                  <button
                    className="cursor-pointer flex justify-between w-full"
                    onClick={() => setCrossFitMobileOpen(!isCrossFitMobileOpen)}
                  >
                    <div className="mb-2">
                      <p className="text-[1.2rem] text-left font-bold">
                        CrossFit
                      </p>
                      <p className="mt-2 text-gray-300">Feel the intensity!</p>
                    </div>
                    {isCrossFitMobileOpen ? (
                      <ChevronDoubleDownIcon className="h-[1.5rem] text-zinc-theme" />
                    ) : (
                      <ChevronDownIcon className="h-[1.5rem] text-zinc-theme" />
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
    </section>
  )
}

export default Fitness
