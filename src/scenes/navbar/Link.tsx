import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink
      className={`pb-4 pt-1 px-3 border-b-[3px] ${
        selectedPage === lowerCasePage
          ? " border-b-[3px] border-emerald-theme"
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

export default Link
