import { Link } from "react-router-dom"
import AnchorLink from "react-anchor-link-smooth-scroll"
import ITLogo from "@/assets/it logo (nr).png"

const LogoLink: React.FC = () => {
  const isHomePage = window.location.pathname === "/"
  const lowerCasePage = "home"

  const LogoImage: React.FC = () => (
    <img src={ITLogo} alt="IT Logo" className="h-14 py-2" />
  )

  return isHomePage ? (
    // Smooth scroll anchor link for home page
    <AnchorLink href={`#${lowerCasePage}`}>
      <LogoImage />
    </AnchorLink>
  ) : (
    // Regular Link component for other pages
    <Link
      to="/"
      onClick={() => {
        sessionStorage.setItem("selectedPage", lowerCasePage)
      }}
    >
      <LogoImage />
    </Link>
  )
}

export default LogoLink
