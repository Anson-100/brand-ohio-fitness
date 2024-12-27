import React from "react"
import CardContainer from "../CardContainer"

import weightsOne from "@/assets/weights1.jpg"
import weightsTwo from "@/assets/weights2.jpg"
import weightsThree from "@/assets/weights3.jpg"
// import weightsFive from "@/assets/weights5.jpg"
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
import mmaTwo from "@/assets/mma2.jpg"
import mmaThree from "@/assets/mma3.jpg"
// import mmaFour from "@/assets/mma4.jpg"
import cageThree from "@/assets/cage 3.jpg"
import bjjOne from "@/assets/bjj1.jpg"
import bjjTwo from "@/assets/bjj2.jpg"
import bjjThree from "@/assets/bjj3.jpg"

type DropdownProps = {
  section:
    | "weights"
    | "cardio"
    | "crossfit"
    | "kids-class"
    | "adult-mma"
    | "bjj"
  isOpen: boolean // State to control if the dropdown is open
  toggleDropdown: () => void // Function to toggle the dropdown state
}

const Dropdown: React.FC<DropdownProps> = ({
  section,
  isOpen,
  // toggleDropdown,
}) => {
  let content

  switch (section) {
    case "weights":
      content = (
        <div>
          <CardContainer
            cards={[
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
    case "cardio":
      content = (
        <div>
          <CardContainer
            cards={[
              {
                image: cardioThree,
                alt: "Cardio One",
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
    case "crossfit":
      content = (
        <div>
          <CardContainer
            cards={[
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
    case "kids-class":
      content = (
        <div className="">
          <CardContainer
            cards={[
              {
                image: kidsOne,
                alt: "Kids One",
                title: "Ages 4-15",
                description: "All ages and all skill levels welcome",
              },
              {
                image: kidsTwo,
                alt: "Kids One",
                title: "Self-Defense",
                description: "Prepare kids for life and competition",
              },
              {
                image: kidsThree,
                alt: "Kids One",
                title: "Confidence",
                description: "Remain composed even when things get difficult",
              },
            ]}
          />
        </div>
      )
      break
    case "adult-mma":
      content = (
        <div>
          <CardContainer
            cards={[
              {
                image: mmaTwo,
                alt: "MMA One",
                title: "Technique and Toughness",
                description: "Skilled training partners to challenge you",
              },
              {
                image: mmaThree,
                alt: "Cage Three",
                title: "Elite Coaching",
                description:
                  "Learn from Scott Sheeley, one of the world's best coaches",
              },
              {
                image: cageThree,
                alt: "MMA One",
                title: "World-Class Facility",
                description:
                  "Bags, over 2,000sq ft of mats, and a full-size octagon",
              },
            ]}
          />
        </div>
      )
      break
    case "bjj":
      content = (
        <div>
          <CardContainer
            cards={[
              {
                image: bjjOne,
                alt: "BJJ One",
                title: "Gi and No-Gi",
                description: "Whichever you prefer, we've got you covered",
              },
              {
                image: bjjTwo,
                alt: "BJJ Two",
                title: "Competition Training",
                description: "Stay sharp so you can dominate in competition",
              },

              {
                image: bjjThree,
                alt: "BJJ Three",
                title: "Fun",
                description:
                  "Stay fit and blow off some steam with the gentle art",
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
        className={`transition-opacity duration-500 overflow-hidden ${
          isOpen ? "h-[65vh] opacity-100" : "h-0 opacity-0"
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

export default Dropdown
