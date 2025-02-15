import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { useMemo } from "react"

type Props = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
  toggleMenu: () => void
  Icon: React.ComponentType<{ className?: string }>
}

const LinkMobile = ({
  page,
  selectedPage,
  setSelectedPage,
  toggleMenu,
  Icon,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  const handleClick = () => {
    setSelectedPage(lowerCasePage)
    toggleMenu()
  }

  const PageIcon = useMemo(() => (Icon ? Icon : null), [Icon])

  return (
    <AnchorLink
      className={`py-8 px-4 border-b-[1px] w-5/6 flex items-center ${
        selectedPage === lowerCasePage
          ? " border-b-[1px] border-emerald-theme text-gray-50"
          : "text-gray-400 border-transparent hover:border-zinc-700"
      }`}
      href={`#${lowerCasePage}`}
      onClick={handleClick}
    >
      {PageIcon && <PageIcon className="h-6 w-6 mr-4" />}{" "}
      {/* Render icon if provided */}
      {page}
    </AnchorLink>
  )
}

export default LinkMobile
