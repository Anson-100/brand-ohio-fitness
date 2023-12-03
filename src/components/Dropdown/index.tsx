import React from "react"
import weightsOne from "@/assets/weights1.jpg"
import weightsTwo from "@/assets/weights2.jpg"
import weightsThree from "@/assets/weights3.jpg"

type DropdownProps = {
  section: "weights" | "cardio" | "crossfit" // Identifier for the section
  isOpen: boolean // State to control if the dropdown is open
  toggleDropdown: () => void // Function to toggle the dropdown state
}

const Dropdown: React.FC<DropdownProps> = ({
  section,
  isOpen,
  toggleDropdown,
}) => {
  let content

  switch (section) {
    case "weights":
      content = (
        <div className="">
          <div className="flex gap-4 max-h-[60vh]">
            <div className="bg-black col-span-1 border-lime border-[1px] overflow-hidden flex-1">
              <div>
                <p className="text-center font-bold text-[1.5rem] p-1">
                  Free Weights
                </p>
                <div className="h-[.4px] w-4/6 bg-lime mx-auto"></div>
                <p className="text-center p-2">
                  Barbells and dumbells galore! Whether it's leg day, chest day,
                  or anything in between, we've got you covered!
                </p>
              </div>
              <img src={weightsThree} alt="" />
            </div>
            <div className="bg-black col-span-1 border-lime border-[1px] overflow-hidden flex-1">
              <div>
                <p className="text-center font-bold text-[1.5rem] p-1">
                  Weight Machines
                </p>
                <div className="h-[.4px] w-4/6 bg-lime mx-auto"></div>
                <p className="text-center p-2">
                  Some of the best weight machines you will find anywhere
                  including a brand new Rogue belt squat machine!
                </p>
              </div>
              <img src={weightsTwo} alt="" />
            </div>
            <div className="bg-black col-span-1 border-lime border-[1px] overflow-hidden flex-1">
              <div>
                <p className="text-center font-bold text-[1.5rem] p-1">
                  Cable Machines
                </p>
                <div className="h-[.4px] w-4/6 bg-lime mx-auto"></div>
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
          Cardio Content <p>a;lsdkfj</p>
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
    default:
      content = <div>Default Content</div>
  }

  return (
    <div>
      {/* Content Container */}
      <div
        className={`transition-all duration-200 overflow-hidden ${
          isOpen ? "h-[60vh] opacity-100" : "h-0 opacity-0"
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
