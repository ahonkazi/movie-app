import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {

    const [sticky, setSticky] = useState(false)
    window.addEventListener('scroll', (e) => {
        if (window.scrollY > 100) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }
    )

    return (
        <header className={`px-2 md:px-0 duration-300 z-10 bg-opacity-70  ${sticky ? 'bg-black py-3' : 'bg-transparent py-7'} fixed top-0 left-0 w-screen `}>
            <div className="container mx-auto flex items-center gap-5">
                <div className="left_logo">
                    <Link to={''}>
                        <img className='h-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" />
                    </Link>
                </div>
                <div className="left_links flex items-center gap-8 font-Montserrat">
                    <NavLink to={'populer'} className='text-white text-md duration-500  hover:text-rose-500'>
                        Populer
                    </NavLink>
                    <NavLink to={'top_rated'} className='text-white text-md duration-500 hover:text-rose-500'>
                        Top Rated
                    </NavLink>
                    <NavLink to={'upcoming'} className='text-white text-md duration-500 hover:text-rose-500'>
                        Upcoming
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header