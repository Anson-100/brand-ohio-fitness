import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import fbIcon from "@/assets/facebook.png"

import legPress from "@/assets/leg press2.jpg"
// import heroImage from "@/assets/gym1.jpg"
type Props = {
  setSelectedPage: (value: SelectedPage) => void
}
;("use client")

import { useState } from "react"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const Home = ({ setSelectedPage }: Props) => {
  const boxStyle =
    "bg-gradient-to-br from-zinc-950 to-zinc-900 border border-l-zinc-800 border-t-zinc-800 border-r-zinc-900 border-b-zinc-900 rounded-b-lg shadow-lg"
  return (
    <section id="home" className="h-[100vh] pb-0 flex items-center relative">
      <div
        className={`h-full w-full md:w-5/6 flex justify-center items-center mx-auto `}
      >
        {/* HEADER===================================================================================== */}
        <div className="flex flex-col md:flex-row w-full lg:w-5/6 h-full md:justify-between items-center m-auto mt-20 md:mt-0">
          <div className="flex flex-col md:gap-8 lg:w-1/2 lg:mx-auto ">
            <motion.div
              className="text-gray-100 text-3xl md:text-[3.2rem] lg:text-[3.5rem] flex flex-col md:gap-8 mb-2 md:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="font-dmsans font-bold ">Ohio Fitness</p>
              <p className=" font-dmsans font-bold ">& Martial Arts</p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-8 text-gray-200 text-base md:text-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="max-w-[25rem] mb-4 hidden md:flex">
                Welcome to Ohio Fitness & Martial Arts, the best gym in the
                Logan County area. Train in a modern facility with 24/7 access
                and a supportive community.
              </p>
            </motion.div>
            {/* BUTTONS========================================================================= */}
            <div className="md:flex flex-col md:flex-row gap-2 mt-6 mx-auto md:m-0 hidden">
              <AnchorLink
                className="zinc-shadow w-52 font-montserrat py-3 bg-emerald-700 hover:bg-emerald-theme flex items-center justify-center font-semibold text-gray-100 active:translate-y-[1px] active:translate-x-[1px] mr-1 rounded-md"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                Join Now
              </AnchorLink>
              <a
                href="https://www.facebook.com/ofma5425"
                target="_blank"
                rel="noopener noreferrer"
                className="zinc-shadow flex justify-center py-3 items-center font-montserrat font-semibold text-gray-50 active:translate-y-[1px] active:translate-x-[1px] w-52 rounded-md group bg-zinc-800 hover:bg-zinc-700"
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
          <div className="flex justify-center md:justify-end w-[95%] md:w-5/6 lg:w-1/2 lg:mx-auto mt-8 lg:mt-0">
            <img
              src={legPress}
              alt=""
              className="shadow-zinc max-h-[30rem] rounded-md"
            />
          </div>
          {/* BUTTONS====================================================== */}
          <div className="flex flex-col md:flex-row gap-6 mt-8 mx-auto md:m-0 md:hidden">
            <AnchorLink
              className="zinc-shadow w-52 font-montserrat py-3 bg-emerald-700 hover:bg-emerald-theme flex items-center justify-center font-semibold text-gray-100 active:translate-y-[1px] active:translate-x-[1px] mr-1 rounded-md"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              Join Now
            </AnchorLink>
            <a
              href="https://www.facebook.com/ofma5425"
              target="_blank"
              rel="noopener noreferrer"
              className="zinc-shadow flex justify-center py-3 items-center font-montserrat font-semibold text-gray-50 active:translate-y-[1px] active:translate-x-[1px] w-52 rounded-md group bg-zinc-800 hover:bg-zinc-700"
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
    </section>
  )
}

export default Home
