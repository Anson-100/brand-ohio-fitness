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
      className="mx-auto min-h-[100svh] pt-[6rem] pb-[4rem]"
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
                <p className="scene-title text-[2rem] font-bold">
                  Martial Arts
                </p>
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
                <p className="w-4/6">
                  Experience top-tier martial arts training at Ohio Fitness &
                  Martial Arts. Our gym offers a unique mix: kids' classes for
                  young martial artists, world-class adult MMA training, and
                  Brazilian Jiu-Jitsu. Train with the best coaching, facilities
                  and equipment, all under one roof!
                </p>
              </motion.div>
            </div>

            {/* INFO */}
            <div className="col-span-7 flex flex-col my-2">
              {/* DROPDOWN 1 */}
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
                      {isKidsClassOpen ? (
                        <ChevronDoubleDownIcon className="h-[1.2rem] pr-2 text-zinc-theme" />
                      ) : (
                        <ChevronDownIcon className="h-[1.2rem] pr-2 text-zinc-theme" />
                      )}
                      <p className="scene-title text-[1.3rem] font-semibold pr-1">
                        Kids Martial Arts
                      </p>
                    </button>
                  </motion.div>

                  <div className="bg-gradient-theme h-[1px] w-full mt-3 mb-5"></div>
                  {isKidsClassOpen ? (
                    ""
                  ) : (
                    <motion.div
                      className=""
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
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
                      className="object-cover border-[1px] border-emerald-theme rounded-sm"
                      src={kidsClassImg}
                      alt="kids-class"
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
                  className={`${isAdultMMAOpen ? "col-span-7" : "col-span-5"}`}
                >
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
                      {isAdultMMAOpen ? (
                        <ChevronDoubleDownIcon className="h-[1.2rem] pr-2 text-zinc-theme" />
                      ) : (
                        <ChevronDownIcon className="h-[1.2rem] pr-2 text-zinc-theme" />
                      )}
                      <p className="scene-title text-[1.3rem] font-bold">
                        Adult MMA/IT Fight Team
                      </p>
                    </button>
                  </motion.div>

                  <div className="bg-gradient-theme h-[1px] w-full mt-3 mb-5"></div>
                  {isAdultMMAOpen ? (
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
                        Hobbyists, amateurs, and professional fighters can train
                        in a huge space and learn from the best!
                      </p>
                    </motion.div>
                  )}
                </div>
                <div className="col-span-2">
                  {isAdultMMAOpen ? (
                    ""
                  ) : (
                    <img
                      className="object-cover border-[1px] border-emerald-theme rounded-sm"
                      src={mmaImg}
                      alt="Adult-MMA"
                    />
                  )}
                </div>
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
                      {isBJJOpen ? (
                        <ChevronDoubleDownIcon className="h-[1.2rem] pr-2 text-zinc-theme" />
                      ) : (
                        <ChevronDownIcon className="h-[1.2rem] pr-2 text-zinc-theme" />
                      )}
                      <p className="scene-title text-[1.3rem] font-bold">
                        Brazilian Jiu-Jitsu
                      </p>
                    </button>
                  </motion.div>
                  <div className="bg-gradient-theme h-[1px] w-full mt-3 mb-5"></div>

                  {isBJJOpen ? (
                    ""
                  ) : (
                    <motion.div
                      className=""
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                    >
                      <p className="w-2/3">
                        Gi and no-gi classes offered multiple times per week!
                      </p>
                    </motion.div>
                  )}
                </div>
                <div className="col-span-2">
                  {isBJJOpen ? (
                    ""
                  ) : (
                    <img
                      className="object-cover border-[1px] border-emerald-theme rounded-sm"
                      src={bjjImg}
                      alt="Brazilian Jiu-Jitsu"
                    />
                  )}
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
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="scene-title text-center font-bold text-[1.75rem]">
                Martial Arts
              </p>
            </motion.div>

            <div className="h-[1px] w-4/6 sm:w-1/3 bg-lime mx-auto mt-3 mb-7"></div>

            {/* MOBILE MARTIAL ARTS INFO ==================================================================*/}
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
                    className="cursor-pointer flex justify-between w-full"
                    onClick={() =>
                      setKidsClassMobileOpen(!isKidsClassMobileOpen)
                    }
                  >
                    <div className="mb-2">
                      <p className="text-[1.2rem] text-left font-bold">
                        Kids Martial Arts
                      </p>
                      <p className="mt-2 text-gray-300 text-left">
                        Skills for life!
                      </p>
                    </div>
                    {isKidsClassMobileOpen ? (
                      <ChevronDoubleDownIcon className="h-[1.5rem] text-zinc-theme" />
                    ) : (
                      <ChevronDownIcon className="h-[1.5rem] text-zinc-theme" />
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
                <div className="items-center border-[1px] border-zinc-700 bg-zinc-900 rounded-sm p-2 ">
                  <button
                    className="cursor-pointer flex justify-between w-full"
                    onClick={() => setAdultMMAMobileOpen(!isAdultMMAMobileOpen)}
                  >
                    <div className="mb-2">
                      <p className="text-[1.2rem] text-left font-bold">
                        Adult MMA
                      </p>
                      <p className="mt-2 text-left text-gray-300">
                        Elite training!
                      </p>
                    </div>
                    {isAdultMMAMobileOpen ? (
                      <ChevronDoubleDownIcon className="h-[1.5rem] text-zinc-theme" />
                    ) : (
                      <ChevronDownIcon className="h-[1.5rem] text-zinc-theme" />
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
                <div className="items-center border-[1px] border-zinc-700 bg-zinc-900 rounded-sm p-2 ">
                  <button
                    className="cursor-pointer flex justify-between w-full"
                    onClick={() => setBJJMobileOpen(!isBJJMobileOpen)}
                  >
                    <div className="mb-2">
                      <p className="text-[1.2rem] text-left font-bold">
                        Brazilian Jiu-Jitsu
                      </p>
                      <p className="mt-2 text-gray-300 text-left">
                        Gi and no-gi!
                      </p>
                    </div>
                    {isBJJMobileOpen ? (
                      <ChevronDoubleDownIcon className="h-[1.5rem] text-zinc-theme" />
                    ) : (
                      <ChevronDownIcon className="h-[1.5rem] text-zinc-theme" />
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
    </section>
  )
}

export default MartialArts
