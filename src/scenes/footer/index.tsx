const Footer = () => {
  return (
    <footer className="bg-grayish text-black pb-[4.5rem] py-4">
      <div className="w-full flex flex-col">
        <p className="text-center mb-3 font-bold">
          ©Ohio Fitness and Martial Arts All Rights Reserved.
        </p>
        <div className="flex mx-auto gap-5 mb-3">
          <div>
            <p>304 E Lake Avenue</p>
            <p>Bellefontaine, OH 43311</p>
            <p>(behind TP Lanes)</p>
          </div>
          <div>
            <p>Mon, Wed, Fri</p>
            <p>Morning: 8am-12pm</p>
            <p>Evening: 4pm-8:30pm</p>
          </div>
        </div>
        <p className="underline text-center">(937) 599-5425</p>
      </div>
    </footer>
  )
}

export default Footer
