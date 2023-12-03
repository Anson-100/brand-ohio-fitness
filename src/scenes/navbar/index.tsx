import { useState } from "react"
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
// import ActionButton from "@/shared/ActionButton"

type Props = {
  isTopOfPage: boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between"
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const navbarBackground = isTopOfPage ? "" : "bg-black drop-shadow"
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)

    if (!darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-4 md:py-6 transition-all duration-300`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            {/* <img alt="logo" src={Logo} /> */}
            <p className="text-lime text-bold">Ohio Fitness & Martial Arts</p>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} gap-8`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <button onClick={toggleDarkMode}>
                    {darkMode ? (
                      <SunIcon className="h-6 w-6 text-gray-400 dark:text-gray-400-dark" />
                    ) : (
                      <MoonIcon className="h-6 w-6 text-gray-400 dark:text-gray-400-dark" />
                    )}
                  </button>
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
                  {/* <ActionButton setSelectedPage={setSelectedPage}>
                    Contact Us
                  </ActionButton> */}
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-lime p-2"
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
          className={`fixed right-0 top-[72px] z-40 h-auto w-2/3 bg-black drop-shadow-xl bg-opacity-90 py-8 rounded-bl-md transform transition-all duration-[400ms] ${
            isMenuToggled ? "translate-y-full" : "translate-y-0"
          }`}
        >
          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
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
      )}
    </nav>
  )
}

export default Navbar
