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
          <div className="absolute inset-0 flex flex-col justify-end items-center">
            <div className="bg-zinc-950 bg-opacity-80 w-full backdrop-blur-sm p-2">
              <p className="font-bold  text-gray-50">{card.title}</p>

              <p className=" text-gray-400">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardContainer
