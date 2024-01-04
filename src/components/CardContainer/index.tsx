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
    <div className="flex max-h-[65vh] bg-charcoal rounded-lg">
      {cards.map((card, index) => (
        <div
          key={index}
          className="dropdown-section bg-black col-span-1 overflow-hidden flex-1 m-2 relative w-full h-full rounded-md"
        >
          <img
            className="w-full h-full object-cover"
            src={card.image}
            alt={card.title}
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center">
            <div className="bg-black m-2 rounded-lg bg-opacity-60 w-5/6">
              <p className="text-center font-bold text-[1.2rem] p-1">
                {card.title}
              </p>
              <div className="h-[.4px] w-[40px] bg-lime mx-auto"></div>
              <p className="text-center p-2">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardContainer
