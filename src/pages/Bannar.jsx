import React from 'react'
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Bannar = ({ sliderData }) => {
  return (
    <div className="slider-wrapper">
      <Carousel showThumbs={false} swipeable={true} autoPlay={true}>

        {
          sliderData.map(item =>
            <div className="slider-item w-full bg-slate-600 h-[700px] md:h-[700px] relative">
              <img src={sliderData ? `https://image.tmdb.org/t/p/original/${item.backdrop_path}` : ''} className='w-full object-cover h-full select-none cursor-none' alt="" />
              <div className="overlay absolute top-0 left-0 h-full w-full pt-52 px-4 md:px-0 bg-black bg-opacity-50">
                <div className="container mx-auto h-full">
                  <div className="overlay-inner flex items-end pb-32 h-full w-full md:w-[70%]">
                    <div className="text-wrapper text-start">
                      <h1 className="movie-name text-slate-100 font-bold font-Montserrat text-5xl">{sliderData ? item.original_title : ''}</h1>
                      <div className="rating-box py-5 flex items-center gap-8">
                        <p className="date text-slate-200 text-2xl ">{sliderData ? item.release_date : ''}</p>
                        <p className="rating text-slate-200 text-2xl flex items-center gap-2"><span>{sliderData ? item.vote_average : ''}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
                        </p>
                      </div>

                      <p className="discription text-slate-300 text-base py-2 pb-8">
                        <i>
                          {sliderData ? item.overview : ''}
                        </i>
                      </p>

                      <div className="slide-left">
                        <Link to={sliderData ? `movie/${item.id}` : ''} className='py-2 px-8 text-xl border hover:bg-yellow-600 hover:text-slate-200 border-yellow-600 bg-transparent duration-500 text-yellow-600 rounded-md '>Watch Movie</Link>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          )
        }




      </Carousel>
    </div>
  )
}

export default Bannar