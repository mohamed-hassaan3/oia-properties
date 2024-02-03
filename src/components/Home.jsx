import React, { useEffect } from 'react'
import Form from './Form'
import Hero from '../assets/gallery/ex1.webp'
import {gsap} from 'gsap';

const Home = () => {
  useEffect(() => {
    var tl = gsap.timeline()
    // HERO IMG
    tl.from('.introImg', {
      duration: 1, y: "-100%", opacity: .2
    })
      .to('.introImg', { duration: 1, y: 0, opacity: 1 })
    // FORM
    tl.from('.introForm', {
      duration: 1, x: "150%", opacity: .2,
    })
      .to('.introForm', { duration: 1, x: 0, opacity: 1 })
    // TITLE
    tl.from('.introTitle', {
      duration: 1,  opacity: 0,
    })
      .to('.introTitle', { duration: 1, opacity: 1,  })
  }, []);
  return (
    <section
      id="home">
      <div className='introImg bg-no-repeat bg-center bg-cover object-cover lg:w-[80%] h-[600px] w-full m-auto mt-[100px] brightness-50 relative rounded-xl'
        style={{ backgroundImage: `url(${Hero})` }}></div>
      <article className=' *:text-secondary'>
        <aside className='introTitle absolute top-[50%] md:left-[30%] left-[40%] md:-translate-x-[30%] -translate-x-[40%] -translate-y-[40%] w-[80%] lg:w-[50%] space-y-4 lg:space-y-12 leading-5'>
          <h1 className='xl:text-6xl text-4xl font-bold tracking-wider'>Saadiyat Lagoons</h1>
          <p className='lg:text-2xl text-xl'>Saadiyat Lagoons is the newest residential addition by Aldar Properties that offers 4, 5 & 6 bedroom villas located at Saadiyat Island, Abu Dhabi.</p>
          <div className='flex flex-wrap items-center gap-3 *:border *:border-secondary *:p-2 *:w-[150px] *:rounded-xl'>
            <div>
              <p className='font-semibold text:sm md:text-xl text-nowrap'>AED 7.9 Million</p>
              <p className=' font-thin text-lg'>Starting Price</p>
            </div>
            <div>
              <p className='font-semibold text:sm md:text-xl text-nowrap'>4, 5 & 6</p>
              <p className=' font-thin text-lg'>Bedrooms Villas</p>
            </div>
            <div>
              <p className='font-semibold text:sm md:text-xl text-nowrap'>Mar - 2026</p>
              <p className=' font-thin text-lg'>Handover</p>
            </div>
          </div>
        </aside>
      </article>
      <Form className="introForm -bottom-[450px] lg:block hidden absolute right-1/2 translate-x-1/2 my-6 xl:my-0 xl:right-[12%] xl:translate-x-0 xl:bottom-0 xl:w-[25%] md:w-1/2 w-[90%]">
        <h1 className='text-2xl font-bold text-secondary tracking-wider mb-4'>PROJECT BROCHURE</h1>
      </Form>
    </section>
  )
}

export default Home