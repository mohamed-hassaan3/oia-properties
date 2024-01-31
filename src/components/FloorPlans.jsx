import Form from './Form'
import BACKGROUND from '../assets/bg.jpg'
import { FLOOR } from '../data/db'
import { useState } from 'react'
import LIGHT from '../assets/lampshade.png'

const FloorPlans = () => {
  const [selectedFloor, setSelectedFloor] = useState("4 Bedroom")

  const handleSelect = (floor) => {
    setSelectedFloor(floor)
  }

  return (
    <section id="floorPlans" className='section py-16'>
      <article
        style={{ backgroundImage: `url(${BACKGROUND})` }}
        className=' bg-no-repeat bg-center bg-cover  rounded-3xl w-full m-auto relative flex flex-col-reverse xl:grid xl:grid-cols-4 gap-10 xl:h-screen place-items-center justify-items-center p-12'>
          <img src={LIGHT} alt="lampshade" className='absolute w-[200px] -top-[150px] xl:-top-2 xl:right-10' />
        <aside className='xl:w-[300px] sm:w-[80%] w-full  text-secondary'>
          <Form className="space-y-4 leading-7 bg-transparent opacity-90">
            <h1 className='2xl:text-6xl md:text-3xl text-xl font-bold pb-2'>Floor Plans</h1>
            <p className='md:text-2xl text-md'>Download Floor Plans</p>
          </Form>
        </aside>
        <aside className='col-span-2 w-full text-secondary space-y-6'>
          <nav className='flex place-content-around'>
            {Object.keys(FLOOR).map((plan, index) => (
              <button
                className={`md:text-xl text-md pb-2 ${selectedFloor === plan && "border-b border-secondary"}`}
                onClick={() => handleSelect(plan)}
                key={index}>{plan}</button>
            ))}
          </nav>
          <figure className='w-full'>
            <img
              src={FLOOR[selectedFloor]?.image}
              alt={FLOOR[selectedFloor]?.image}
              className='xl:w-full sm:w-[80%] w-[100%] m-auto rounded-xl' />
          </figure>
        </aside>
      </article>
    </section>
  )
}

export default FloorPlans