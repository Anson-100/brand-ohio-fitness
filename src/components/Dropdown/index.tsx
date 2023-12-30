import React from "react"
import weightsOne from "@/assets/weights1.jpg"
import weightsTwo from "@/assets/weights2.jpg"
import weightsFive from "@/assets/weights5.jpg"

import kidsOne from "@/assets/kids1.jpg"
import kidsTwo from "@/assets/kids2.jpg"
import kidsThree from "@/assets/kids3.jpg"

type DropdownProps = {
  section:
    | "weights"
    | "cardio"
    | "crossfit"
    | "kids-class"
    | "adult-mma"
    | "bjj" // Identifier for the section
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
        <div className="">
          <div className="flex max-h-[65vh] bg-grayish">
            <div className="dropdown-section bg-black col-span-1 overflow-hidden flex-1 m-2">
              <div>
                <p className="text-center font-bold text-[1.2rem] p-1">
                  Weight Machines
                </p>
                <div className="h-[.4px] w-1/2 bg-lime mx-auto"></div>
                <p className="text-center p-2">
                  Whether you are doing squats, bench press, or anything in
                  between, we've got you covered!
                </p>
              </div>
              <img src={weightsFive} alt="" />
            </div>
            <div className="dropdown-section bg-black col-span-1 overflow-hidden flex-1 m-2">
              <div>
                <p className="text-center font-bold text-[1.2rem] p-1">
                  Weight Machines
                </p>
                <div className="h-[.4px] w-1/2 bg-lime mx-auto"></div>
                <p className="text-center p-2">
                  Some of the best weight machines you will find anywhere
                  including a brand new Rogue belt squat machine!
                </p>
              </div>
              <img src={weightsTwo} alt="" />
            </div>
            <div className="dropdown-section bg-black col-span-1 overflow-hidden flex-1 m-2">
              <div>
                <p className="text-center font-bold text-[1.2rem] p-1">
                  Cable Machines
                </p>
                <div className="h-[.4px] w-1/2 bg-lime mx-auto"></div>
                <p className="text-center p-2">
                  Get creative with our great selection of cable machines!
                  Everything you need to expand your workout routine!
                </p>
              </div>
              <img src={weightsOne} alt="" />
            </div>
          </div>
        </div>
      )
      break
    case "cardio":
      content = (
        <div>
          <div className="flex max-h-[65vh] bg-grayish">
            <div className="dropdown-section bg-black col-span-1 overflow-hidden flex-1 m-2">
              <div>
                <p className="text-center font-bold text-[1.2rem] p-1">
                  Weight Machines
                </p>
                <div className="h-[.4px] w-1/2 bg-lime mx-auto"></div>
                <p className="text-center p-2">
                  Whether you are doing squats, bench press, or anything in
                  between, we've got you covered!
                </p>
              </div>
              <img src={weightsFive} alt="" />
            </div>
            <div className="dropdown-section bg-black col-span-1 overflow-hidden flex-1 m-2">
              <div>
                <p className="text-center font-bold text-[1.2rem] p-1">
                  Weight Machines
                </p>
                <div className="h-[.4px] w-1/2 bg-lime mx-auto"></div>
                <p className="text-center p-2">
                  Some of the best weight machines you will find anywhere
                  including a brand new Rogue belt squat machine!
                </p>
              </div>
              <img src={weightsTwo} alt="" />
            </div>
            <div className="dropdown-section bg-black col-span-1 overflow-hidden flex-1 m-2">
              <div>
                <p className="text-center font-bold text-[1.2rem] p-1">
                  Cable Machines
                </p>
                <div className="h-[.4px] w-1/2 bg-lime mx-auto"></div>
                <p className="text-center p-2">
                  Get creative with our great selection of cable machines!
                  Everything you need to expand your workout routine!
                </p>
              </div>
              <img src={weightsOne} alt="" />
            </div>
          </div>
        </div>
      )
      break
    case "crossfit":
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
    case "kids-class":
      content = (
        <div className="">
          <div className="flex max-h-[65vh] bg-grayish">
            <div className="dropdown-section bg-black col-span-1 overflow-hidden flex-1 m-2">
              <div>
                <p className="text-center font-bold text-[1.2rem] p-1">
                  Ages 4-15
                </p>
                <div className="h-[.4px] w-1/2 bg-lime mx-auto"></div>
                <p className="text-center p-2">
                  Kids of all ages and all skill levels will be enouraged and
                  challenged by our program!
                </p>
              </div>
              <img src={kidsOne} alt="" />
            </div>
            <div className="dropdown-section bg-black col-span-1 overflow-hidden flex-1 m-2">
              <div>
                <p className="text-center font-bold text-[1.2rem] p-1">
                  Self-Defense
                </p>
                <div className="h-[.4px] w-1/2 bg-lime mx-auto"></div>
                <p className="text-center p-2">
                  Our classes are designed to prepare kids for life and martial
                  arts competition!
                </p>
              </div>
              <img src={kidsTwo} alt="" />
            </div>
            <div className="dropdown-section bg-black col-span-1 overflow-hidden flex-1 m-2">
              <div>
                <p className="text-center font-bold text-[1.2rem] p-1">
                  Confidence
                </p>
                <div className="h-[.4px] w-1/2 bg-lime mx-auto"></div>
                <p className="text-center p-2">
                  Kids will learn to remain composed even when things get
                  difficult!
                </p>
              </div>
              <img src={kidsThree} alt="" />
            </div>
          </div>
        </div>
      )
      break
    case "adult-mma":
      content = (
        <div>
          adult mmaS Content
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
    case "bjj":
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
        className={`transition-all duration-200 overflow-hidden ${
          isOpen ? "h-[70vh] opacity-100" : "h-0 opacity-0"
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
