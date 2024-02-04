import React, { useState } from 'react'
import { GALLERY } from '../data/db'
import gsap from 'gsap';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Exterior")
 
  const animationGallery = () => {
    let tween = gsap.from(".flair", {
      duration: .5,
      scale: 0
    })
    gsap.to('.flair', {
      scale: 1
    });
    tween.play()
  }
  const handleSelect = (category) => {
    setSelectedCategory(category)
    animationGallery()
  };

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
        <figure className='lg:grid space-y-2 grid-cols-2 lg:grid-cols-4 grid-flow-col grid-rows-2 gap-4 *:rounded-3xl'>
          {GALLERY[selectedCategory].map((item, index) => (
            <img
              alt={item}
              src={item.image}
              key={index}
              className={`photo flair h-[350px] object-cover w-full row-span-${item.full} col-span-${item.cols} `} />
          ))}
        </figure>
      </article>
    </section>
  )
}

export default Gallery