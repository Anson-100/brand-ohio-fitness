import useMediaQuery from "@/hooks/useMediaQuery"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import fbIcon from "@/assets/facebook.png"

import legPress from "@/assets/leg press2.jpg"
type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  const isAboveMobileScreens = useMediaQuery("(min-width:768px)")

  return (
    <section id="home" className="py-[4.5rem] h-[100vh] pb-0">
      <div className="h-full flex justify-center items center">
        {isAboveMediumScreens ? (
          // HEADER
          <div className="w-full">
            <div className="grid grid-cols-10 w-5/6 h-full justify-between items-center m-auto">
              <div className="col-span-5 lg:mx-auto">
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
                  {/* <p className="logo text-[1.6rem] text-zinc-400 font-rocksalt">
                    Unleash your potential at
                  </p> */}
                  <p className="logo text-[3.5rem] font-dmsans font-bold text-gradient">
                    Ohio Fitness
                  </p>
                  <p className="logo text-[3.5rem] font-dmsans font-bold text-gradient">
                    & Martial Arts
                  </p>
                </motion.div>
                <div className="bg-gradient-theme h-[1px] w-2/3 mt-5 mb-10"></div>
                <motion.div
                  className="flex flex-col gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <p className="max-w-[25rem] mr-5 mb-8 text-gray-100">
                    Welcome to the top gym in the area! Gear up for success in
                    our state-of-the-art facility, backed by an incredible
                    community. Members enjoy 24/7 access to our gym – that's
                    right, anytime, day or night. Come join us and unleash your
                    best self!
                  </p>
                </motion.div>
                <div className="flex">
                  <AnchorLink
                    className="the-one bg-gradient-to-r from-lime to-emerald-500 p-[1px] w-52 font-montserrat font-semibold text-gray-100 active:translate-y-[1px] active:translate-x-[1px] mr-1 rounded-full"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                  >
                    <p className="bg-zinc-950 hover:bg-gradient-to-r from-lime to-emerald-500 py-3 px-12 hover:text-zinc-950 rounded-full text-center">
                      Join Now!
                    </p>
                  </AnchorLink>

                  <a
                    href="https://www.facebook.com/ofma5425"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-montserrat font-semibold text-gray-100 active:translate-y-[1px] active:translate-x-[1px] w-52 border-zinc-700 hover:border-zinc-500 rounded-full border-[1px] group"
                  >
                    <div className="flex hover:bg-zinc-950 py-3 group-hover:text-gray-100 rounded-full text-gray-300 justify-center">
                      <p className="mr-2">message us on</p>
                      <img
                        src={fbIcon}
                        alt="Facebook"
                        className="rounded-full h-6 opacity-80 group-hover:bg-blue-500 group-hover:opacity-100"
                      />
                    </div>
                  </a>
                </div>
              </div>

              <img
                src={legPress}
                alt=""
                className="max-h-[30rem]  ml-auto lg:mx-auto col-span-5 border-[1px] border-emerald-theme rounded-sm"
              />
            </div>
          </div>
        ) : (
          <div className="w-5/6 flex flex-col items-center">
            <motion.div
              className="flex items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="logo text-zinc-400 text-center  mt-8">
                Unleash your potential at
              </p>
            </motion.div>
            <motion.div
              className="flex items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {isAboveMobileScreens ? (
                <p className="logo text-[2rem] font-dmsans font-bold">
                  Ohio Fitness & Martial Arts
                </p>
              ) : (
                <div>
                  <p className="logo text-[2rem] font-dmsans font-bold">
                    Ohio Fitness
                  </p>
                  <p className="logo text-[2rem] font-dmsans font-bold">
                    & Martial Arts
                  </p>
                </div>
              )}
            </motion.div>

            <div className="bg-gradient-theme h-[1px] w-5/6 md:w-2/6 mt-5 mb-10"></div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-5/6">
              {" "}
              <motion.div
                className="flex items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <p className="sm:w-5/6">
                  Welcome to Ohio Fitness & Martial Arts, the top gym in the
                  area! Gear up for success in our state-of-the-art facility,
                  backed by an incredible community. Members enjoy 24/7 access
                  to our gym so join us and unleash your best self!
                </p>
              </motion.div>
              {isAboveMobileScreens ? (
                <img
                  src={legPress}
                  alt=""
                  className="max-h-[15rem] border-2 border-lime rounded-lg ml-auto mx-auto col-span-5"
                />
              ) : (
                ""
              )}
            </div>
            <AnchorLink
              className="my-auto the-one bg-gradient-to-r from-lime to-emerald-500 p-[1px] rounded-sm w-full text-center font-montserrat font-semibold text-gray-100 active:translate-y-[1px] active:translate-x-[1px]"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p className="bg-zinc-950  hover:bg-gradient-to-r rounded-sm from-lime to-emerald-500 py-3  hover:text-zinc-950">
                Join Now!
              </p>
            </AnchorLink>
          </div>
        )}
      </div>
    </section>
  )
}

export default Home
