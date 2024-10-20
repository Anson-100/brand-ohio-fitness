import Navbar from "@/scenes/navbar"

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

      <div className="h-[5rem] bg-zinc-950 w-full"></div>
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
