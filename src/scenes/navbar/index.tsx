import { useState } from "react"
import Link from "./Link"
import LinkMobile from "./LinkMobile"

import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  FireIcon,
  ArrowTrendingUpIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid"

import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"

type Props = {
  isTopOfPage: boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between"
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const isAboveSmallMobileScreen = useMediaQuery("(min-width: 400px)")
  const navbarBackground = isTopOfPage ? "" : "bg-zinc-900"
  // const [darkMode, setDarkMode] = useState(false)

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode)

  //   if (!darkMode) {
  //     document.documentElement.classList.add("dark")
  //   } else {
  //     document.documentElement.classList.remove("dark")
  //   }
  // }

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full md:pt-4 py-2 md:pb-0 border-b-[1px] border-zinc-700 backdrop-blur-md bg-opacity-80`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            {/* <img alt="logo" src={Logo} /> */}
            {isAboveSmallMobileScreen ? (
              <p className=" font-bold text-md pb-3">
                Ohio Fitness & Martial Arts
              </p>
            ) : (
              <div>
                {" "}
                <p className="text-gray-100 text-bold text-md">Ohio Fitness</p>
                <p>& Martial Arts</p>
              </div>
            )}

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} gap-8`}>
                <div className={`${flexBetween} gap-4 text-md`}>
                  {/* <button onClick={toggleDarkMode}>
                    {darkMode ? (
                      <SunIcon className="h-6 w-6 text-gray-400 dark:text-gray-400-dark" />
                    ) : (
                      <MoonIcon className="h-6 w-6 text-gray-400 dark:text-gray-400-dark" />
                    )}
                  </button> */}
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Fitness"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Martial Arts"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-zinc-300 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                {" "}
                {!isMenuToggled ? (
                  <Bars3Icon className="w-6 text-black" />
                ) : (
                  <XMarkIcon className="w-6 text-black" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div
          className={`mobile-menu fixed mt-[50px] top-0 right-0 w-3/4 z-40  bg-zinc-800 rounded-l-md transition-all duration-300  ${
            isMenuToggled ? "h-auto" : "h-0"
          }`}
        >
          {/* MENU ITEMS */}
          <div className="flex flex-col items-center text-xl z-50">
            <LinkMobile
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              toggleMenu={() => setIsMenuToggled(false)}
              Icon={HomeIcon}
            />
            <div className="w-full h-[1px] bg-gray-700 m-auto " />

            <LinkMobile
              page="Fitness"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              toggleMenu={() => setIsMenuToggled(false)}
              Icon={ArrowTrendingUpIcon}
            />
            <div className="w-full h-[1px] bg-gray-700 m-auto " />

            <LinkMobile
              page="Martial Arts"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              toggleMenu={() => setIsMenuToggled(false)}
              Icon={FireIcon}
            />
            <div className="w-full h-[1px] bg-gray-700 m-auto " />

            <LinkMobile
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              toggleMenu={() => setIsMenuToggled(false)}
              Icon={PaperAirplaneIcon}
            />
          </div>
        </div>
      )}
      {/* <div className="w-full h-4 bg-zinc-950"></div> */}
    </nav>
  )
}

export default Navbar
