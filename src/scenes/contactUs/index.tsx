import { useForm } from "react-hook-form"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText"
import useMediaQuery from "@/hooks/useMediaQuery"

import contactImage from "@/assets/contact-class.jpg"
import contactImageMobile from "@/assets/contact-class-mobile.jpg"

import {
  PhoneIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

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
    <section id="contactus" className="mx-auto h-full pt-[4.5rem] ">
      <div className="h-full w-5/6 mx-auto">
        {/* HEADER AND INTRO DIV */}
        {isAboveMediumScreens ? (
          <div className="flex flex-col h-full items-center">
            <div>
              <p className="logo text-[1.5rem] text-lime font-rocksalt text-center">
                hurry up and
              </p>
              <p className="scene-title text-[3.5rem] font-bold text-center">
                Contact Us
              </p>
              <div className="h-[1px] bg-lime mt-5 mb-10"></div>
            </div>

            <div className="w-full flex gap-4">
              <div className="flex-1 flex flex-col">
                <p className="text-center mb-10">
                  Stop by or call anytime during staffed hours or hit us up on
                  facebook. We look forward to hearing from you!
                </p>
                {/* <div className="flex items-center justify-center">
                  <img src={contactImage} alt="" className="max-h-[40vh]" />
                </div> */}
              </div>

              <div className="grid grid-rows-3 flex-1 rounded-lg gap-4 mx-auto">
                {" "}
                <div className="rounded-md bg-grayish">
                  <p className="text-[1.5] font-bold text-center bg-charcoal rounded-t-md">
                    Staffed Hours
                  </p>

                  <p className="font-bold text-[1.1rem] text-black text-center">
                    Monday, Wednesday, Friday
                  </p>
                  <div>
                    <p className="text-center text-black">Morning: 8am-12pm</p>
                    <p className="text-center text-black">
                      Evening: 4pm-8:30pm
                    </p>
                  </div>
                </div>{" "}
                <div className="rounded-md bg-grayish">
                  <p className="text-[1.5] font-bold text-center bg-charcoal rounded-t-md">
                    Contact Info
                  </p>
                  <div className="text-center text-black">
                    {" "}
                    <p>(937) 599-5425</p>
                    <p>message us on</p>
                  </div>
                </div>
                <div className="rounded-md bg-grayish">
                  <p className="text-[1.5] font-bold text-center bg-charcoal rounded-t-md">
                    Location
                  </p>
                  <div className="text-center text-black">
                    <p>304 E Lake Avenue</p>
                    <p>Bellefontaine, OH 43311</p>
                    <p>(behind TP Lanes)</p>
                  </div>
                </div>
              </div>
            </div>
            {/* HOURS AND LOCATION DIV */}
          </div>
        ) : (
          <div className="flex flex-col items-center h-full">
            <p className="logo text-[1.3rem] text-lime font-rocksalt">
              hurry up and
            </p>
            <p className="scene-title text-[2.5rem] font-bold">Contact Us</p>
            <div className="h-[1px] bg-lime mt-3 mb-7 w-2/3"></div>
            <p className="text-center">
              Stop by or call anytime during staffed hours or hit us up on
              facebook. We look forward to hearing from you!
            </p>
            <img
              src={contactImageMobile}
              alt=""
              className=" border-[1px] border-lime rounded-md mt-5"
            />
            <div className="my-auto flex flex-col gap-0">
              <div className="flex items-center">
                <ChevronDoubleDownIcon className="h-7 text-lime" />
                <p className="text-[1.5rem]">Staffed Hours</p>
              </div>
              <div className="flex items-center">
                {" "}
                <ChevronDoubleDownIcon className="h-7 text-lime" />
                <p className="text-[1.5rem]">Location/Contact Info</p>
              </div>
            </div>
            <div className="w-5/6 flex flex-col items-center">
              <div className="h-[1px] bg-lime w-full"></div>
              <div className="flex gap-16">
                <PhoneIcon className="h-[3rem] m-2" />
                <ChatBubbleLeftEllipsisIcon className="h-[3rem] m-2" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ContactUs
