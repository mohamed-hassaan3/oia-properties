import React from 'react'

const Header = ({isScrolled}) => {
    return (
        <div className={`${isScrolled && "bg-primary text-secondary shadow-lg px-6"} px-2 flex justify-between items-center py-6 w-full lg:home-layout rounded-xl fixed -translate-x-1/2 left-1/2 top-2 opacity-90 transition-all duration-700 z-10`}>
            <a href='#home' className='md:text-2xl text-sm font-semibold tracking-wide text-nowrap'>Saadiyat Lagoons</a>
            <nav>
                <ul className='flex items-center lg:gap-8 gap-4 *:text-nowrap *:text-xs *:lg:text-lg *:xl:text-xl  font-medium'>
                    <li><a href='#gallery'>Gallery</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#infrastructure'>Infrastructure</a></li>
                    <li><a href='#floorPlans'>Floor Plans</a></li>
                    <li><a href='#location'>Location</a></li>
                    <li><a href='#nearby'>Nearby Places</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header