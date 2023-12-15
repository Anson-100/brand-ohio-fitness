import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types"
import legPress from "@/assets/leg press2.jpg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  const isAboveMobileScreens = useMediaQuery("(min-width:768px)")

  return (
    <section id="home" className="bg-black py-[4rem] h-full pb-0">
      <div className="h-full flex justify-center items center">
        {isAboveMediumScreens ? (
          <div className="grid grid-cols-10 w-5/6 h-full justify-between items-center">
            <div className="col-span-5 lg:mx-auto">
              <p className="logo text-[1.6rem] text-lime font-rocksalt">
                Unleash your potential at
              </p>
              <p className="logo text-[4rem] lg:text-[4.4rem] font-dmsans font-bold">
                Ohio Fitness
              </p>
              <p className="logo text-[4rem] lg:text-[4.4rem] font-dmsans font-bold">
                & Martial Arts
              </p>
              <div className="bg-lime h-[1px] w-600px mt-5 mb-10 max-w-[25rem]"></div>
              <p className="max-w-[25rem] mr-5">
                Step into Ohio Fitness & Martial Arts - the best gym in the
                area. Gear up for success with a state-of-the-art facility and
                an amazing community. Members can access the gym around the
                clock--24 hours a day, 7 days a week--so join us and be your
                best!
              </p>
              <AnchorLink
                className="inline-block"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                <p className="bg-lime rounded-md px-4 py-1 text-black font-dmsans font-bold text-[1.2rem] mt-5 hover:underline">
                  Join Now!
                </p>
              </AnchorLink>
            </div>

            <img
              src={legPress}
              alt=""
              className="max-h-[30rem] border-2 border-lime rounded-lg ml-auto lg:mx-auto col-span-5"
            />
          </div>
        ) : (
          <div className="w-5/6 flex flex-col items-center">
            <p className="logo text-[1.2rem] text-lime font-rocksalt mt-8">
              Unleash your potential at
            </p>
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

            <div className="bg-lime h-[1px] w-5/6 md:w-2/6 mt-5 mb-10"></div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-5/6">
              {" "}
              <div>
                {" "}
                <p className="text-[1.2rem] sm:w-5/6">
                  Step into Ohio Fitness & Martial Arts - the best gym in the
                  area. Gear up for success with a state-of-the-art facility and
                  an amazing community. Members can access the gym around the
                  clock--24 hours a day, 7 days a week--so join us and be your
                  best!
                </p>
              </div>
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
              <p className="bg-lime rounded-md px-4 py-1 text-black font-dmsans font-bold text-[1.2rem] mt-5 hover:underline">
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
