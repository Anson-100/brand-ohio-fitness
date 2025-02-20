import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import fbIcon from "@/assets/facebook.png"
import useMediaQuery from "@/hooks/useMediaQuery"
import { Link } from "react-router-dom"
import Greeting from "./greeting"
// import { CheckCircleIcon } from "@heroicons/react/24/solid"

import legPress from "@/assets/leg press2.jpg"
// import heroImage from "@/assets/gym1.jpg"
type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  // const boxStyle =
  //   "bg-gradient-to-br from-zinc-950 to-zinc-900 border border-l-zinc-800 border-t-zinc-800 border-r-zinc-900 border-b-zinc-900 rounded-b-lg shadow-lg"

  const isAboveSmallScreens = useMediaQuery("(min-width:768px)")

  return (
    <section
      id="home"
      className="min-h-[100vh] pb-0 flex items-center relative isolate"
    >
      {/* BG DESIGN PATTERN================================== */}
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-zinc-950 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)] "
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-zinc-950">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      <div
        className={`h-full w-full lg:w-5/6 flex justify-center items-center mx-auto `}
      >
        {/* HEADER===================================================================================== */}
        {isAboveSmallScreens ? (
          <div className="flex flex-col sm:flex-row w-3/4 md:w-[90%]  h-full md:justify-between m-auto mt-20 md:mt-0">
            <div className="flex flex-col gap-6 md:gap-6 lg:w-1/2 lg:mx-auto mt-16 md:mt-0">
              {/* WAIVER ADVO========================================= */}
              <div className="w-full flex">
                <Link
                  to="/waivers"
                  onClick={() => {
                    sessionStorage.setItem("selectedPage", "waivers")
                  }}
                  className="relative rounded-full px-3 py-1 text-sm/6 bg-gray-600 bg-opacity-10 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 mb-8 md:mb-0"
                >
                  Fill out a waiver online{" "}
                  <a href="#" className="font-semibold text-emerald-500">
                    <span className="absolute inset-0" />
                    Learn more <span>&rarr;</span>
                  </a>
                </Link>
              </div>
              <motion.div
                className="text-gray-100 text-[3.3rem] md:text-[3.5rem] lg:text-[4rem] flex flex-col  sm:gap-3 md:gap-0 md:flex-col  md:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="font-dmsans font-bold leading-tight">
                  Ohio Fitness{" "}
                </p>
                <p className=" font-dmsans font-bold leading-tight">
                  & Martial Arts
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col text-gray-300 text-base ml:text-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {isAboveSmallScreens ? (
                  <p className="sm:max-w-[35rem] md:max-w-[40rem] mb-4 ">
                    Train in a modern facility with 24/7 access, top-tier
                    equipment, and expert coaching. Whether you're here to build
                    strength, improve endurance, or master martial arts, you'll
                    find a supportive community that helps you reach your goals.
                  </p>
                ) : (
                  <p className="sm:max-w-[32rem] md:max-w-[40rem] mb-4">
                    Welcome to Ohio Fitness & Martial Arts, the top gym in Logan
                    County. Enjoy 24/7 access to a modern facility with expert
                    coaching, top-tier equipment, and a supportive community to
                    help you build strength, improve endurance, and master
                    martial arts.
                  </p>
                )}
              </motion.div>
              {/* BUTTONS========================================================================= */}
              <div className="flex flex-row gap-2 md:gap-4  md:m-0 text-sm md:text-base">
                <AnchorLink
                  className="font-montserrat py-3 bg-emerald-700 hover:bg-emerald-theme flex items-center justify-center font-semibold text-gray-100 active:translate-y-[1px] active:translate-x-[1px] mr-1 rounded-md w-full md:w-44"
                  onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                  href={`#${SelectedPage.ContactUs}`}
                >
                  Join Now
                </AnchorLink>
                <a
                  href="https://www.facebook.com/ofma5425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center py-3 items-center font-montserrat bg-zinc-800 bg-opacity-40 hover:bg-opacity-100 text-gray-50 active:translate-y-[1px] active:translate-x-[1px] w-full md:w-44 rounded-md group border border-zinc-300/20"
                >
                  <p className="mr-2">message us on</p>
                  <img
                    src={fbIcon}
                    alt="Facebook"
                    className="rounded-full h-6 opacity-80 group-hover:opacity-100"
                  />
                </a>
              </div>
            </div>
            {/* IMAGE=============================================== */}
            <div className="flex md:justify-end w-[95%] md:w-5/6 lg:w-1/2 lg:mt-0 sm:hidden md:flex">
              <img
                src={legPress}
                alt=""
                className="shadow-zinc  md:max-h-[26rem] ml:max-h-[30rem] rounded-md"
              />
            </div>
          </div>
        ) : (
          // MOBILE SECTION================================================================
          <div className="w-full">
            <div className="h-full w-[90%] xs:w-3/4 flex flex-col gap-2 mx-auto">
              {/* <div className="w-full flex">
                <Link
                  to="/waivers"
                  onClick={() => {
                    sessionStorage.setItem("selectedPage", "waivers")
                  }}
                  className="relative rounded-full px-3 py-1 text-sm/6 bg-gray-600 bg-opacity-10 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 mb-8 md:mb-0"
                >
                  Fill out a waiver online{" "}
                  <a href="#" className="font-semibold text-emerald-500">
                    <span className="absolute inset-0" />
                    Learn more <span>&rarr;</span>
                  </a>
                </Link>
              </div> */}
              <Greeting />
              <div className="text-gray-100 text-[3.4rem] md:text-[3.5rem] lg:text-[4rem] flex flex-col sm:flex-row md:flex-col  md:mb-0">
                <p className="font-dmsans font-bold leading-tight">
                  Ohio Fitness{" "}
                </p>
                <p className=" font-dmsans font-bold leading-tight">
                  & Martial Arts
                </p>
              </div>
              {/* <div className="flex flex-col text-gray-300 gap-2 mt-2">
              <div className="flex gap-2">
                <CheckCircleIcon className="w-6 text-gray-600" />
                <p>Expert Coaching</p>
              </div>
              <div className="flex gap-2">
                <CheckCircleIcon className="w-6 text-gray-600" />
                <p>24 / 7 Member Access</p>
              </div>
              <div className="flex gap-2">
                <CheckCircleIcon className="w-6 text-gray-600" />
                <p>24 / 7 Member Access</p>
              </div>
            </div> */}
              <div className="flex flex-col gap-4 mt-8">
                <AnchorLink
                  className="font-montserrat py-3 bg-emerald-700 hover:bg-emerald-theme flex items-center justify-center font-semibold text-gray-100 active:translate-y-[1px] active:translate-x-[1px] mr-1 rounded-md "
                  onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                  href={`#${SelectedPage.ContactUs}`}
                >
                  Join Now
                </AnchorLink>
                <Link
                  to="/waivers"
                  onClick={() => {
                    sessionStorage.setItem("selectedPage", "waivers")
                  }}
                  className="flex justify-center py-3 gap-1 items-center font-montserrat bg-zinc-800 bg-opacity-40 hover:bg-opacity-100 text-gray-50 active:translate-y-[1px] active:translate-x-[1px]  rounded-md group border border-zinc-300/20"
                >
                  Fill out a waiver online{" "}
                  <span className="text-emerald-theme text-lg">&rarr;</span>
                </Link>{" "}
                <a
                  href="https://www.facebook.com/ofma5425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center py-3 items-center font-montserrat bg-zinc-800 bg-opacity-40 hover:bg-opacity-100 text-gray-50 active:translate-y-[1px] active:translate-x-[1px]  rounded-md group border border-zinc-300/20"
                >
                  <p className="mr-2">message us on</p>
                  <img
                    src={fbIcon}
                    alt="Facebook"
                    className="rounded-full h-6 opacity-80 group-hover:opacity-100"
                  />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Home
