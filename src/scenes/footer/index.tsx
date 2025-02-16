import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types"
import { Link } from "react-router-dom"
import LinkFooter from "./LinkFooter"

import ITLogo from "@/assets/it logo (nr).png"

import IconFB from "@/assets/IconFB.svg"
import IconInsta from "@/assets/IconInsta.svg"
// import IconTikTok from "@/assets/IconTikTok.svg"
import IconYT from "@/assets/IconYT.svg"

type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <footer className="bg-zinc-950">
      <div className="w-full flex flex-col items-center pb-4">
        {" "}
        <AnchorLink
          className="z-10 w-full bg-zinc-900 hover:bg-zinc-800 py-3 text-center text-gray-400 hover:text-gray-300"
          onClick={() => setSelectedPage(SelectedPage.Home)}
          href={`#${SelectedPage.Home}`}
        >
          back to top
        </AnchorLink>
        <div className="flex flex-col justify-center items-center gap-6 pt-6">
          <div className="flex  items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center gap-8">
              <img src={ITLogo} alt="IT Logo" className="w-28 md:w-32 " />{" "}
              <div className="flex items-center gap-4 justify-center">
                <a
                  href="https://www.instagram.com/ohiofitnessandmartialarts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100"
                >
                  <img src={IconInsta} alt="Instagram" className="w-8 h-8" />
                </a>
                <a
                  href="https://www.facebook.com/ofma5425/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100"
                >
                  <img src={IconFB} alt="Facebook" className="w-8 h-8" />
                </a>
                <span className="opacity-80 hover:opacity-100">
                  <img
                    src={IconYT}
                    alt="YouTube"
                    className="w-8 h-8 hover:cursor-pointer"
                  />
                </span>
                {/* <span className="opacity-80 hover:opacity-100">
                  <img
                    src={IconTikTok}
                    alt="TikTok"
                    className="w-8 h-8 hover:cursor-pointer"
                  />
                </span> */}
              </div>
            </div>
            <div className="h-24 w-[1px] bg-zinc-800"></div>
            <div className="flex gap-4 items-center justify-center">
              <div className="flex flex-col gap-4">
                <LinkFooter
                  page="Fitness"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <LinkFooter
                  page="Martial Arts"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <LinkFooter
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                {/* <div className="h-6 w-[1px] mb-1 bg-zinc-600"></div> */}
                <Link
                  to="/waivers"
                  onClick={() => {
                    sessionStorage.setItem("selectedPage", "waivers")
                  }}
                  className=" text-gray-200 hover:underline flex items-center justify-center"
                >
                  Waivers
                  <span className="ml-1 text-emerald-theme text-lg">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            {" "}
            {/* <p className="logo text-xl font-dmsans font-bold text-gray-50 text-center mb-2">
              Ohio Fitness & Martial Arts
            </p> */}
            <p className="text-center text-gray-500 text-sm md:text-base">
              ©2025 Ohio Fitness & Martial Arts. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
