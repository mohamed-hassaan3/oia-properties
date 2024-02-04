import React, { useRef } from 'react'
import Form from './Form'
import Hero from '../assets/gallery/ex1.webp'
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';

const Home = () => {
 const containerRef = useRef();
 const imgRef = useRef()

  useGSAP(() => {
    gsap.from('.intro', {
      opacity: 0,
      y: '-100%',
      stagger: 1,
      duration: .5
    })
    imgRef.current = gsap.timeline()
    .from('.introImg', {
      opacity: 0.2,
      scale: 0,
      duration: 1
    }).to('.introImg', {
      opacity: 1,
    })
  }, {scope: [containerRef, imgRef]})
 
  return (
    <section
    ref={containerRef}
      id="home">
      <div ref={imgRef} className=' introImg bg-no-repeat bg-center bg-cover object-cover lg:w-[80%] h-[600px] w-full m-auto mt-[70px] md:mt-[100px] brightness-50 relative rounded-xl'
        style={{ backgroundImage: `url(${Hero})` }}></div>
      <article className=' *:text-secondary'>
        <aside className='intro absolute top-[50%] md:left-[30%] left-[40%] md:-translate-x-[30%] -translate-x-[40%] -translate-y-[40%] w-[80%] lg:w-[50%] space-y-4 lg:space-y-12 leading-5'>
          <h1 className='intro xl:text-6xl text-4xl font-bold tracking-wider'>Saadiyat Lagoons</h1>
          <p className='intro lg:text-2xl text-xl'>Saadiyat Lagoons is the newest residential addition by Aldar Properties that offers 4, 5 & 6 bedroom villas located at Saadiyat Island, Abu Dhabi.</p>
          <div className='intro flex flex-wrap items-center gap-3 *:border *:border-secondary *:p-2 *:w-[150px] *:rounded-xl'>
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
      <Form className="intro -bottom-[450px] absolute right-1/2 translate-x-1/2 my-6 xl:my-0 xl:right-[12%] xl:translate-x-0 xl:bottom-0 xl:w-[25%] md:w-1/2 w-[90%]">
        <h1 className='text-2xl font-bold text-secondary tracking-wider mb-4'>PROJECT BROCHURE</h1>
      </Form>
    </section>
  )
}

export default Home