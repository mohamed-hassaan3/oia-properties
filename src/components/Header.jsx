import { useRef } from "react"

const Header = ({ isScrolled, isOpen, setIsOpen }) => {
    const navRef = useRef(null);
    const iconRef = useRef(null);

    const toggleMenu = () => {
        if (navRef.current) {
            navRef.current.classList.toggle("toggle");
        }
        if (iconRef.current) {
            iconRef.current.classList.toggle("toggle");
        }
        setIsOpen(false);
    };

    return (
        <div className={`${isScrolled && "bg-primary text-secondary shadow-lg px-6"} px-2 flex justify-between items-center py-2 md:py-6 w-full lg:home-layout rounded-xl fixed -translate-x-1/2 left-1/2 top-2 opacity-90 transition-all duration-700 z-10`}>
            <a onClick={toggleMenu} href='#home' className='md:text-2xl font-semibold tracking-wide text-nowrap'>Saadiyat Lagoons</a>
            <nav>
                <ul
                    ref={iconRef}
                    className={`flex items-center lg:gap-8 gap-4 text-nowrap md:text-sm text-xl lg:text-sm xl:text-xl font-medium 
                    ${!isOpen && "hidden"} flex flex-col justify-around w-[100%] h-screen rounded-xl absolute right-0 top-20 z-10 bg-primary text-secondary 
                    ${!isScrolled && "lg:text-primary"} lg:bg-transparent lg:w-auto lg:static lg:flex lg:flex-row lg:h-auto`}
                >
                    <li><a onClick={toggleMenu} href='#gallery'>Gallery</a></li>
                    <li><a onClick={toggleMenu} href='#about'>About</a></li>
                    <li><a onClick={toggleMenu} href='#infrastructure'>Infrastructure</a></li>
                    <li><a onClick={toggleMenu} href='#floorPlans'>Floor Plans</a></li>
                    <li><a onClick={toggleMenu} href='#location'>Location</a></li>
                    <li><a onClick={toggleMenu} href='#nearby'>Nearby Places</a></li>
                </ul>
            </nav>
            <div className="lg:hidden z-10 text-2xl opacity-80" onClick={() => setIsOpen(prev => !prev)}>
                {isOpen ? (<i className="bi bi-three-dots-vertical text-4xl"></i>) : (<i className="bi bi-three-dots text-4xl"></i>)}
            </div>
        </div>
    );
};

export default Header;