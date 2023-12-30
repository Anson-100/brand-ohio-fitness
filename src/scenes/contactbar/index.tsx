// import { useState } from "react"
import { PhoneIcon } from "@heroicons/react/24/solid"
import messengerIcon from "@/assets/messenger.png"
// import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"

type Props = {
  isTopOfPage: boolean
  isFooterInView: boolean
}

const ContactBar = ({ isTopOfPage, isFooterInView }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  const contactbarBackgroundBottom =
    isFooterInView || isTopOfPage
      ? "opacity-0"
      : "bg-black drop-shadow dark:bg-charcoal opacity-100"
  return (
    <div>
      {isAboveMediumScreens ? (
        ""
      ) : (
        <div
          className={`${contactbarBackgroundBottom}  transition-all duration-200 w-full sm:w-full flex flex-col items-center fixed bottom-0`}
        >
          <div className="h-[1px] bg-lime w-4/6 sm:w-2/3"></div>
          <div className="flex gap-16 items-center">
            <a href="tel:9375995425">
              <PhoneIcon className="h-[3rem] m-2" />
            </a>
            <button>
              <img
                onClick={() =>
                  window.open("https://www.facebook.com/ofma5425", "_blank")
                }
                src={messengerIcon}
                alt="chat with us on messenger"
                className="h-[3rem] bg-opacity-0"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactBar
