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
        <div className="flex flex-col items-center gap-6 py-2">
          <img src={ITLogo} alt="IT Logo" className="w-20 mt-6" />{" "}
          <div className="flex flex-col ">
            {" "}
            <p className="logo text-xl font-dmsans font-bold text-gray-50 text-center mb-2">
              Ohio Fitness & Martial Arts
            </p>
            <p className="text-center text-gray-400">
              ©2024 Ohio Fitness & Martial Arts. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
