import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"

import iconMaps from "@/assets/iconMaps.png"
import iconfb2 from "@/assets/2021_Facebook_icon.svg.png"

import {
  UsersIcon,
  ClockIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({}: Props) => {
  return (
    <section id="contactus" className="h-full ">
      <div className="md:pt-[7rem] pt-[3.5rem] w-[95%] md:w-5/6 mx-auto">
        {/* HEADER AND INTRO DIV */}
        <div className="w-full flex flex-col md:flex-row h-full mt-5">
          {/* HEADER */}
          <div className="md:w-1/3 flex flex-col pt-[2rem] md:pt-[7rem] gap-6 text-center md:text-left mb-10 md:mb-0">
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
              <p className="scene-title md:text-[2rem] text-[1.5rem] font-bold inline-block border-b-[1px] border-emerald-theme pb-2">
                Contact Us
              </p>
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
                We look forward to hearing from you!
              </p>
            </motion.div>
          </div>

          {/* CONTENT SECTION ===============================================================================================*/}
          <div className="md:w-2/3 flex flex-col gap-3 md:gap-6 ml-0 md:ml-12 text-gray-100 h-full md:pt-[2rem]">
            {/* Location */}
            <motion.div
              className="flex items-center bg-zinc-900 border-zinc-700 border-[1px] rounded-sm h-24 md:h-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex justify-between p-2 md:p-4 w-full">
                <div className="flex items-center">
                  <MapPinIcon className="h-6 md:h-8 mr-2 md:mr-4" />
                  <p className="text-base md:text-lg font-bold">Location</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/v3i3PgJ8XBt68VfS8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm py-1 px-2"
                >
                  <div className="flex flex-col text-right">
                    <p>307 E Lake Ave</p>
                    <p>Bellefontaine, OH 43311</p>
                    <p>(behind TP Lanes)</p>
                  </div>
                  <img
                    src={iconMaps}
                    alt="Google Maps Icon"
                    title="Google Maps Icon"
                    className="h-8 opacity-80 grayscale group-hover:grayscale-0"
                  />
                </a>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="flex items-center bg-zinc-900 border-zinc-700 border-[1px] rounded-sm h-24 md:h-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex justify-between p-2 md:p-4 w-full">
                <div className="flex items-center">
                  <DevicePhoneMobileIcon className="h-6 md:h-8 mr-2 md:mr-4" />
                  <p className="text-base md:text-lg font-bold">Contact Info</p>
                </div>
                <div className="flex items-center gap-4">
                  <p>(937) 599-5425</p>
                  <a
                    href="https://www.facebook.com/ofma5425"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm p-2"
                  >
                    <img
                      src={iconfb2}
                      alt="Facebook"
                      className="rounded-full h-8 grayscale group-hover:grayscale-0"
                    />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Staffed Hours */}
            <motion.div
              className="flex items-center bg-zinc-900 border-zinc-700 border-[1px] rounded-sm h-24 md:h-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex justify-between p-2 md:p-4 w-full">
                <div className="flex items-center">
                  <ClockIcon className="h-6 md:h-8 mr-2 md:mr-4" />
                  <p className="text-base md:text-lg font-bold">
                    Staffed Hours
                  </p>
                </div>
                <div className="flex flex-col text-right">
                  <p className="font-bold">Mon, Wed, Fri</p>
                  <p>Morning: 8am-12pm</p>
                  <p>Evening: 4pm-8:30pm</p>
                </div>
              </div>
            </motion.div>

            {/* Member Access */}
            <motion.div
              className="flex items-center bg-zinc-900 border-zinc-700 border-[1px] rounded-sm h-24 md:h-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex justify-between p-2 md:p-4 w-full">
                <div className="flex items-center">
                  <UsersIcon className="h-6 md:h-8 mr-2 md:mr-4" />
                  <p className="text-base md:text-lg font-bold ml-4 ">
                    Member Access
                  </p>
                </div>
                <p className="text-xl md:text-2xl">24 / 7</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
