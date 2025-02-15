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
      className={` text-gray-200  ${
        selectedPage === lowerCasePage ? " " : "hover:underline"
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
