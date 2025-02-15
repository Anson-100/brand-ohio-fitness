import Navbar from "@/scenes/navbar"

import Home from "@/scenes/home"
import MartialArts from "@/scenes/martialArts"
import Fitness from "@/scenes/fitness"
import ContactUs from "@/scenes/contactUs"
import Waivers from "@/scenes/waivers"
import LineGradient from "@/components/LineGradient"

import Footer from "@/scenes/footer"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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
    <Router>
      <div className="app bg-black dark:bg-grayish">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        <Routes>
          {/* Main Scrollable Page */}
          <Route
            path="/"
            element={
              <>
                <Home setSelectedPage={setSelectedPage} />
                <Fitness setSelectedPage={setSelectedPage} />
                <MartialArts setSelectedPage={setSelectedPage} />
                <LineGradient />
                <ContactUs setSelectedPage={setSelectedPage} />

                <Footer
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </>
            }
          />

          {/* Standalone Route for Waivers */}
          <Route path="/waivers" element={<Waivers />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
