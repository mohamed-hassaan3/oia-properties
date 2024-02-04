import { useState } from "react"
import {INFRASTRUCTURE} from '../data/db'
import gsap from "gsap";

const Infrastructure = () => {
  const [selectedItem, setSelectedItem] = useState("Garden")
  const animationGallery = () => {
    let tween = gsap.from(".flair1", {
      duration: .5,
      y: "100%"
    })
    tween.play()
  }
  const handleSelect = (item) => {
    setSelectedItem(item)
    animationGallery()
  };
  return (
    <section id="infrastructure" className='section w-[80%]'>
      <h1 className='title'>Infrastructure</h1>
      <article>
        <nav className="flex justify-evenly items-center gap-4 my-8 *:text-text *:text-2xl *:font-semibold">
          {Object.keys(INFRASTRUCTURE).map((item, index) =>
          (
            <button
              key={index}
              onClick={() => handleSelect(item)}
              className={`opacity-60 transition-all duration-300 py-1 ${selectedItem === item && "!opacity-100 border-b border-secondary"}`}>{item}</button>
          ))}
        </nav>
        <aside className="my-10 w-full rounded-xl">
          <figure className="md:grid space-y-2 grid-cols-3 gap-4 *:rounded-3xl flair1">
            <img 
            className="transition-all duration-500 col-span-2"
            src={INFRASTRUCTURE[selectedItem].image} 
            alt={INFRASTRUCTURE[selectedItem].details} />
            <figcaption className="flair2 bg-success text-attention col-span-1 py-6 px-3 leading-6">
              {INFRASTRUCTURE[selectedItem].details}
            </figcaption>
          </figure>
        </aside>
      </article>
    </section>
  )
}

export default Infrastructure