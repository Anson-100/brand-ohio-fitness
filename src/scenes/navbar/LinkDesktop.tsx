import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const LinkDesktop = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink
      className={`mt-1 pb-1 px-1 mx-2 border-b-[1px] ${
        selectedPage === lowerCasePage
          ? " border-b-[1px] border-emerald-theme"
          : "text-zinc-300 border-transparent hover:border-zinc-700"
      }
        
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default LinkDesktop
