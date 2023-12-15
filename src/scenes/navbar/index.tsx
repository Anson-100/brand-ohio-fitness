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
  const navbarBackground = isTopOfPage
    ? ""
    : "bg-black drop-shadow dark:bg-charcoal"
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
            <p className="text-lime text-bold text-md">
              Ohio Fitness & Martial Arts
            </p>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} gap-8`}>
                <div className={`${flexBetween} gap-8 text-md`}>
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
          className={`fixed mt-[70px] top-0 right-0 w-3/4 z-40 bg-black drop-shadow-xl bg-opacity-90 py-8 rounded-bl-md transition-all duration-300 border-lime border-b-[1px] border-l-[1px]  ${
            isMenuToggled ? "h-auto" : "h-0"
          }`}
        >
          {/* MENU ITEMS */}
          <div className="flex flex-col items-center gap-10 text-2xl">
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
