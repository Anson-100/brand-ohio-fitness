import { useState } from "react"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid"

// Define the structure of a slide's data
type Slide = {
  image: string
  alt: string
  title: string
  description: string
}

type CarouselProps = {
  slides: Slide[]
}

const Carousel = ({ slides }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const totalSlides = slides.length

  // Threshold for swipe action
  const minSwipeDistance = 50

  const goToPrevSlide = () => {
    setCurrentSlide(current => (current > 0 ? current - 1 : current))
  }

  const goToNextSlide = () => {
    setCurrentSlide(current =>
      current < totalSlides - 1 ? current + 1 : current
    )
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(e.targetTouches[0].clientX) // Reset touchEnd to the starting point
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > minSwipeDistance) {
      goToNextSlide()
    }
    if (touchEnd - touchStart > minSwipeDistance) {
      goToPrevSlide()
    }
  }

  return (
    <div
      className="carousel h-auto w-full overflow-hidden flex"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="viewport overflow-hidden m-auto h-full rounded-sm relative w-full xs:w-5/6 sm:w-2/3 ">
        {currentSlide > 0 && (
          <ArrowLeftIcon
            className="w-8 h-8 text-gray-700 bg-gray-200 rounded-full bg-opacity-30 hover:cursor-pointer z-10 absolute top-1/2 left-2 transform -translate-y-1/2"
            onClick={goToPrevSlide}
          />
        )}
        <div
          className="slides flex"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide flex-shrink-0 w-full h-full relative"
            >
              <img
                className="w-full h-full object-cover"
                src={slide.image}
                alt={slide.alt}
              />
              <div className="absolute inset-0 flex flex-col justify-end items-start p-2">
                <div className="relative rounded-full flex bg-zinc-950 bg-opacity-70 backdrop-blur-sm px-3 py-1 text-sm/6 text-gray-100 ring-1 ring-white/10 md:mb-0">
                  <div className="flex items-center gap-1">
                    <CheckCircleIcon className="h-5 text-emerald-theme" />
                    {slide.title}{" "}
                    {/* <span aria-hidden="true" className="text-emerald-500">
                      &rarr;
                    </span> */}
                  </div>{" "}
                  <p className="text-gray-400 text-center">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {currentSlide < totalSlides - 1 && (
          <ArrowRightIcon
            className="w-8 h-8 text-gray-700 bg-gray-200 rounded-full bg-opacity-30 hover:cursor-pointer z-10 absolute top-1/2 right-2 transform -translate-y-1/2"
            onClick={goToNextSlide}
          />
        )}
      </div>
    </div>
  )
}

export default Carousel
