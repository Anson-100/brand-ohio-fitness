import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import LinkDesktop from "./LinkDesktop"
import LinkMobile from "./LinkMobile"

import LogoLink from "@/components/LogoLink"

import {
  Bars2Icon,
  XMarkIcon,
  HomeIcon,
  FireIcon,
  ArrowTrendingUpIcon,
  PaperAirplaneIcon,
  DocumentTextIcon,
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

  const navbarBackground = isTopOfPage ? "bg-zinc-900" : "bg-zinc-900"

  const menuRef = useRef<HTMLDivElement>(null)
  const location = useLocation() // Get the current route

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuToggled(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Check if the current route is `/waivers`
  const isWaiversPage = location.pathname === "/waivers"

  return (
    <nav className="">
      <div
        className={`${navbarBackground} ${flexBetween} fixed border-t-[5px] border-t-zinc-700 top-0 z-30 w-full max-w-full border-b-[1px] border-zinc-700 backdrop-blur-md bg-opacity-80 h-[4.5rem]`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <LogoLink />

            {/* RIGHT SIDE */}
            {isWaiversPage ? (
              // Simplified Navbar for Waivers Page
              <div>
                <Link
                  to="/"
                  onClick={() => {
                    setSelectedPage(SelectedPage.Home)
                    sessionStorage.setItem("selectedPage", "home")
                  }}
                  className="flex items-center justify-center gap-2 py-2 px-4 m-0 md:m-2 bg-zinc-800 hover:bg-zinc-700 rounded-md text-zinc-300 hover:text-zinc-100"
                >
                  <div className="font-semibold text-emerald-500 text-lg">
                    &larr;
                  </div>
                  Home{" "}
                </Link>
              </div>
            ) : isAboveMediumScreens ? (
              // Full Navbar for Main Pages
              <div className={`${flexBetween} gap-8`}>
                <div
                  className={`${flexBetween} gap-4 text-md bg-zinc-900 my-1 pl-4 pr-2 rounded-lg`}
                >
                  <LinkDesktop
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <LinkDesktop
                    page="Fitness"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <LinkDesktop
                    page="Martial Arts"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <LinkDesktop
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <div className="h-6 w-[1px] mb-1 bg-zinc-600"></div>
                  <Link
                    to="/waivers"
                    onClick={() => {
                      sessionStorage.setItem("selectedPage", "waivers")
                    }}
                    className="flex items-center justify-center gap-2 py-2 px-4 m-2 bg-zinc-800 hover:bg-zinc-700 rounded-md border border-emerald-theme"
                  >
                    Waivers
                    <div className="font-semibold text-emerald-500 text-lg">
                      &rarr;
                    </div>
                  </Link>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                {!isMenuToggled ? (
                  <Bars2Icon className="w-6 text-gray-400" />
                ) : (
                  <XMarkIcon className="w-6 text-gray-400" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div
          ref={menuRef}
          className={`mobile-menu fixed mt-[60px] top-0 right-0 w-3/4 max-w-[350px] sm:w-1/3 z-40 bg-zinc-800 rounded-l-md transition-all duration-300 zinc-shadow ${
            isMenuToggled ? "h-auto" : "h-0"
          }`}
        >
          {/* MENU ITEMS */}
          <div className="flex flex-col items-center text-lg z-50">
            <>
              <LinkMobile
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                toggleMenu={() => setIsMenuToggled(false)}
                Icon={HomeIcon}
              />
              <div className="w-full h-[1px] bg-gray-700 m-auto" />
              <LinkMobile
                page="Fitness"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                toggleMenu={() => setIsMenuToggled(false)}
                Icon={ArrowTrendingUpIcon}
              />
              <div className="w-full h-[1px] bg-gray-700 m-auto" />
              <LinkMobile
                page="Martial Arts"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                toggleMenu={() => setIsMenuToggled(false)}
                Icon={FireIcon}
              />
              <div className="w-full h-[1px] bg-gray-700 m-auto" />
              <LinkMobile
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                toggleMenu={() => setIsMenuToggled(false)}
                Icon={PaperAirplaneIcon}
              />
              <div className="w-full h-[1px] bg-gray-700 m-auto" />
              <Link
                to="/waivers"
                onClick={() => {
                  sessionStorage.setItem("selectedPage", "waivers")
                  setIsMenuToggled(false)
                }}
                className="py-8 px-4 w-full pl-10 bg-zinc-700 flex items-center rounded-bl-md text-gray-300"
              >
                <DocumentTextIcon className="h-6 w-6 mr-4 text-gray-300" />
                <p>
                  Waivers{" "}
                  <span className="text-emerald-theme text-lg">&rarr;</span>
                </p>
              </Link>
            </>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
