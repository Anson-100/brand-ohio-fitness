import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import useMediaQuery from "@/hooks/useMediaQuery"

import fbIcon from "@/assets/facebook.png"
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
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  // const isAboveSmallPhone = useMediaQuery(
  //   "(min-height: 700px) and (min-width: 420px)"
  // )
  const isAboveSmallWidth = useMediaQuery("(min-width:768px)")
  // const isNotShortScreen = useMediaQuery("(min-height:800px)")

  // const [openDropdown, setOpenDropdown] = useState<
  //   "staffed-hours" | "contact-info" | null
  // >(null)

  // const toggleDropdown = (section: "staffed-hours" | "contact-info") => {
  //   if (openDropdown === section) {
  //     setOpenDropdown(null)
  //   } else {
  //     setOpenDropdown(section)
  //   }
  // }

  return (
    <section id="contactus" className="h-full pt-[4.5rem]">
      <div className="contact-main w-5/6 mx-auto">
        {/* HEADER AND INTRO DIV */}
        {isAboveMediumScreens ? (
          <div className="w-full flex h-full">
            <div className="grid grid-cols-12 my-auto">
              {" "}
              {/* 24/7 */}
              <div className="col-span-3 flex items-center mr-5 ">
                <div className="w-full h-5/6 flex flex-col justify-beginning">
                  <div className="mr-auto">
                    <motion.div
                      className=""
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      {" "}
                      <p className="scene-title text-[2rem] font-bold">
                        Contact Us
                      </p>
                    </motion.div>

                    <div className="bg-gradient-theme h-[1px] max-w-[200px] mt-5 mb-10"></div>
                  </div>{" "}
                  <div className="mx-auto flex-1">
                    <motion.div
                      className=""
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <p className=" mb-10">
                        Stop by or call anytime during staffed hours or{" "}
                        <span className="hover:underline text-emerald-theme">
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
                  </div>{" "}
                </div>
              </div>
              {/* CONTENT SECTION=============================================================================== */}
              <div className="col-span-9 my-auto">
                <div className="grid grid-rows-8 gap-4 ml-12 text-gray-100">
                  {/* Location======================================================================== */}
                  <div className="flex items-center row-span-2 bg-zinc-900 border-zinc-700 border-[1px] rounded-sm">
                    <motion.div
                      className="flex-1"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <div className=" flex justify-between p-4">
                        <div className="flex items-center">
                          <MapPinIcon className="h-6" />{" "}
                          <p className="text-[1.1rem] font-bold text-center ml-2 py-6">
                            Location
                          </p>
                        </div>

                        <a
                          href="https://maps.app.goo.gl/v3i3PgJ8XBt68VfS8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col w-1/4 my-auto text-"
                        >
                          {" "}
                          <p className="">307 E Lake Ave</p>
                          <p className=" ">Bellefontaine, OH 43311</p>
                          <p className=" ">(behind TP Lanes)</p>
                        </a>
                      </div>
                    </motion.div>
                  </div>{" "}
                  {/* HOURS =========================*/}
                  <div className="flex items-center row-span-2 bg-zinc-900 border-zinc-700 border-[1px] rounded-sm">
                    <motion.div
                      className="flex-1"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <div className="  flex justify-between p-4">
                        <div className="flex items-center">
                          <ClockIcon className="h-6" />{" "}
                          <p className="text-[1.1rem] font-bold text-center ml-2 py-6">
                            Staffed Hours
                          </p>
                        </div>

                        <div className="flex flex-col w-1/4 my-auto">
                          {" "}
                          <p className="font-bold text-[1rem] ">
                            Mon, Wed, Fri
                          </p>
                          <p className=" ">Morning: 8am-12pm</p>
                          <p className=" ">Evening: 4pm-8:30pm</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>{" "}
                  {/* ======================================================================================= */}
                  <div className="flex items-center row-span-2 bg-zinc-900 border-zinc-700 border-[1px] rounded-sm">
                    <motion.div
                      className="flex-1"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <div className=" flex justify-between p-4">
                        <div className="flex items-center">
                          <UsersIcon className="h-6" />{" "}
                          <p className="text-[1.1rem] font-bold text-center ml-2 py-6">
                            Member Access
                          </p>
                        </div>

                        <p className="w-1/4 my-auto text-center text-2xl">
                          24 / 7
                        </p>
                      </div>
                    </motion.div>
                  </div>{" "}
                  {/* Contact Info============================================================================== */}
                  <div className="flex items-center row-span-2 bg-zinc-900 border-zinc-700 border-[1px] rounded-sm">
                    <motion.div
                      className="flex-1"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <div className=" flex justify-between p-4">
                        <div className="flex items-center">
                          <DevicePhoneMobileIcon className="h-6" />{" "}
                          <p className="text-[1.1rem] font-bold text-center ml-2 py-6">
                            Contact Info
                          </p>
                        </div>

                        <div className="flex items-center w-1/4 my-auto">
                          <p className="">(937) 599-5425</p>
                          <p className="px-4 text-gray-400"> or </p>
                          <a
                            href="https://www.facebook.com/ofma5425"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 rounded-full p-1"
                          >
                            <img
                              src={fbIcon}
                              alt="Facebook"
                              className="group-hover:bg-blue-400 rounded-full h-6 opacity-80 group-hover:opacity-100"
                            />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center h-full">
            {/* MOBILE HEADER */}
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="scene-title text-[1.75rem] font-bold mt-2">
                Contact Us
              </p>
              <div className="h-[1px] bg-gradient-theme mt-3 mb-5 w-full"></div>
            </motion.div>
            {isAboveSmallWidth ? (
              <motion.div
                className="flex justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="text-center text-lg w-2/3 mb-5">
                  Stop by or call anytime during staffed hours or hit us up on
                  facebook. We look forward to hearing from you!
                </p>
              </motion.div>
            ) : (
              ""
            )}
            <div className="pt-2">
              <div className="grid grid-rows-8 gap-4 text-gray-100">
                {/* HOURS */}
                <div className="flex items-center row-span-2 bg-zinc-900 border-zinc-700 border-[1px] rounded-sm">
                  <motion.div
                    className="flex-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <div className="  flex justify-between p-2">
                      <div className="flex items-center">
                        <ClockIcon className="h-6" />{" "}
                        <p className="text-[1rem] font-bold text-center ml-2 py-2">
                          Staffed Hours
                        </p>
                      </div>

                      <div className="flex flex-col w-2/5 my-auto text-gray-300">
                        {" "}
                        <p className="font-bold">M W F</p>
                        <p className=" ">8am-12pm</p>
                        <p className=" ">4pm-8:30pm</p>
                      </div>
                    </div>
                  </motion.div>
                </div>{" "}
                {/* ======================================================================================= */}
                <div className="flex items-center row-span-2 bg-zinc-900 border-zinc-700 border-[1px] rounded-sm">
                  <motion.div
                    className="flex-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <div className=" flex justify-between p-2">
                      <div className="flex items-center">
                        <UsersIcon className="h-6" />{" "}
                        <p className="text-[1rem] font-bold text-center ml-2 py-2">
                          Member Access
                        </p>
                      </div>

                      <p className="w-2/5 my-auto text-gray-300">24/7</p>
                    </div>
                  </motion.div>
                </div>{" "}
                {/* Location======================================================================== */}
                <div className="flex items-center row-span-2 bg-zinc-900 border-zinc-700 border-[1px] rounded-sm">
                  <motion.div
                    className="flex-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <div className=" flex justify-between p-2">
                      <div className="flex items-center">
                        <MapPinIcon className="h-6" />{" "}
                        <p className=" font-bold text-center ml-2 py-2">
                          Location
                        </p>
                      </div>

                      <div className="flex flex-col w-2/5 my-auto">
                        {" "}
                        <p className="">307 E Lake Ave</p>
                        <p className=" ">Bellefontaine, OH 43311</p>
                        <p className=" ">(behind TP Lanes)</p>
                      </div>
                    </div>
                  </motion.div>
                </div>{" "}
                {/* Contact Info============================================================================== */}
                <div className="flex items-center row-span-2 bg-zinc-900 border-zinc-700 border-[1px] rounded-sm">
                  <motion.div
                    className="flex-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <div className=" flex justify-between p-4">
                      <div className="flex items-center">
                        <DevicePhoneMobileIcon className="h-6" />{" "}
                        <p className="font-bold text-center ml-2 py-6">
                          Contact Info
                        </p>
                      </div>

                      <div className="flex items-center w-2/5 my-auto">
                        <p className="">(937) 599-5425</p>

                        <a
                          href="https://www.facebook.com/ofma5425"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 rounded-full p-1"
                        >
                          <img
                            src={fbIcon}
                            alt="Facebook"
                            className="group-hover:bg-blue-400 rounded-full h-6 opacity-80 group-hover:opacity-100 ml-3"
                          />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>{" "}
              </div>
            </div>{" "}
            {/* MOBILE CONTACT INFO */}
          </div>
        )}
      </div>
    </section>
  )
}

export default ContactUs
