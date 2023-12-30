// import ActionButton from "@/shared/ActionButton"
// import HText from "@/shared/HText"
import { SelectedPage } from "@/shared/types"

import { motion } from "framer-motion"
// import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
// import Benefit from "./Benefit"

import { useState } from "react"
import useMediaQuery from "@/hooks/useMediaQuery"
import Dropdown from "@/components/Dropdown"
import DropdownMobile from "@/components/DropdownMobile"

import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid"

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
      className="mx-auto min-h-[100svh] pt-[4.5rem] pb-[4rem]"
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
                <p className="logo text-[1.5rem] text-lime font-rocksalt">
                  discover
                </p>
                <p className="scene-title lg:text-[3.5rem] text-[3rem]  font-bold">
                  Fitness
                </p>
              </motion.div>

              <div className="bg-lime h-[1px] max-w-[200px] mt-5 mb-10"></div>

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
                <p className="w-4/6">
                  Embrace a world-class fitness experience here at Ohio Fitness
                  & Martial Arts. Here you will find a comprehensive range of
                  cutting-edge weightlifting and cardio equipment alongside a
                  dedicated CrossFit zone for those who crave intensity.
                </p>
              </motion.div>
            </div>
            {/* INFO */}
            <div className="col-span-7 flex flex-col my-2">
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
                      <ChevronDoubleDownIcon className="h-[2rem] text-lime" />
                      <p className="scene-title text-[2rem] font-bold pr-1">
                        Weights
                      </p>
                    </button>
                  </motion.div>

                  <div className="bg-lime h-[1px] w-full mt-3 mb-5"></div>
                  {isWeightsOpen ? (
                    ""
                  ) : (
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
                      <p className="w-2/3">
                        Free weights, cable machines, and some of the latest and
                        greatest in resistance training technology!
                      </p>
                    </motion.div>
                  )}
                </div>
                {isWeightsOpen ? (
                  ""
                ) : (
                  <div className="col-span-2">
                    <img
                      className="object-cover border-[1px] border-lime rounded-md"
                      src={weightsImg}
                      alt="Weights"
                    />
                  </div>
                )}
                {/* <div
                  className={`col-span-2 transform transition-transform duration-200 ${
                    isWeightsOpen ? "scale-0" : "scale-100"
                  }`}
                >
                  <img
                    className="object-cover border-[1px] border-lime rounded-md"
                    src={weightsImg}
                    alt="Weights"
                  />
                </div> */}
              </div>
              <Dropdown
                section="weights"
                isOpen={isWeightsOpen}
                toggleDropdown={() => setWeightsOpen(!isWeightsOpen)}
              />
              <div className="h-1/3 grid grid-cols-7 my-2">
                <div className="col-span-5">
                  <motion.div
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    {" "}
                    <button
                      className="flex items-center cursor-pointer"
                      onClick={() => setCardioOpen(!isCardioOpen)}
                    >
                      <ChevronDoubleDownIcon className="h-[2rem] text-lime" />
                      <p className="scene-title text-[2rem] font-bold">
                        Cardio
                      </p>
                    </button>
                  </motion.div>

                  <div className="bg-lime h-[1px] w-full mt-3 mb-5"></div>
                  {isCardioOpen ? (
                    ""
                  ) : (
                    <motion.div
                      className=""
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
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
                      className="object-cover border-[1px] border-lime rounded-md"
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
              <div className="h-1/3 grid grid-cols-7 my-2">
                <div className="col-span-5">
                  {" "}
                  <motion.div
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <button
                      className="flex items-center cursor-pointer"
                      onClick={() => setCrossFitOpen(!isCrossFitOpen)}
                    >
                      <ChevronDoubleDownIcon className="h-[2rem] text-lime" />
                      <p className="scene-title text-[2rem] font-bold">
                        CrossFit
                      </p>
                    </button>
                  </motion.div>
                  <div className="bg-lime h-[1px] w-full mt-3 mb-5"></div>
                  {isCrossFitOpen ? (
                    ""
                  ) : (
                    <motion.div
                      className=""
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
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
                      className="object-cover border-[1px] border-lime rounded-md"
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
            {/* HEADER */}
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="font-rocksalt text-center text-lime text-[1.3rem]">
                discover
              </p>
            </motion.div>
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
              <p className="scene-title text-center font-bold text-[2.5rem]">
                Fitness
              </p>
            </motion.div>

            <div className="h-[1px] w-2/3 sm:w-1/3 bg-lime mx-auto mt-3 mb-7"></div>

            {/* MOBILE FITNESS INFO */}
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
                <div className="items-center border-[1px] border-lime bg-black rounded-xl p-2">
                  <div className="flex items-center">
                    {" "}
                    <p className="text-[1.5rem] font-bold text-center w-full bg-charcoal rounded-lg border-lime border-[1px]">
                      Weights
                    </p>
                  </div>
                  <p className="text-center mt-2">Build muscle and strength!</p>{" "}
                  <button
                    className="cursor-pointer mx-auto block"
                    onClick={() => setWeightsMobileOpen(!isWeightsMobileOpen)}
                  >
                    <ChevronDoubleDownIcon className="h-[2rem] text-lime" />
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
                <div className="items-center border-[1px] border-lime bg-black rounded-xl p-2">
                  <div className="flex items-center">
                    {" "}
                    <p className="text-[1.5rem] font-bold text-center w-full bg-charcoal rounded-lg border-lime border-[1px]">
                      Cardio
                    </p>
                  </div>

                  <p className="text-center mt-2">
                    Stay toned and build endurance!
                  </p>
                  <button
                    className="cursor-pointer mx-auto block"
                    onClick={() => setCardioMobileOpen(!isCardioMobileOpen)}
                  >
                    <ChevronDoubleDownIcon className="h-[2rem] text-lime" />
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
                <div className="items-center border-[1px] border-lime bg-black rounded-xl p-2">
                  <div className="flex items-center">
                    {" "}
                    <p className="text-[1.5rem] font-bold text-center w-full bg-charcoal rounded-lg border-lime border-[1px]">
                      CrossFit
                    </p>
                  </div>

                  <p className="text-center mt-2">Feel the intensity!</p>
                  <button
                    className="cursor-pointer mx-auto block"
                    onClick={() => setCrossFitMobileOpen(!isCrossFitMobileOpen)}
                  >
                    <ChevronDoubleDownIcon className="h-[2rem] text-lime" />
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
