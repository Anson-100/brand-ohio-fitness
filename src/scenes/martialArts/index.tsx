// import ActionButton from "@/shared/ActionButton"
// import HText from "@/shared/HText"
import { SelectedPage } from "@/shared/types"

import { motion } from "framer-motion"

import { useState } from "react"
import useMediaQuery from "@/hooks/useMediaQuery"
import Dropdown from "@/components/Dropdown"
import DropdownMobile from "@/components/DropdownMobile"

import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid"

import kidsClassImg from "@/assets/kids-class-img.jpg"
import mmaImg from "@/assets/mma-img.jpg"
import bjjImg from "@/assets/bjj-img.jpg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}
const MartialArts = ({}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  const [isKidsClassOpen, setKidsClassOpen] = useState(false)
  const [isAdultMMAOpen, setAdultMMAOpen] = useState(false)
  const [isBJJOpen, setBJJOpen] = useState(false)

  const [isKidsClassMobileOpen, setKidsClassMobileOpen] = useState(false)
  const [isAdultMMAMobileOpen, setAdultMMAMobileOpen] = useState(false)
  const [isBJJMobileOpen, setBJJMobileOpen] = useState(false)

  return (
    <section
      id="martialarts"
      className="mx-auto min-h-[100svh] pt-[4.5rem] pb-[4rem]"
    >
      <div className="h-full w-5/6 mx-auto">
        {isAboveMediumScreens ? (
          <div className="grid grid-cols-10  mt-5">
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
                  explore
                </p>
                <p className="scene-title lg:text-[3.5rem] text-[3rem]  font-bold">
                  Martial Arts
                </p>
              </motion.div>

              <div className="bg-lime h-[1px] max-w-[300px] mt-5 mb-10"></div>
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
                <p className="w-5/6">
                  Embrace a world-class fitness experience here at Ohio Fitness
                  & Martial Arts. Here you will find a comprehensive range of
                  state-of-the art weightlifting and cardio equipment alongside
                  a dedicated CrossFit zone for those who crave intensity. 24/7
                </p>
              </motion.div>
            </div>
            {/* INFO */}
            <div className="col-span-7 flex flex-col my-2">
              <div className="h-1/3 grid grid-cols-7 my-2">
                <div
                  className={`${isKidsClassOpen ? "col-span-7" : "col-span-5"}`}
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
                      onClick={() => setKidsClassOpen(!isKidsClassOpen)}
                    >
                      <ChevronDoubleDownIcon className="h-[2rem] text-lime" />
                      <p className="scene-title text-[2rem] font-bold pr-1">
                        Kids Martial Arts/Self-Defense
                      </p>
                    </button>
                  </motion.div>
                  <div className="bg-lime h-[1px] w-full mt-3 mb-5"></div>
                  {isKidsClassOpen ? (
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
                        A fun, safe, and structured environment for your kids to
                        build confidence, learn self-defense, and
                        situational-awareness!
                      </p>
                    </motion.div>
                  )}
                </div>
                {isKidsClassOpen ? (
                  ""
                ) : (
                  <div className="col-span-2">
                    <img
                      className="object-cover border-[1px] border-lime rounded-md"
                      src={kidsClassImg}
                      alt="kids-class"
                    />
                  </div>
                )}
                {/* <div
                  className={`col-span-2 transform transition-transform duration-200 ${
                    isKidsClassOpen ? "scale-0" : "scale-100"
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
                section="kids-class"
                isOpen={isKidsClassOpen}
                toggleDropdown={() => setKidsClassOpen(!isKidsClassOpen)}
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
                    <button
                      className="flex items-center cursor-pointer"
                      onClick={() => setAdultMMAOpen(!isAdultMMAOpen)}
                    >
                      <ChevronDoubleDownIcon className="h-[2rem] text-lime" />
                      <p className="scene-title text-[2rem] font-bold">
                        Adult MMA
                      </p>
                    </button>
                  </motion.div>

                  <div className="bg-lime h-[1px] w-full mt-3 mb-5"></div>
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
                      Hobbyists, amateurs, and professional fighters can train
                      in a huge space and learn from legendary coach and
                      competitor, Scott Sheeley!
                    </p>
                  </motion.div>
                </div>
                <div className="col-span-2">
                  <img
                    className="object-cover border-[1px] border-lime rounded-md"
                    src={mmaImg}
                    alt="Adult-MMA"
                  />
                </div>
              </div>
              <Dropdown
                section="adult-mma"
                isOpen={isAdultMMAOpen}
                toggleDropdown={() => setAdultMMAOpen(!isAdultMMAOpen)}
              />
              <div className="h-1/3 grid grid-cols-7 my-2">
                <div className="col-span-5">
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
                      onClick={() => setBJJOpen(!isBJJOpen)}
                    >
                      <ChevronDoubleDownIcon className="h-[2rem] text-lime" />
                      <p className="scene-title text-[2rem] font-bold">
                        Brazilian Jiu-Jitsu
                      </p>
                    </button>
                  </motion.div>
                  <div className="bg-lime h-[1px] w-full mt-3 mb-5"></div>

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
                      Gi and no-gi classes offered multiple times per week!
                    </p>
                  </motion.div>
                </div>
                <div className="col-span-2">
                  <img
                    className="object-cover border-[1px] border-lime rounded-md"
                    src={bjjImg}
                    alt="Crossfit"
                  />
                </div>
              </div>
              <Dropdown
                section="bjj"
                isOpen={isBJJOpen}
                toggleDropdown={() => setBJJOpen(!isBJJOpen)}
              />
            </div>
          </div>
        ) : (
          <div>
            {/* MOBILE HEADER */}
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
              {" "}
              <p className="font-rocksalt text-center text-lime text-[1.3rem]">
                explore
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
              <p className="scene-title text-center font-bold text-[2.5rem]">
                Martial Arts
              </p>
            </motion.div>

            <div className="h-[1px] w-4/6 sm:w-1/3 bg-lime mx-auto mt-3 mb-7"></div>

            {/* MOBILE MARTIAL ARTS INFO */}
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
                      Kids Martial Arts
                    </p>
                  </div>

                  <p className="text-center mt-2">Build muscle and strength!</p>
                  <button
                    className="cursor-pointer mx-auto block"
                    onClick={() =>
                      setKidsClassMobileOpen(!isKidsClassMobileOpen)
                    }
                  >
                    <ChevronDoubleDownIcon className="h-[2rem] text-lime" />
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
                <div className="items-center border-[1px] border-lime bg-black rounded-xl p-2">
                  <div className="flex items-center">
                    {" "}
                    <p className="text-[1.5rem] font-bold text-center w-full bg-charcoal rounded-lg border-lime border-[1px]">
                      Adult MMA
                    </p>
                  </div>

                  <p className="text-center mt-2">Build muscle and strength!</p>
                  <button
                    className="cursor-pointer mx-auto block"
                    onClick={() => setAdultMMAMobileOpen(!isAdultMMAMobileOpen)}
                  >
                    <ChevronDoubleDownIcon className="h-[2rem] text-lime" />
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
                <div className="items-center border-[1px] border-lime bg-black rounded-xl p-2">
                  <div className="flex items-center">
                    {" "}
                    <p className="text-[1.5rem] font-bold text-center w-full bg-charcoal rounded-lg border-lime border-[1px]">
                      Brazilian Jiu-Jitsu
                    </p>
                  </div>

                  <p className="text-center mt-2">Build muscle and strength!</p>
                  <button
                    className="cursor-pointer mx-auto block"
                    onClick={() => setBJJMobileOpen(!isBJJMobileOpen)}
                  >
                    <ChevronDoubleDownIcon className="h-[2rem] text-lime" />
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
    </section>
  )
}

export default MartialArts
