import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"

import iconMaps from "@/assets/iconMaps.png"
import iconfb2 from "@/assets/2021_Facebook_icon.svg.png"
// import useMediaQuery from "@/hooks/useMediaQuery"

import {
  UsersIcon,
  ClockIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

// const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

const ContactUs = ({ setSelectedPage }: Props) => {
  // const boxStyle =
  //   "bg-gradient-to-br from-emerald-900 to-zinc-900 border border-l-emerald-700 border-t-emerald-700 border-r-emerald-950 border-b-emerald-950 rounded-sm shadow-lg flex items-center h-24 md:h-32"

  const boxStyle =
    "relative bg-gradient-to-br from-zinc-800 to-zinc-900 border border-l-zinc-700 border-t-zinc-700 border-r-zinc-900 border-b-zinc-900 rounded shadow-lg  flex items-center  h-24 md:h-32"
  return (
    <section
      id="contactus"
      className="min-h-full relative isolate overflow-hidden"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* PATTERN DESIGN=========================================== */}
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-zinc-800 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
        <div className="md:pt-[7rem] pb-20 pt-[3.5rem] w-full xs:w-3/4 md:w-5/6 mx-auto">
          {/* HEADER AND INTRO DIV */}

          <div className="flex flex-col md:flex-row h-full mt-5 xs:w-full w-[90%] mx-auto">
            {/* HEADER */}
            <div className="md:w-1/3 flex flex-col pt-[2rem] md:pt-[7rem] gap-6  mb-10 md:mb-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h1 className="scene-title md:text-[2rem] text-[1.5rem] font-bold inline-block border-b-[1px] border-emerald-theme pb-2">
                  Contact Us
                </h1>
              </motion.div>
              <motion.div
                className="text-base lg:text-lg hidden md:inline-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="w-3/4 mx-auto md:mx-0 mb-8">
                  Stop by or call anytime during staffed hours or{" "}
                  <span className="hover:text-emerald-400 underline">
                    <a
                      href="https://www.facebook.com/ofma5425"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      message us on facebook.
                    </a>
                  </span>{" "}
                  Filling out a waiver online is the best way to avoid wait
                  times during business hours. We look forward to hearing from
                  you!
                </p>
              </motion.div>
            </div>

            {/* CONTENT SECTION ===============================================================================================*/}
            <div className="md:w-2/3 flex flex-col gap-3 md:gap-6 ml-0 md:ml-12 text-gray-100 h-full md:pt-[2rem]">
              {/* Location */}
              <motion.div
                className={`${boxStyle}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {/* <div className="absolute h-full w-2 md:w-3 bg-zinc-700"></div> */}
                <div className="flex justify-between p-2 md:p-4 w-full">
                  <div className="ml-1 flex items-center">
                    <MapPinIcon className="h-6 md:h-8 mr-2 md:mr-4 text-zinc-500" />
                    <p className="text-base md:text-lg font-bold">Location</p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/v3i3PgJ8XBt68VfS8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-2 underline rounded"
                  >
                    <div className="group flex items-center justify-center gap-2  rounded-full ">
                      <img
                        src={iconMaps}
                        alt="Google Maps Icon"
                        title="Google Maps Icon"
                        className="rounded-full h-5 md:h-8"
                      />
                    </div>

                    <div className="flex flex-col text-right text-sm sm:text-base">
                      <p>307 E Lake Ave</p>
                      <p>Bellefontaine, OH 43311</p>
                      <p>(behind TP Lanes)</p>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className={`${boxStyle}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {/* <div className="absolute h-full w-2 md:w-3 bg-zinc-700"></div> */}

                <div className="flex justify-between p-2 md:p-4 w-full">
                  <div className="ml-1 flex items-center">
                    <DevicePhoneMobileIcon className="h-6 md:h-8 mr-2 md:mr-4 text-zinc-500" />
                    <p className="text-base md:text-lg font-bold">
                      Contact Info
                    </p>
                  </div>
                  <div className="flex flex-col text-sm sm:text-base items-center gap-5">
                    {" "}
                    <a
                      href="https://www.facebook.com/ofma5425"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center underline"
                    >
                      message on
                      <img
                        src={iconfb2}
                        alt="Facebook"
                        className="rounded-full ml-1 h-5 md:h-8 "
                      />
                    </a>
                    <p className="hidden sm:inline text-sm sm:text-base">
                      (937) 599-5425
                    </p>
                    <a
                      href="tel:9375995425"
                      className="text-sm sm:text-base underline sm:hidden"
                    >
                      (937) 599-5425
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Staffed Hours */}
              <motion.div
                className={`${boxStyle}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {/* <div className="absolute h-full w-2 md:w-3 bg-zinc-700"></div> */}

                <div className="flex justify-between p-2 md:p-4 w-full">
                  <div className="ml-1 flex items-center">
                    <ClockIcon className="h-6 md:h-8 mr-2 md:mr-4 text-zinc-500" />
                    <p className="text-base md:text-lg font-bold">
                      Staffed Hours
                    </p>
                  </div>
                  <div className="flex flex-col text-right text-sm sm:text-base">
                    <p className="">Mon, Wed, Fri</p>
                    <p>AM: 8am-12pm</p>
                    <p>PM: 4pm-8:30pm</p>
                  </div>
                </div>
              </motion.div>

              {/* Member Access */}
              <motion.div
                className={`${boxStyle}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {/* <div className="absolute h-full w-2 md:w-3 bg-zinc-700"></div> */}

                <div className="flex justify-between p-2 md:p-4 w-full">
                  <div className="ml-1 flex items-center">
                    <UsersIcon className="h-6 md:h-8 mr-2 md:mr-4 text-zinc-500" />
                    <p className="text-base md:text-lg font-bold">
                      Member Access
                    </p>
                  </div>
                  <p className="text-xl md:text-2xl">24 / 7</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs
