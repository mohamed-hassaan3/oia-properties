import LOCATION from '../assets/location.webp'
import MASTER from '../assets/master.webp'
const Location = () => {
  const newLocal = '_blank'
  return (
    <section id='location' className='md:py-20 w-[80%] m-auto'>
      <aside>
        <article className='flex lg:flex-row flex-col lg:gap-20 gap-10 w-full mb-12'>
          <h1 className='lg:w-[35%] lg:text-6xl text-4xl font-semibold text-primary'>Location</h1>
          <p className='lg:w-[65%] leading-10 text-success text-lg xl:text-2xl'>The exclusively designed development is located at Saadiyat Island, Abu Dhabi offering residents hassle-free access to the rest of the city. The locality is lined with the island attraction where residents can explore a host of facilities like nowhere else. The Zayed National Museum, the Cultural District, the Louvre Abu Dhabi, and many more attractions are all within minutes away from the development.
          </p>
        </article>
        <aside className='grid lg:grid-cols-3 *:tracking-wider md:grid-cols-2 gap-2 py-8 px-2 *:py-2 bg-success my-8 rounded-3xl'>
          <div>
            <i className="bi bi-car-front-fill text-attention p-1 mr-2"></i>
            <small className='text-custom-white'>
              <span className='font-bold text-secondary'>05 Minutes:</span> Louvre Abu Dhabi</small>
          </div>
          <div>
            <i className="bi bi-car-front-fill text-attention p-1 mr-2"></i>
            <small className='text-custom-white'>
              <span className='font-bold text-secondary'>08 Minutes: </span> Zayed National Museum</small>
          </div>
          <div>
            <i className="bi bi-car-front-fill text-attention p-1 mr-2"></i>
            <small className='text-custom-white'>
              <span className='font-bold text-secondary'>20 Minutes: </span> Abu Dhabi International Airport</small>
          </div>
          <div>
            <i className="bi bi-car-front-fill text-attention p-1 mr-2"></i>
            <small className='text-custom-white'>
              <span className='font-bold text-secondary'>20 Minutes: </span> Corniche Road, Abu Dhabi</small>
          </div>
          <div>
            <i className="bi bi-car-front-fill text-attention p-1 mr-2"></i>
            <small className='text-custom-white'><span className='font-bold text-secondary'>15 Minutes: </span>Yas Island</small>
          </div>
        </aside>
        <figure className='w-full m-auto'>
          <img src={LOCATION} alt="location" className='rounded-3xl w-full' />
        </figure>
      </aside>
      <aside>
        <article className='flex lg:flex-row flex-col lg:gap-20 gap-10 w-full my-20'>
          <h1 className='lg:w-[35%] lg:text-6xl text-4xl text-nowrap font-semibold text-primary'>Master Plan</h1>
          <p className='lg:w-[65%] leading-10 text-success text-lg xl:text-2xl'>The master-plan of Saadiyat Lagoons offers residents an exclusive lifestyle like nowhere else. The community is lined with some of the best in class island lifestyles and facilities like eco-corniche that offers leisure strolls through the mangroves, and Cultural Spine where residents can discover the art, music and food along the promenade and can have fun with kids and family.
          </p>
        </article>
        <figure className='w-full m-auto'>
          <img src={MASTER} alt="master" className='rounded-3xl w-full' />
        </figure>
      </aside>
      <aside className='my-20'>
        <div className='space-y-4 w-3/4 text-center m-auto mb-10'>
          <h1 className='lg:text-6xl text-4xl text-success'>Get In Touch</h1>
          <p className='lg:text-xl mb-6 text-primary'>Our team is ready to answer any questions you may have and provide you with the information you need to move forward.
          </p>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-4 my-8 text-center w-full'>
          <a href='tel: +971561113080' target={newLocal} className='my-4' >
            <i className="bi bi-telephone-fill text-xl py-4 px-8 bg-success text-secondary rounded-full hover:bg-primary hover:text-attention transition duration-500"> Click Here To Call Us</i>
          </a>
          <a href='https://wa.me/+971561113080' target={newLocal} className='my-4' rel="noreferrer">
            <i className="bi bi-whatsapp text-xl py-4 px-8 bg-success text-secondary rounded-full hover:bg-primary hover:text-attention transition duration-500"> Click Here To What's App</i>
          </a>
          <a href='mailto:mmhassaan3@gmail.com' target={newLocal} className='my-4' >
            <i className="bi bi-envelope-fill text-xl py-4 px-8 bg-success text-secondary rounded-full hover:bg-primary hover:text-attention transition duration-500"> Click Here To Email</i>
          </a>
        </div>
      </aside>
    </section>
  )
}

export default Location