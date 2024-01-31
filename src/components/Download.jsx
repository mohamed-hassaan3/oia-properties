import EARTH from '../assets/earth.jpg'

const Download = () => {
    return (
        <section style={{ backgroundImage: `url(${EARTH})` }} className='h-[600px] my-[100px] filter  contrast-100 flex flex-col items-center justify-center'>
            <aside className=' '>
                <div className='space-y-4 w-3/4 text-center m-auto mb-10'>
                    <h1 className='lg:text-6xl text-4xl text-custom-white'>Get In Touch</h1>
                    <p className='lg:text-xl mb-6 text-custom-white'>Our team is ready to answer any questions you may have and provide you with the information you need to move forward.
                    </p>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-4 my-8 text-center w-full'>
                    <a href='tel: +971561113080' className='my-4' >
                        <i className="bi bi-telephone-fill text-xl py-4 px-8 bg-success text-secondary rounded-full hover:bg-primary hover:text-attention transition duration-500"> Click Here To Call Us</i>
                    </a>
                    <a href='https://wa.me/+971561113080' className='my-4' rel="noreferrer">
                        <i className="bi bi-whatsapp text-xl py-4 px-8 bg-success text-secondary rounded-full hover:bg-primary hover:text-attention transition duration-500"> Click Here To What's App</i>
                    </a>
                    <a href='mailto:mmhassaan3@gmail.com' className='my-4' >
                        <i className="bi bi-envelope-fill text-xl py-4 px-8 bg-success text-secondary rounded-full hover:bg-primary hover:text-attention transition duration-500"> Click Here To Email</i>
                    </a>
                </div>
            </aside>
        </section>
    )
}

export default Download