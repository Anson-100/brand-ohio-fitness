import ActionButton from "@/shared/ActionButton"
import HText from "@/shared/HText"
import { BenefitType, SelectedPage } from "@/shared/types"

import { motion } from "framer-motion"

import { useState } from "react"
import useMediaQuery from "@/hooks/useMediaQuery"
import Dropdown from "@/components/Dropdown"

import {
  ChevronDoubleRightIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid"

import kidsClassImg from "@/assets/kids-class-img.jpg"
import mmaImg from "@/assets/mma-img.jpg"
import bjjImg from "@/assets/bjj-img.jpg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}
const OurClasses = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  const [isKidsClassOpen, setKidsClassOpen] = useState(false)
  const [isAdultMMAOpen, setAdultMMAOpen] = useState(false)
  const [isBJJOpen, setBJJOpen] = useState(false)

  return (
    <section
      id="martialarts"
      className="mx-auto min-h-[100%] pt-[4.5rem] pb-[4rem]"
    >
      <div className="h-full w-5/6 mx-auto">
        {isAboveMediumScreens ? (
          <div className="grid grid-cols-10  mt-5">
            {/* HEADER */}
            <div className="col-span-3 mt-[10vh]">
              <p className="logo text-[1.5rem] text-lime font-rocksalt">
                explore
              </p>
              <p className="scene-title text-[3.5rem] font-bold">
                Martial Arts
              </p>
              <div className="bg-lime h-[1px] max-w-[300px] mt-5 mb-10"></div>

              <p className="w-5/6">
                Embrace a world-class fitness experience here at Ohio Fitness &
                Martial Arts. Here you will find a comprehensive range of
                state-of-the art weightlifting and cardio equipment alongside a
                dedicated CrossFit zone for those who crave intensity. 24/7
              </p>
            </div>
            {/* INFO */}
            <div className="col-span-7 flex flex-col my-2">
              <div className="h-1/3 grid grid-cols-7 my-2">
                <div
                  className={`${isKidsClassOpen ? "col-span-7" : "col-span-5"}`}
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
                  <div className="bg-lime h-[1px] w-full mt-3 mb-5"></div>
                  {isKidsClassOpen ? (
                    ""
                  ) : (
                    <p className="w-2/3">
                      A fun, safe, and structured environment for your kids to
                      build confidence, learn self-defense, and
                      situational-awareness!
                    </p>
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
                  <button
                    className="flex items-center cursor-pointer"
                    onClick={() => setAdultMMAOpen(!isAdultMMAOpen)}
                  >
                    <ChevronDoubleDownIcon className="h-[2rem] text-lime" />
                    <p className="scene-title text-[2rem] font-bold">
                      Adult MMA
                    </p>
                  </button>

                  <div className="bg-lime h-[1px] w-full mt-3 mb-5"></div>
                  <p className="w-2/3">
                    Hobbyists, amateurs, and professional fighters can train in
                    a huge space and learn from legendary coach and competitor,
                    Scott Sheeley!
                  </p>
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
                  <button
                    className="flex items-center cursor-pointer"
                    onClick={() => setBJJOpen(!isBJJOpen)}
                  >
                    <ChevronDoubleDownIcon className="h-[2rem] text-lime" />
                    <p className="scene-title text-[2rem] font-bold">
                      Brazilian Jiu-Jitsu
                    </p>
                  </button>

                  <div className="bg-lime h-[1px] w-full mt-3 mb-5"></div>
                  <p className="w-2/3">
                    Gi and no-gi classes offered multiple times per week!
                  </p>
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
            <p className="font-rocksalt text-center text-lime text-[1.3rem]">
              discover
            </p>
            <p className="scene-title text-center font-bold text-[2.5rem]">
              Fitness
            </p>
            <div className="h-[1px] w-4/6 bg-lime mx-auto mt-3 mb-7"></div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col items-center border-[1px] border-lime bg-black rounded-md">
                <div className="flex items-center pt-3">
                  {" "}
                  <p className="text-[1.5rem] font-bold text-center">Weights</p>
                </div>
                <div className="h-[1px] w-1/2 bg-lime mx-auto mt-1 mb-2"></div>
                <p className="text-center w-5/6">Build muscle and strength!</p>
                <ChevronDoubleDownIcon className="cursor-pointer h-[1.8rem] text-lime mb-1" />
              </div>
              <div className="flex flex-col items-center border-[1px] border-lime bg-black rounded-md">
                <div className="flex items-center pt-3">
                  {" "}
                  <p className="text-[1.5rem] font-bold text-center">Cardio</p>
                </div>
                <div className="h-[1px] w-1/2 bg-lime mx-auto mt-1 mb-2"></div>
                <p className="text-center w-5/6">
                  Build endurance and tone up!
                </p>
                <ChevronDoubleDownIcon className="cursor-pointer h-[1.8rem] text-lime mb-1" />{" "}
              </div>
              <div className="flex flex-col items-center border-[1px] border-lime bg-black rounded-md">
                <div className="flex items-center pt-3">
                  {" "}
                  <p className="text-[1.5rem] font-bold text-center">
                    CrossFit
                  </p>
                </div>
                <div className="h-[1px] w-1/2 bg-lime mx-auto mt-1 mb-2"></div>
                <p className="text-center w-5/6">
                  Satisfy your need for intensity!
                </p>
                <ChevronDoubleDownIcon className="cursor-pointer h-[1.8rem] text-lime mb-1" />{" "}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default OurClasses
