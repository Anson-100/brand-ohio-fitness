import useMediaQuery from "@/hooks/useMediaQuery"
// import ActionButton from "@/shared/ActionButton"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types"
import legPress from "@/assets/leg press2.jpg"
import { motion } from "framer-motion"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  const isAboveMobileScreens = useMediaQuery("(min-width:768px)")

  return (
    <section id="home" className="bg-black py-[4.5rem] h-[100vh] pb-0">
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
                  <p className="logo text-[1.6rem] text-lime font-rocksalt">
                    Unleash your potential at
                  </p>
                  <p className="logo text-[4rem] lg:text-[4.4rem] font-dmsans font-bold">
                    Ohio Fitness
                  </p>
                  <p className="logo text-[4rem] lg:text-[4.4rem] font-dmsans font-bold">
                    & Martial Arts
                  </p>
                </motion.div>
                <div className="bg-lime h-[1px] w-auto mt-5 mb-10"></div>
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
                  <p className="max-w-[25rem] mr-5">
                    Welcome to the top gym in the area! Gear up for success in
                    our state-of-the-art facility, backed by an incredible
                    community. Members enjoy 24/7 access to our gym – that's
                    right, anytime, day or night. Come join us and unleash your
                    best self!
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <AnchorLink
                    className="inline-block"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                  >
                    <p className="bg-lime rounded-md px-4 py-1 text-black font-dmsans font-bold text-[1.2rem] mt-5 hover:underline">
                      Join Now!
                    </p>
                  </AnchorLink>
                </motion.div>
              </div>

              <img
                src={legPress}
                alt=""
                className="max-h-[30rem] border-2 border-lime rounded-lg ml-auto lg:mx-auto col-span-5"
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
              <p className="logo text-[1.2rem] text-center text-lime font-rocksalt mt-8">
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
                <p className="logo text-[2.5rem] font-dmsans font-bold">
                  Ohio Fitness & Martial Arts
                </p>
              ) : (
                <div>
                  <p className="logo text-[2.5rem] font-dmsans font-bold">
                    Ohio Fitness
                  </p>
                  <p className="logo text-[2.5rem] font-dmsans font-bold">
                    & Martial Arts
                  </p>
                </div>
              )}
            </motion.div>

            <div className="bg-lime h-[1px] w-5/6 md:w-2/6 mt-5 mb-10"></div>
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
                <p className="text-[1.2rem] sm:w-5/6">
                  Welcome to the top gym in the area! Gear up for success in our
                  state-of-the-art facility, backed by an incredible community.
                  Members enjoy 24/7 access to our gym so join us and unleash
                  your best self!
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
              className="inline-block"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
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
                <p className="bg-lime rounded-md px-4 py-1 text-black font-dmsans font-bold text-[1.2rem] mt-5 hover:underline">
                  Join Now!
                </p>
              </motion.div>
            </AnchorLink>
          </div>
        )}
      </div>
    </section>
  )
}

export default Home
