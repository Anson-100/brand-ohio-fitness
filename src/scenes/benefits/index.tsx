import ActionButton from "@/shared/ActionButton"
import HText from "@/shared/HText"
import { BenefitType, SelectedPage } from "@/shared/types"

import { motion } from "framer-motion"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import Benefit from "./Benefit"

import { useState } from "react"
import useMediaQuery from "@/hooks/useMediaQuery"
import Dropdown from "@/components/Dropdown"
import DropdownMobile from "@/components/DropdownMobile"

import {
  ChevronDoubleRightIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid"

import weightsImg from "@/assets/weights-img.jpg"
import cardioImg from "@/assets/cardio-img.jpg"
import crossfitImg from "@/assets/crossfit-img.jpg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
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
      className="mx-auto min-h-[100%] pt-[4.5rem] pb-[4rem]"
    >
      <div className="h-full w-5/6 mx-auto">
        {isAboveMediumScreens ? (
          <div className="grid grid-cols-10 w-full">
            {/* HEADER */}
            <div className="col-span-3 mt-[10vh]">
              <p className="logo text-[1.5rem] text-lime font-rocksalt">
                discover
              </p>
              <p className="scene-title lg:text-[3.5rem] text-[3rem]  font-bold">
                Fitness
              </p>
              <div className="bg-lime h-[1px] max-w-[200px] mt-5 mb-10"></div>

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
                  className={`${isWeightsOpen ? "col-span-7" : "col-span-5"}`}
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
                  <div className="bg-lime h-[1px] w-full mt-3 mb-5"></div>
                  {isWeightsOpen ? (
                    ""
                  ) : (
                    <p className="w-2/3">
                      Free weights, cable machines, and some of the latest and
                      greatest in resistance training technology!
                    </p>
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
                  <button
                    className="flex items-center cursor-pointer"
                    onClick={() => setCardioOpen(!isCardioOpen)}
                  >
                    <ChevronDoubleDownIcon className="h-[2rem] text-lime" />
                    <p className="scene-title text-[2rem] font-bold">Cardio</p>
                  </button>

                  <div className="bg-lime h-[1px] w-full mt-3 mb-5"></div>
                  <p className="w-2/3">
                    Treadmills, ellipticals, and a StairMaster!
                  </p>
                </div>
                <div className="col-span-2">
                  <img
                    className="object-cover border-[1px] border-lime rounded-md"
                    src={cardioImg}
                    alt="Cardio"
                  />
                </div>
              </div>
              <Dropdown
                section="cardio"
                isOpen={isCardioOpen}
                toggleDropdown={() => setCardioOpen(!isCardioOpen)}
              />
              <div className="h-1/3 grid grid-cols-7 my-2">
                <div className="col-span-5">
                  <button
                    className="flex items-center cursor-pointer"
                    onClick={() => setCrossFitOpen(!isCrossFitOpen)}
                  >
                    <ChevronDoubleDownIcon className="h-[2rem] text-lime" />
                    <p className="scene-title text-[2rem] font-bold">
                      CrossFit
                    </p>
                  </button>

                  <div className="bg-lime h-[1px] w-full mt-3 mb-5"></div>
                  <p className="w-2/3">
                    Fully dedicated crossfit zone with airdyne bikes,
                    kettlebells, bumper weights, and more!
                  </p>
                </div>
                <div className="col-span-2">
                  <img
                    className="object-cover border-[1px] border-lime rounded-md"
                    src={crossfitImg}
                    alt="Crossfit"
                  />
                </div>
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
            <p className="font-rocksalt text-center text-lime text-[1.3rem]">
              discover
            </p>
            <p className="scene-title text-center font-bold text-[2.5rem]">
              Fitness
            </p>
            <div className="h-[1px] w-2/3 sm:w-1/3 bg-lime mx-auto mt-3 mb-7"></div>
            <div className="flex flex-col gap-3 sm:w-2/3 mx-auto">
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

              <div className="items-center border-[1px] border-lime bg-black rounded-xl p-2">
                <div className="flex items-center">
                  {" "}
                  <p className="text-[1.5rem] font-bold text-center w-full bg-charcoal rounded-lg border-lime border-[1px]">
                    Cardio
                  </p>
                </div>

                <p className="text-center mt-2">Build muscle and strength!</p>
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
              <div className="items-center border-[1px] border-lime bg-black rounded-xl p-2">
                <div className="flex items-center">
                  {" "}
                  <p className="text-[1.5rem] font-bold text-center w-full bg-charcoal rounded-lg border-lime border-[1px]">
                    CrossFit
                  </p>
                </div>

                <p className="text-center mt-2">Build muscle and strength!</p>
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
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Benefits
