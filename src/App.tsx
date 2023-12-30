import Navbar from "@/scenes/navbar"
import ContactBar from "@/scenes/contactbar"
import Home from "@/scenes/home"
import MartialArts from "@/scenes/martialArts"
import Fitness from "@/scenes/fitness"
import ContactUs from "@/scenes/contactUs"
import Footer from "@/scenes/footer"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  const [isFooterInView, setIsFooterInView] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      // Select the footer element
      const footer = document.querySelector("footer")
      if (footer) {
        const rect = footer.getBoundingClientRect()
        // Check if the top of the footer is above the bottom of the viewport
        setIsFooterInView(rect.top < window.innerHeight)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Cleanup function
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app bg-black dark:bg-grayish">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Fitness setSelectedPage={setSelectedPage} />
      <MartialArts setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <ContactBar isTopOfPage={isTopOfPage} isFooterInView={isFooterInView} />
      <div className="h-[5rem] bg-black w-full"></div>
      <Footer />
    </div>
  )
}

export default App
