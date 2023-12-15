import React from "react"
import { useRef, useState } from "react"

import weightsOne from "@/assets/weights1.jpg"
import weightsTwo from "@/assets/weights2.jpg"
import weightsThree from "@/assets/weights3.jpg"
import kidsOne from "@/assets/kids1.jpg"
import kidsTwo from "@/assets/kids2.jpg"
import kidsThree from "@/assets/kids3.jpg"

import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid"

type DropdownProps = {
  section:
    | "weights-mobile"
    | "cardio-mobile"
    | "crossfit-mobile"
    | "kids-class-mobile"
    | "adult-mma-mobile"
    | "bjj-mobile" // Identifier for the section
  isOpen: boolean // State to control if the dropdown is open
  toggleDropdown: () => void // Function to toggle the dropdown state
}

const DropdownMobile: React.FC<DropdownProps> = ({
  section,
  isOpen,
  toggleDropdown,
}) => {
  let content

  const [currentSlide, setCurrentSlide] = useState(0)
  const viewportRef = useRef(null)
  const totalSlides = 3

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prevSlide => prevSlide + 1)
    }
  }

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prevSlide => prevSlide - 1)
    }
  }

  switch (section) {
    case "weights-mobile":
      content = (
        <div className="">
          <div className="carousel h-auto w-full overflow-hidden flex">
            <div className="viewport overflow-hidden m-auto h-full border-2 border-gold rounded-xl relative">
              {currentSlide > 0 && (
                <ArrowLeftIcon
                  className="w-6 md:w-8 text-black bg-white rounded-full bg-opacity-50 hover:cursor-pointer z-10 absolute top-1/2 left-2 transform -translate-y-1/2"
                  onClick={goToPrevSlide}
                />
              )}
              <div
                className="slides flex"
                ref={viewportRef}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Slide 1 */}
                <div className="slide flex-shrink-0 w-full h-full relative">
                  <img
                    className="w-full h-full object-cover"
                    src={weightsThree}
                    alt="Weights One"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end items-center p-4">
                    <div className="bg-black p-2 rounded-lg bg-opacity-60">
                      <h2 className="text-2xl text-white font-bold text-center">
                        Free Weights
                      </h2>
                      <p className="text-white text-center">
                        Barbells and dumbells galore!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="slide flex-shrink-0 w-full h-full relative">
                  <img
                    className="w-full h-full object-cover"
                    src={weightsTwo}
                    alt="Weights Two"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end items-center p-4">
                    <div className="bg-black p-2 rounded-lg bg-opacity-60">
                      <h2 className="text-2xl text-white font-bold text-center">
                        Weight Machines
                      </h2>
                      <p className="text-white text-center">
                        The best weight machines you will find anywhere!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="slide flex-shrink-0 w-full h-full relative">
                  <img
                    className="w-full h-full object-cover"
                    src={weightsOne}
                    alt="Weights Three"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end items-center p-4">
                    <div className="bg-black p-2 rounded-lg bg-opacity-60">
                      <h2 className="text-2xl text-white font-bold text-center">
                        Cable Machines
                      </h2>
                      <p className="text-white text-center">
                        Get creative with our great selection of cable machines!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {currentSlide < totalSlides - 1 && (
                <ArrowRightIcon
                  className="w-6 md:w-8 text-black bg-white rounded-full bg-opacity-50 hover:cursor-pointer z-10 absolute top-1/2 right-2 transform -translate-y-1/2"
                  onClick={goToNextSlide}
                />
              )}
            </div>
          </div>
        </div>
      )
      break
    case "cardio-mobile":
      content = (
        <div>
          Cardio Content
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
        </div>
      )
      break
    case "crossfit-mobile":
      content = (
        <div>
          CrossFit Content
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
        </div>
      )
      break
    case "kids-class-mobile":
      content = (
        <div className="">
          <div className="carousel h-auto w-full overflow-hidden flex">
            <div className="viewport overflow-hidden m-auto h-full border-2 border-gold rounded-xl relative">
              {currentSlide > 0 && (
                <ArrowLeftIcon
                  className="w-6 md:w-8 text-black bg-white rounded-full bg-opacity-50 hover:cursor-pointer z-10 absolute top-1/2 left-2 transform -translate-y-1/2"
                  onClick={goToPrevSlide}
                />
              )}
              <div
                className="slides flex"
                ref={viewportRef}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Slide 1 */}
                <div className="slide flex-shrink-0 w-full h-full relative">
                  <img
                    className="w-full h-full object-cover"
                    src={kidsOne}
                    alt="Weights One"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end items-center p-4">
                    <div className="bg-black p-2 rounded-lg bg-opacity-60">
                      <h2 className="text-2xl text-white font-bold text-center">
                        Ages 4-15
                      </h2>
                      <p className="text-white text-center">
                        All ages and all skill levels welcome!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="slide flex-shrink-0 w-full h-full relative">
                  <img
                    className="w-full h-full object-cover"
                    src={kidsTwo}
                    alt="Weights Two"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end items-center p-4">
                    <div className="bg-black p-2 rounded-lg bg-opacity-60">
                      <h2 className="text-2xl text-white font-bold text-center">
                        Self-Defense
                      </h2>
                      <p className="text-white text-center">
                        Prepare kids for life and martial arts competition!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="slide flex-shrink-0 w-full h-full relative">
                  <img
                    className="w-full h-full object-cover"
                    src={kidsThree}
                    alt="Weights Three"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end items-center p-4">
                    <div className="bg-black p-2 rounded-lg bg-opacity-60">
                      <h2 className="text-2xl text-white font-bold text-center">
                        Confidence
                      </h2>
                      <p className="text-white text-center">
                        Kids will learn to remain composed even when things get
                        difficult!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {currentSlide < totalSlides - 1 && (
                <ArrowRightIcon
                  className="w-6 md:w-8 text-black bg-white rounded-full bg-opacity-50 hover:cursor-pointer z-10 absolute top-1/2 right-2 transform -translate-y-1/2"
                  onClick={goToNextSlide}
                />
              )}
            </div>
          </div>
        </div>
      )
      break
    case "adult-mma-mobile":
      content = (
        <div>
          adult mma Content
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
        </div>
      )
      break
    case "bjj-mobile":
      content = (
        <div>
          bjj Content
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
          <p>a;lsdkfj</p>
        </div>
      )
      break
    default:
      content = <div>Default Content</div>
  }

  return (
    <div>
      {/* Content Container */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        }`}
      >
        {/* Content */}
        <div>
          {isOpen && content} {/* Content is conditionally rendered */}
        </div>
      </div>
    </div>
  )
}

export default DropdownMobile
