import ALDAR from '..//assets/aldar.webp'
const About = () => {
  return (
    <section id="about" className='section w-full lg:w-[80%] '>
      <h1 className='mb-8 title font-semibold'>About the Project</h1>
      <article className='flex md:flex-row flex-col-reverse gap-6 p-8 bg-success text-attention rounded-xl'>
        <aside className='w-[80%] space-y-6 flex flex-col place-content-evenly'>
          <h2 className='lg:text-4xl font-medium text-xl'>Saadiyat Lagoons</h2>
          <p className='text-text'>Live immersed in the beauty of Saadiyat Island, at Saadiyat Lagoons. Sustainably designed, 4 to 6-bedroom mangrove villas, surrounded by over 900,000 m2 of protected wilderness. Close to world-class education, world-renowned culture and Saadiyat Grove retail that’s out of this world, this is a community that connects culture to convenience and nature to people.</p>
          <p className='text-text'>Start your day exploring the mangroves, and spotting wildlife along the way. Pick up lunch from the farmer’s market for a picnic on the green. Spend the afternoon adventuring at the playground or skate park, before winding down with a movie under the stars. There’s an enriching experience to suit every mood and every family member.</p>
        </aside>
        <aside className=''>
          <figure className='flex md:flex-col flex-col-reverse justify-between items-center gap-6'>
            <img src={ALDAR} alt="aldar" className='md:rounded-full rounded-xl w-1/2 md:w-3/4' />
            <figcaption className='text-center text-2xl font-semibold'>
              <h3>Aldar Properties</h3>
              <p className='text-lg font-normal'>Project Developer</p>
            </figcaption>
          </figure>
        </aside>
      </article>
    </section>
  )
}

export default About