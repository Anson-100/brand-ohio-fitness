import React from "react"
// import { useRef, useState } from "react"
import Carousel from "../Carousel"

import weightsOne from "@/assets/weights1.jpg"
import weightsTwo from "@/assets/weights2.jpg"
import weightsThree from "@/assets/weights3.jpg"
import cardioOne from "@/assets/cardio 1.jpg"
import crossfitOne from "@/assets/crossfit1.jpg"
import crossfitTwo from "@/assets/crossfit2.jpg"
import crossfitThree from "@/assets/crossfit3.jpg"

import kidsOne from "@/assets/kids1.jpg"
import kidsTwo from "@/assets/kids2.jpg"
import kidsThree from "@/assets/kids3.jpg"
// import mmaOne from "@/assets/mma1.jpg"
import mmaTwo from "@/assets/mma2.jpg"
import mmaThree from "@/assets/mma3.jpg"
import mmaFour from "@/assets/mma4.jpg"
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
                description:
                  "Everything you need to expand your workout routine!",
              },
              {
                image: weightsTwo,
                alt: "Weights Two",
                title: "Weight Machines",
                description:
                  "The latest and greatest such as this Rogue belt-squat machine!",
              },
              {
                image: weightsThree,
                alt: "Weights Three",
                title: "Free Weights",
                description: "Dumbells and barbells galore!",
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
                image: cardioOne,
                alt: "Cardio One",
                title: "Treadmills",
                description: "Brand new treadmills!",
              },
              {
                image: cardioOne,
                alt: "Cardio Two",
                title: "Elipticals",
                description: "Brand new elipticals!",
              },
              {
                image: cardioOne,
                alt: "Cardio Three",
                title: "Stairmasters and More",
                description: "Plenty of options to get a sweat going your way!",
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
                description: "Team up and push it to the limit!",
              },
              {
                image: crossfitTwo,
                alt: "Crossfit Two",
                title: "Rowing Machines & Airdyne Bikes",
                description: "Everything you need to crank up the intensity!",
              },
              {
                image: crossfitThree,
                alt: "Crossfit Three",
                title: "Bumper Plates & Kettlebells",
                description:
                  "Power cleans, turkish getups, and everything else!",
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
                description: "All ages and all skill levels welcome!",
              },
              {
                image: kidsTwo,
                alt: "Kids One",
                title: "Self-Defense",
                description: "Prepare kids for life and competition!",
              },
              {
                image: kidsThree,
                alt: "Kids One",
                title: "Confidence",
                description: "Remain composed even when things get difficult!",
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
                description: "Skilled training partners to challenge you!",
              },
              {
                image: mmaThree,
                alt: "MMA One",
                title: "Elite Coaching",
                description:
                  "Learn from Scott Sheeley, one of the world's best coaches!",
              },
              {
                image: mmaFour,
                alt: "MMA One",
                title: "State-of-the-Art",
                description:
                  "Bags, over 2,000sq ft of mats, and a full-sized octagon!",
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
                description:
                  "Stay fit and blow off some steam with the gentle art!",
              },
              {
                image: bjjTwo,
                alt: "BJJ Two",
                title: "Competition Training",
                description: "Stay sharp so you can dominate in competition!",
              },
              {
                image: bjjOne,
                alt: "BJJ One",
                title: "Gi and No-Gi",
                description: "Whichever you prefer, we've got you covered!",
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
