import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ cardData }) => {
    return (
        <div>
            <Link to={`movie/${cardData.id}`} className="cardcursor-pointer  group h-[350px]">
                <img className='w-full h-full rounded-md' src={`https://image.tmdb.org/t/p/original/${cardData.poster_path}`} alt="" />
                <div className="card-overlay opacity-0 group-hover:opacity-100 flex items-end absolute bg-black duration-500 bg-opacity-70 group-hover:bg-opacity-70 top-0 left-0 h-full w-full p-4">
                    <div className="wrapper h-[150px] w-full">
                        <p className="title text-md -translate-y-6 group-hover:translate-y-0 duration-500  text-white font-Montserrat font-bold">{cardData.original_title.split(':')[0]}</p>
                        <div className="rating-box translate-x-6 group-hover:translate-x-0 duration-500  flex items-center justify-between">
                            <p className="date text-slate-200 text-md ">{cardData.release_date}</p>

                            <p className="rating text-slate-200 text-md flex items-center gap-1"><span>{cardData.vote_average}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
                            </p>
                        </div>
                        <p className="overview translate-y-6 pb-3 group-hover:translate-y-0 duration-500 mt-1 break-words text-slate-200 text-sm ">

                            {cardData.overview.substring(1, 80)}...
                        </p>
                    </div>
                </div>

            </Link>
        </div>

    )
}

export default Card