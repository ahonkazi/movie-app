import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
const Movie = () => {
    const { id } = useParams()
    const [movieData, setMovieData] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then(res => {
            setMovieData(res.data)
            setLoading(false)

        })

    }, [id])

    if (movieData) {
        console.log(movieData)
    }
    return (
        <main>

            <div className="container  mx-auto">
                <div className="cover-photo relative px-5 md:px-16 ">
                    <img className='rounded-b-lg h-[300px] md:h-[600px] w-full' src={`https://image.tmdb.org/t/p/original${movieData ? movieData.backdrop_path : ''}`} alt="" />
                    <div className="overlay absolute h-full w-full bg-black bg-opacity-75 top-0"></div>
                </div>
                <div className="sub-container z-30 md:-translate-y-[50%] -translate-y-[25%] px-16 md:px-28">
                    <div className="profile flex gap-8 items-center flex-wrap">
                        <div className="poster">
                            <img className='rounded-lg w-[250px] md:w-[350px]' src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt="" />
                        </div>
                        <div className="poster_details md:w-[50%]">
                            <h1 className="movie-name text-4xl text-white font-bold font-Montserrat">{movieData.title}</h1>
                            <p className="mt-1 font-Montserrat text-base font-medium text-slate-300 pl-0.5">{movieData.tagline}</p>
                            <div className="rating-wrapper mt-1 flex items-center gap-4">
                                <p className='flex text-slate-200 items-center text-base font-normal gap-1 font-Montserrat'><span>{movieData.vote_average}</span> <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
                                </p>
                                <p className='flex text-slate-200 items-center text-base font-normal gap-1 font-Montserrat'>
                                    <span>{movieData.vote_count}</span><span>(Votes)</span>
                                </p>

                            </div>
                            <p className='flex text-slate-200 items-center text-base font-normal gap-1 font-Montserrat'>
                                <span>114</span><span>mins</span>
                            </p>
                            <p className='flex text-slate-200 items-center text-base font-normal gap-1 font-Montserrat'>
                                <span className='font-medium'>Release Date: </span><span>27-12-2015</span>
                            </p>

                            <ul className="flex items-center gap-4 mt-2">
                                {/* {
                                    movieData ? movieData.genres.map(item => <li className='px-3 py-1 rounded-xl select-none font-medium font-Montserrat cursor-pointer duration-300 hover:bg-slate-300 hover:text-slate-900 text-slate-300 border border-slate-300'>{item.name}</li>
                                    ) : ''
                                } */}

                                {
                                    loading ? '' :
                                        movieData.genres.map(item => <li className='px-3 py-1 rounded-xl select-none font-medium font-Montserrat cursor-pointer duration-300 hover:bg-slate-300 hover:text-slate-900 text-slate-300 border border-slate-300'>{item.name}</li>)
                                }
                            </ul>

                            <div className="profile__foooter mt-20">
                                <h2 className='text-xl text-slate-200 font-semibold font-Montserrat'>Synopsys</h2>

                                <p className="text-slate-400 pt-4">
                                    {movieData.overview}
                                </p>
                            </div>
                        </div>

                    </div>



                </div>
                <div className="sub-container z-30 md:-translate-y-[200%] -translate-y-[25%] px-16 md:px-28">
                    <div className="usefull-links flex items-center justify-between flex-wrap">
                        <h2 className='text-2xl text-slate-300 font-semibold'>Usefull links</h2>
                        <Link to={movieData.homepage} target={"_blank"} className='text-md text-slate-200 px-6 py-2.5 font-medium bg-red-500 rounded-2xl flex items-center gap-2'>
                            <span>Homepage</span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M24,23c0,.552-.448,1-1,1H3c-1.654,0-3-1.346-3-3V1C0,.448,.448,0,1,0s1,.448,1,1V21c0,.551,.449,1,1,1H23c.552,0,1,.448,1,1Zm-3-18h-4c-.552,0-1,.448-1,1s.448,1,1,1h3.563l-4.857,4.707c-.377,.378-1.036,.378-1.413,0-.041-.04-1.239-.893-1.239-.893-1.138-1.073-3.077-1.033-4.162,.051l-4.586,4.414c-.398,.383-.41,1.016-.027,1.414,.197,.204,.458,.307,.721,.307,.25,0,.5-.093,.693-.279l4.6-4.428c.377-.378,1.036-.378,1.413,0,.041,.04,1.239,.893,1.239,.893,1.139,1.074,3.076,1.036,4.164-.054l4.89-4.74v3.607c0,.552,.448,1,1,1s1-.448,1-1v-4c0-1.654-1.346-3-3-3Z" /></svg>

                        </Link>
                        <Link to={`https://www.imdb.com/title/${movieData.imdb_id}/`} target={'_blank'} className='text-md text-slate-800 px-6 py-2.5 font-medium bg-yellow-500 rounded-2xl flex items-center gap-2'>
                            <span>Imdb</span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M24,23c0,.552-.448,1-1,1H3c-1.654,0-3-1.346-3-3V1C0,.448,.448,0,1,0s1,.448,1,1V21c0,.551,.449,1,1,1H23c.552,0,1,.448,1,1Zm-3-18h-4c-.552,0-1,.448-1,1s.448,1,1,1h3.563l-4.857,4.707c-.377,.378-1.036,.378-1.413,0-.041-.04-1.239-.893-1.239-.893-1.138-1.073-3.077-1.033-4.162,.051l-4.586,4.414c-.398,.383-.41,1.016-.027,1.414,.197,.204,.458,.307,.721,.307,.25,0,.5-.093,.693-.279l4.6-4.428c.377-.378,1.036-.378,1.413,0,.041,.04,1.239,.893,1.239,.893,1.139,1.074,3.076,1.036,4.164-.054l4.89-4.74v3.607c0,.552,.448,1,1,1s1-.448,1-1v-4c0-1.654-1.346-3-3-3Z" /></svg>

                        </Link>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Movie