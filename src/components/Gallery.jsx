import React, { useEffect, useState } from 'react'
import { GALLERY } from '../data/db'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Exterior")
  gsap.registerPlugin(ScrollTrigger);
  const handleSelect = (category) => {
    setSelectedCategory(category)
  };
useEffect(() => {

  const section = document.querySelector('.images');
  if (section) {
    // Set up the ScrollTrigger animations for each photo
    gsap.utils.toArray('.photo').forEach((photo, index) => {
      const direction = index % 2 === 0 ? 1 : -1; // 1 for right, -1 for left
      const distance = 100 * direction; // Adjust the distance based on your design

      gsap.to(photo, {
        scale: 1,
        x: 0, // Reset x position
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: photo,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 0.5,
        },
      });

      // Initial position for each photo before the animation starts
      gsap.set(photo, {
        x: distance,
        opacity: 0,
        scale: 0.5,
      });
    });
  }
}, [])

  return (
    <section id="gallery" className='lg:section w-[80%] m-auto'>
      <h1 className='title'>Gallery</h1>
      <article>
        <nav className="flex justify-evenly items-center gap-4 my-8 *:text-text *:text-2xl *:font-semibold">
          {Object.keys(GALLERY).map((category) => (
            <button 
            className={`opacity-60 transition-all duration-300 py-1 ${selectedCategory === category && "!opacity-100 border-b border-secondary"}`}
            onClick={() => handleSelect(category)} 
            key={category}>{category}</button>
          ))}
        </nav>
        <figure className='images lg:grid space-y-2 grid-cols-2 lg:grid-cols-4 grid-flow-col grid-rows-2 gap-4 *:rounded-3xl'>
          {GALLERY[selectedCategory].map((item, index) => (
            <img
              alt={item}
              src={item.image}
              key={index}
              className={`photo h-[350px] object-cover w-full row-span-${item.full} col-span-${item.cols} `} />
          ))}
        </figure>
      </article>
    </section>
  )
}

export default Gallery