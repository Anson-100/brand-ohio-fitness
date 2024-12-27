import { useState } from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid"

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
      <div className="viewport overflow-hidden m-auto h-full border-[1px] border-zinc-700 relative">
        {currentSlide > 0 && (
          <ArrowLeftIcon
            className="w-10 h-10 text-black bg-white rounded-full bg-opacity-50 hover:cursor-pointer z-10 absolute top-1/2 left-2 transform -translate-y-1/2"
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
                className="w-full h-full object-cover border-[1px] border-zinc-700"
                src={slide.image}
                alt={slide.alt}
              />
              <div className="absolute inset-0 flex flex-col justify-end items-center">
                <div className="bg-zinc-950 p-2 bg-opacity-60 backdrop-blur-sm w-full">
                  <h2 className="text-lg text-gray-100 font-bold">
                    {slide.title}
                  </h2>
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
            className="w-10 h-10 text-black bg-white rounded-full bg-opacity-50 hover:cursor-pointer z-10 absolute top-1/2 right-2 transform -translate-y-1/2"
            onClick={goToNextSlide}
          />
        )}
      </div>
    </div>
  )
}

export default Carousel
