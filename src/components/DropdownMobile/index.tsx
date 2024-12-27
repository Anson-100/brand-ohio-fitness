import React from "react"
// import { useRef, useState } from "react"
import Carousel from "../Carousel"

import weightsOne from "@/assets/weights1.jpg"
import weightsTwo from "@/assets/weights2.jpg"
import weightsThree from "@/assets/weights3.jpg"
// import cardioOne from "@/assets/cardio 1.jpg"
import cardioTwo from "@/assets/cardio 2.jpg"
import cardioThree from "@/assets/cardio 3.jpg"
import cardioFour from "@/assets/cardio 4.jpg"

import crossfitOne from "@/assets/crossfit1.jpg"
import crossfitTwo from "@/assets/crossfit2.jpg"
import crossfitThree from "@/assets/crossfit3.jpg"

import kidsOne from "@/assets/kids1.jpg"
import kidsTwo from "@/assets/kids2.jpg"
import kidsThree from "@/assets/kids3.jpg"
// import mmaOne from "@/assets/mma1.jpg"
import mmaTwo from "@/assets/mma2.jpg"
import mmaThree from "@/assets/mma3.jpg"
// import mmaFour from "@/assets/mma4.jpg"
import cageThree from "@/assets/cage 3.jpg"
import bjjOne from "@/assets/bjj1.jpg"
import bjjTwo from "@/assets/bjj2.jpg"
import bjjThree from "@/assets/bjj3.jpg"

// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid"

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
  // toggleDropdown,
}) => {
  let content

  // const [currentSlide, setCurrentSlide] = useState(0)
  // const viewportRef = useRef(null)
  // const totalSlides = 3

  // const goToNextSlide = () => {
  //   if (currentSlide < totalSlides - 1) {
  //     setCurrentSlide(prevSlide => prevSlide + 1)
  //   }
  // }

  // const goToPrevSlide = () => {
  //   if (currentSlide > 0) {
  //     setCurrentSlide(prevSlide => prevSlide - 1)
  //   }
  // }

  switch (section) {
    case "weights-mobile":
      content = (
        <div className="">
          <Carousel
            slides={[
              {
                image: weightsOne,
                alt: "Weights One",
                title: "Cable Machines",
                description: "",
              },
              {
                image: weightsTwo,
                alt: "Weights Two",
                title: "Weight Machines",
                description: "",
              },
              {
                image: weightsThree,
                alt: "Weights Three",
                title: "Free Weights",
                description: "",
              },
            ]}
          />
        </div>
      )
      break
    case "cardio-mobile":
      content = (
        <div>
          <Carousel
            slides={[
              {
                image: cardioThree,
                alt: "Cardio Two",
                title: "Treadmills",
                description: "",
              },
              {
                image: cardioTwo,
                alt: "Cardio Two",
                title: "Elipticals",
                description: "",
              },
              {
                image: cardioFour,
                alt: "Cardio Three",
                title: "Rowing Machines & Airdyne Bikes",
                description: "",
              },
            ]}
          />
        </div>
      )
      break
    case "crossfit-mobile":
      content = (
        <div>
          <Carousel
            slides={[
              {
                image: crossfitOne,
                alt: "Crossfit One",
                title: "Group Classes",
                description: "",
              },
              {
                image: crossfitTwo,
                alt: "Crossfit Two",
                title: "Plenty of Space",
                description: "",
              },
              {
                image: crossfitThree,
                alt: "Crossfit Three",
                title: "Bumper Plates & Kettlebells",
                description: "",
              },
            ]}
          />
        </div>
      )
      break
    case "kids-class-mobile":
      content = (
        <div className="">
          <Carousel
            slides={[
              {
                image: kidsOne,
                alt: "Kids One",
                title: "Ages 4-15",
                description: "",
              },
              {
                image: kidsTwo,
                alt: "Kids One",
                title: "Self-Defense",
                description: "",
              },
              {
                image: kidsThree,
                alt: "Kids One",
                title: "Confidence",
                description: "",
              },
            ]}
          />
        </div>
      )
      break
    case "adult-mma-mobile":
      content = (
        <div>
          <Carousel
            slides={[
              {
                image: mmaTwo,
                alt: "MMA One",
                title: "Technique and Toughness",
                description: "",
              },
              {
                image: mmaThree,
                alt: "MMA One",
                title: "Elite Coaching",
                description: "",
              },
              {
                image: cageThree,
                alt: "MMA One",
                title: "World-Class Facility",
                description: "",
              },
            ]}
          />
        </div>
      )
      break
    case "bjj-mobile":
      content = (
        <div>
          <Carousel
            slides={[
              {
                image: bjjThree,
                alt: "BJJ Three",
                title: "Fun",
                description: "",
              },
              {
                image: bjjTwo,
                alt: "BJJ Two",
                title: "Competition Training",
                description: "",
              },
              {
                image: bjjOne,
                alt: "BJJ One",
                title: "Gi and No-Gi",
                description: "",
              },
            ]}
          />
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
