/* eslint-disable jsx-a11y/iframe-has-title */
import ALDAR from '../assets/aldar.webp'

const Footer = () => {
    return (
        <footer className='bg-primary py-20 px-6 flex justify-around'>
            <section>
                <img src={ALDAR} alt="aldar" className='w-[200px] rounded-full mb-10 m-auto' />
                <a href='mailto:mmhassaan3@gmail.com' className='my-4' >
                    <i className="bi bi-envelope-fill text-xl py-4 px-8 bg-success text-secondary rounded-full hover:bg-primary hover:text-attention transition duration-500"> Click Here To Email</i>
                </a>
            </section>
            <section>
                <legend className='text-custom-white text-2xl font-semibold my-4'>Quick Links</legend>
                <ul className='space-y-4 *:text-secondary *:text-lg'>
                    <li className='hover:opacity-80 cursor-pointer' id='gallery'>Gallery</li>
                    <li className='hover:opacity-80 cursor-pointer' id='nfrastructure'>Infrastructure</li>
                    <li className='hover:opacity-80 cursor-pointer' id='about'>About Us</li>
                    <li className='hover:opacity-80 cursor-pointer' id='location'>Location</li>
                    <li className='hover:opacity-80 cursor-pointer' id='nearby'>Places Nearby</li>
                </ul>
            </section>
            <section>
                <legend className='text-custom-white text-2xl font-semibold my-4'>Other Projects</legend>
                <ul className='space-y-4 *:text-secondary *:text-lg'>
                    <li className='hover:opacity-80 cursor-pointer' id='gallery'>Gallery</li>
                    <li className='hover:opacity-80 cursor-pointer' id='nfrastructure'>Infrastructure</li>
                    <li className='hover:opacity-80 cursor-pointer' id='about'>About Us</li>
                </ul>
            </section>
            <section>
                <legend className='text-custom-white text-2xl font-semibold my-4'>Contact Info</legend>
                <ul className='space-y-4 *:text-secondary *:text-lg'>
                    <li className='hover:opacity-80 cursor-pointer'>
                        <i class="bi bi-geo-alt"> 45 Al Sa'adah - Zone 1 - Abu Dhabi</i>
                    </li>
                    <li className='hover:opacity-80 cursor-pointer'>
                        <i class="bi bi-whatsapp"> +971 2444 0089</i>
                    </li>
                    <aside>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.5533443801123!2d54.43272121098835!3d24.431580162194024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e674955fa1c61%3A0xda9484565b8cd45c!2sOia%20Properties!5e0!3m2!1sen!2sae!4v1706729980563!5m2!1sen!2sae"
                            width="300" height="200"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy" r
                        ></iframe>
                    </aside>
                </ul>
            </section>
        </footer>
    )
}

export default Footer