import React from "react"
import { Link } from "react-router-dom"
import AnchorLink from "react-anchor-link-smooth-scroll"
import ITLogo from "@/assets/it logo (nr).png"

interface LogoLinkProps {
  selectedPage: string
  setSelectedPage: (page: string) => void
}

const LogoLink: React.FC<LogoLinkProps> = ({
  selectedPage,
  setSelectedPage,
}) => {
  const isHomePage = window.location.pathname === "/"
  const lowerCasePage = "home"

  const LogoImage: React.FC = () => (
    <img src={ITLogo} alt="Cool English Logo" className="h-16 py-2" />
  )

  return isHomePage ? (
    // Smooth scroll anchor link for home page
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      <LogoImage />
    </AnchorLink>
  ) : (
    // Regular Link component for other pages
    <Link
      to="/"
      onClick={() => {
        setSelectedPage("home")
        sessionStorage.setItem("selectedPage", "home")
      }}
    >
      <LogoImage />
    </Link>
  )
}

export default LogoLink
