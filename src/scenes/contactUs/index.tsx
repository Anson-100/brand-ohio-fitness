import { useState } from "react"
import { useForm } from "react-hook-form"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText"
import useMediaQuery from "@/hooks/useMediaQuery"

import contactImage from "@/assets/contact-class.jpg"
import contactImageMobile from "@/assets/contact-class-mobile.jpg"
import fbIcon from "@/assets/facebook.png"
import messengerIcon from "@/assets/messenger.png"
import {
  PhoneIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid"

import DropdownContactMobile from "@/components/DropdownContactMobile"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  const isAboveSmallPhone = useMediaQuery(
    "(min-height: 700px) and (min-width: 420px)"
  )
  const isAboveSmallWidth = useMediaQuery("(min-width:768px)")

  const [isHoursOpen, setHoursOpen] = useState(false)
  const [isLocationOpen, setLocationOpen] = useState(false)

  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <section id="contactus" className="mx-auto min-h-[100%] pt-[4.5rem] ">
      <div className="contact-main w-5/6 mx-auto">
        {/* HEADER AND INTRO DIV */}
        {isAboveMediumScreens ? (
          <div className="w-full flex h-full">
            <div className="flex flex-col items-center"> </div>

            <div className="grid grid-cols-12 my-auto">
              {" "}
              {/* 24/7 */}
              <div className="col-span-3 flex items-center mr-5 ">
                <div className="w-full h-full flex flex-col justify-beginning">
                  <div className="mr-auto">
                    <p className="logo text-[1.5rem] text-lime font-rocksalt text-center"></p>
                    <p className="scene-title lg:text-[3.5rem] text-[3rem] font-bold">
                      Contact Us
                    </p>
                    <div className="h-[1px] bg-lime mt-4 mb-8"></div>
                  </div>{" "}
                  <div className="mx-auto">
                    <p className="text-[1.2rem] mb-10">
                      Stop by or call anytime during staffed hours or message us
                      on facebook. We look forward to hearing from you!
                    </p>
                  </div>{" "}
                  <div className="neon border-lime border-4 rounded-3xl py-2">
                    <p className="twenty-four text-center font-bold text-[1.5rem]">
                      MEMBER ACCESS
                    </p>
                    <p className="twenty-four font-rocksalt text-lime text-[3rem] text-center font-bold">
                      24 / 7
                    </p>
                  </div>
                </div>
                {/* <div className="h-[1px] bg-lime w-5"></div> */}
              </div>
              <div className="col-span-4 my-auto">
                <div className="grid grid-rows-6 gap-10 ml-12">
                  {/* HOURS */}
                  <div className="flex items-center row-span-2">
                    <div className="rounded-2xl border-lime border-[1px] p-1 flex-1">
                      <p className="text-[1.1rem] font-bold text-center bg-charcoal rounded-xl border-lime border-[1px] mb-1">
                        Staffed Hours
                      </p>

                      <p className="font-bold text-[1rem] text-center">
                        Monday, Wednesday, Friday
                      </p>
                      <div>
                        <p className="text-center ">Morning: 8am-12pm</p>
                        <p className="text-center ">Evening: 4pm-8:30pm</p>
                      </div>
                    </div>
                    <div className="h-[1px] bg-lime w-5"></div>
                  </div>{" "}
                  {/* INFO */}
                  <div className="flex items-center row-span-2">
                    <div className="flex-1 rounded-2xl border-lime border-[1px] p-1 h-full">
                      <p className="text-[1.1rem] font-bold text-center bg-charcoal rounded-xl border-lime border-[1px] mb-1">
                        Contact Info
                      </p>
                      <div className="text-center flex flex-col items-center">
                        {" "}
                        <p>(937) 599-5425</p>
                        <div className="flex items-center gap-2">
                          {" "}
                          <p>message us on</p>{" "}
                          <a
                            href="https://www.facebook.com/ofma5425"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={fbIcon}
                              alt="Facebook"
                              className="cursor-pointer"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="h-[1px] bg-lime w-5"></div>
                  </div>
                  {/* LOCATION */}
                  <div className="flex items-center row-span-2">
                    <div className="flex-1 rounded-2xl border-lime border-[1px] p-1">
                      <p className="text-[1.1rem] font-bold text-center bg-charcoal rounded-xl border-lime border-[1px] mb-1">
                        Location
                      </p>
                      <div className="text-center">
                        <p>304 E Lake Avenue</p>
                        <p>Bellefontaine, OH 43311</p>
                        <p>(behind TP Lanes)</p>
                      </div>
                    </div>
                    <div className="h-[1px] bg-lime w-5"></div>
                  </div>
                </div>
              </div>{" "}
              {/* <div className="mx-auto p-2 border-b-lime border-b-[1px]">
                  <p className="text-center text-[1.2rem]">
                    Stop by or call anytime during staffed hours or message us
                    on facebook. We look forward to hearing from you!
                  </p>
                </div> */}
              <img
                src={contactImage}
                alt=""
                className="col-span-5 my-auto mr-auto rounded-2xl border-lime border-[1px] overflow-hidden"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center h-full">
            {/* <p className="logo text-[1.3rem] text-lime font-rocksalt">
              hurry up and
            </p> */}
            <p className="scene-title text-[2.5rem] font-bold">Contact Us</p>
            <div className="h-[1px] bg-lime mt-3 mb-7 w-2/3"></div>
            {isAboveSmallWidth ? (
              <p className="text-center text-lg w-2/3">
                Stop by or call anytime during staffed hours or hit us up on
                facebook. We look forward to hearing from you!
              </p>
            ) : (
              ""
            )}

            {isAboveSmallPhone ? (
              <img
                src={contactImageMobile}
                alt=""
                className=" border-[1px] border-lime rounded-md my-5 w-2/3"
              />
            ) : (
              ""
            )}
            <div className="flex flex-col items-start">
              <div className="flex flex-col gap-0">
                <div className="relative">
                  <button
                    onClick={() => setHoursOpen(!isHoursOpen)}
                    className="flex items-center"
                  >
                    <ChevronDoubleDownIcon className="h-7 text-lime" />
                    <p className="text-[1.5rem]">Staffed Hours</p>
                  </button>{" "}
                  <DropdownContactMobile
                    section="staffed-hours"
                    isOpen={isHoursOpen}
                    toggleDropdown={() => setHoursOpen(!isHoursOpen)}
                  />
                </div>
                <div className="relative">
                  <button
                    onClick={() => setLocationOpen(!isLocationOpen)}
                    className="flex items-center"
                  >
                    {" "}
                    <ChevronDoubleDownIcon className="h-7 text-lime" />
                    <p className="text-[1.5rem]">Contact Info/Location</p>
                  </button>
                  <DropdownContactMobile
                    section="contact-info"
                    isOpen={isLocationOpen}
                    toggleDropdown={() => setLocationOpen(!isLocationOpen)}
                  />
                </div>
              </div>
            </div>
            <div className="neon border-lime border-2 rounded-3xl p-2 mx-auto my-auto">
              <p className="twenty-four text-center font-bold text-[1.2rem]">
                MEMBER ACCESS
              </p>
              <p className="twenty-four font-rocksalt text-lime text-[2.2rem] text-center font-bold">
                24 / 7
              </p>
            </div>

            <div className="w-5/6 sm:w-full flex flex-col items-center">
              <div className="h-[1px] bg-lime w-full sm:w-2/3"></div>
              <div className="flex gap-16 items-center">
                <a href="tel:9375995425">
                  <PhoneIcon className="h-[3rem] m-2" />
                </a>
                <button>
                  <img
                    onClick={() =>
                      window.open("https://www.facebook.com/ofma5425", "_blank")
                    }
                    src={messengerIcon}
                    alt="chat with us on messenger"
                    className="h-[3rem] bg-black"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ContactUs
