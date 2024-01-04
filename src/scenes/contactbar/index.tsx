// import { useState } from "react"
import { PhoneIcon } from "@heroicons/react/24/solid"
import fbIcon from "@/assets/facebook.png"

import messengerIcon from "@/assets/messenger.png"
// import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"

type Props = {
  isTopOfPage: boolean
  isFooterInView: boolean
}

const ContactBar = ({ isTopOfPage, isFooterInView }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  const contactbarBackground = isFooterInView
    ? "opacity-0 transition-opacity duration-200 pointer-events-none"
    : "bg-black drop-shadow dark:bg-charcoal opacity-100 transition-opacity duration-200"

  const contactbarBackgroundMobile =
    isFooterInView || isTopOfPage
      ? "opacity-0 pointer-events-none"
      : "bg-black drop-shadow dark:bg-charcoal opacity-100"
  return (
    <div>
      {isAboveMediumScreens ? (
        <a
          href="https://www.facebook.com/ofma5425"
          target="_blank"
          rel="noopener noreferrer"
          className={`${contactbarBackground} group border-[2px] border-charcoal hover:border-lime rounded-full p-1 fixed bottom-10 right-10`}
        >
          <img
            src={fbIcon}
            alt="Facebook"
            className="group-hover:bg-lime rounded-full h-10"
          />
        </a>
      ) : (
        <div
          className={`${contactbarBackgroundMobile} transition-all duration-200 w-full sm:w-full flex flex-col items-center fixed bottom-0`}
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
