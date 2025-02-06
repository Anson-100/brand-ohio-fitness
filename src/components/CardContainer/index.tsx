import React from "react"

// Define the type for a single card
type Card = {
  image: string
  alt: string
  title: string
  description: string
}

// Define the props for the CardContainer component
type CardContainerProps = {
  cards: Card[]
}

const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
  return (
    <div className="flex max-h-[65vh] ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="col-span-1 overflow-hidden flex-1 m-2 relative w-full h-full bg-zinc-900 border-[1px] border-zinc-700 rounded-sm"
        >
          <img
            className="w-full h-full object-cover"
            src={card.image}
            alt={card.title}
          />
          {/* PARENT==================== */}
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className=" w-full p-2 flex flex-col ">
              <div className="flex">
                <div className="relative rounded-full flex bg-zinc-950 bg-opacity-70 backdrop-blur-sm px-3 py-1 text-sm/6 text-gray-100 ring-1 ring-white/10 mb-8 md:mb-0">
                  <div>
                    {card.title}{" "}
                    <span aria-hidden="true" className="text-emerald-500">
                      &rarr;
                    </span>
                  </div>
                </div>{" "}
              </div>
              {/* DESCRIPTION STUFF========================= */}
              <div className=" text-emerald-500 text-sm px-2">
                <span aria-hidden="true" className="absolute inset-0" />
                {card.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardContainer
