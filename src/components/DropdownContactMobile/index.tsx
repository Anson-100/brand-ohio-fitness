import React from "react"

type DropdownProps = {
  section: "staffed-hours" | "contact-info"
  isOpen: boolean
  toggleDropdown: () => void
}

const DropdownContactMobile: React.FC<DropdownProps> = ({
  section,
  isOpen,
  toggleDropdown,
}) => {
  let content

  switch (section) {
    case "staffed-hours":
      content = (
        <div className="pt-2 text-center">
          <p className="font-bold text-[1.2rem]">Mon, Wed, Fri</p>
          <div className="">
            <p className=" text-[1.2rem]">Morning: 8am-12pm</p>
            <p className=" text-[1.2rem]">Evening: 4pm-8:30pm</p>
          </div>
        </div>
      )
      break
    case "contact-info":
      content = (
        <div className="p-2">
          <div className="ml-2 text-[1.2rem]">
            {" "}
            <p className="underline">(937) 599-5425</p>
          </div>
          <br />
          <div className="ml-2 text-[1.2rem]">
            <p>304 E Lake Avenue</p>
            <p>Bellefontaine, OH 43311</p>
            <p>(behind TP Lanes)</p>
          </div>
        </div>
      )
      break
    default:
      content = <div>Default Content</div>
  }

  return (
    <div className="absolute z-30 w-[250px] left-1/2 transform -translate-x-1/2">
      {/* Content Container */}
      <div
        className={` bg-black border-lime border-[1px] rounded-lg bg-opacity-90 transition-all duration-300 overflow-hidden ${
          isOpen ? "h-[155px] opacity-100" : "h-0 opacity-0"
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

export default DropdownContactMobile
