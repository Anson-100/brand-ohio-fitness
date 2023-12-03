import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/types"
import legPress from "@/assets/leg press.jpg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
    <section id="home" className="bg-black py-[4rem] h-full pb-0">
      <div className="h-full flex justify-center items center">
        {isAboveMediumScreens ? (
          <div className="flex w-5/6 h-full m-auto justify-between items-center">
            <div className="">
              <p className="logo text-[1.8rem] text-lime font-rocksalt">
                Unleash your potential at
              </p>
              <p className="logo text-[4rem] font-dmsans font-bold">
                Ohio Fitness
              </p>
              <p className="logo text-[4rem] font-dmsans font-bold">
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
              <button className="bg-lime rounded-sm px-4 py-1 text-black font-dmsans font-bold text-[1.2rem] mt-10">
                Join Now!
              </button>
            </div>
            {/* <div className="max-h-[40rem] flex justify-center"></div> */}
            <img
              src={legPress}
              alt=""
              className="max-h-[30rem] object-cover border-2 border-lime rounded-lg ml-auto"
            />
          </div>
        ) : (
          <div className="w-5/6 flex flex-col items-center">
            <p className="logo text-[1.2rem] text-lime font-rocksalt mt-8">
              Unleash your potential at
            </p>
            <p className="logo text-[3rem] font-dmsans font-bold">
              Ohio Fitness
            </p>
            <p className="logo text-[3rem] font-dmsans font-bold">
              & Martial Arts
            </p>
            <div className="bg-lime h-[1px] w-5/6 mt-5 mb-10"></div>

            <p className="text-[1.2rem]">
              Step into Ohio Fitness & Martial Arts - the best gym in the area.
              Gear up for success with a state-of-the-art facility and an
              amazing community. Members can access the gym around the clock--24
              hours a day, 7 days a week--so join us and be your best!
            </p>
            <div>
              <button className="bg-lime rounded-sm px-4 py-1 text-black font-dmsans font-bold text-[1.4rem] mt-10">
                Join Now!
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Home
