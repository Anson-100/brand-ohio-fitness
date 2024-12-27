import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types"
import ITLogo from "@/assets/it logo (nr).png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Footer = ({ setSelectedPage }: Props) => {
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
        <div className="flex flex-col items-center gap-4">
          <img src={ITLogo} alt="IT Logo" className="w-16 mt-6" />{" "}
          <div className="flex flex-col ">
            {" "}
            <p className="logo text-xl font-dmsans font-bold text-gray-50 text-center ">
              Ohio Fitness & Martial Arts
            </p>
            <p className="text-center text-gray-400">
              ©2024 Ohio Fitness & Martial Arts. All Rights Reserved.
            </p>
          </div>
        </div>
        {/* <div className="flex mx-auto gap-5 mb-3">
          <div>
            <p>304 E Lake Avenue</p>
            <p>Bellefontaine, OH 43311</p>
            <p>(behind TP Lanes)</p>
          </div>
          <div>
            <p>Mon, Wed, Fri</p>
            <p>Morning: 8am-12pm</p>
            <p>Evening: 4pm-8:30pm</p>
          </div>
        </div>
        <p className="underline text-center">(937) 599-5425</p> */}
      </div>
    </footer>
  )
}

export default Footer
