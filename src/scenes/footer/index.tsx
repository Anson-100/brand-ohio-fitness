import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-zinc-900">
      <div className="w-full flex flex-col pb-4">
        {" "}
        <AnchorLink
          className="z-10 w-full bg-zinc-800 hover:bg-zinc-800 py-3 text-center text-gray-400 hover:text-gray-300"
          onClick={() => setSelectedPage(SelectedPage.Home)}
          href={`#${SelectedPage.Home}`}
        >
          back to top
        </AnchorLink>
        <p className="logo text-2xl font-dmsans font-bold text-gray-50 text-center mt-4">
          Ohio Fitness & Martial Arts
        </p>
        <p className="text-center text-gray-400">
          ©2024 Ohio Fitness & Martial Arts. All Rights Reserved.
        </p>
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
