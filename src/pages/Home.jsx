import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import Card from '../components/Card';
import Bannar from './Bannar';

const Home = () => {
    const [sliderData, setSliderData] = useState([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US').then((res) => {
            setSliderData(res.data.results);
        })
    }, [])
    const [trending, setTrending] = useState([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US').then((res) => {
            setTrending(res.data.results);
        })
    }, [])
    const [upcoming, setUpcoming] = useState([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US').then((res) => {
            setUpcoming(res.data.results);
        })
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 15
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4
        }
    };

    return (
        <main className='' >

            <Bannar sliderData={sliderData} />


            <div className="container mx-auto ">
                <section className="populer  py-8 mt-16">
                    <h1 className="section-title text-xl font-Montserrat font-semibold py-6 text-rose-500">Populer</h1>

                    {/* <div className="card-wrapper flex flex-wrap gap-5 justify-center">

                    </div> */}

                    <Carousel responsive={responsive} swipeable={false}
                        draggable={false}
                        showDots={true}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        containerClass="carousel-container"
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px">

                        {
                            sliderData.map(item => <Card cardData={item} />)
                        }
                    </Carousel>;
                </section>
                <section className="populer  py-8">
                    <h1 className="section-title text-xl font-Montserrat font-semibold py-6 text-rose-500">Trending</h1>

                    {/* <div className="card-wrapper flex flex-wrap gap-5 justify-center">

                    </div> */}

                    <Carousel responsive={responsive} swipeable={false}
                        draggable={false}
                        showDots={true}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        containerClass="carousel-container"
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px">

                        {
                            trending.map(item => <Card cardData={item} />)
                        }
                    </Carousel>;
                </section>
                <section className="populer  py-8">
                    <h1 className="section-title text-xl font-Montserrat font-semibold py-6 text-rose-500">Upcoming</h1>

                    {/* <div className="card-wrapper flex flex-wrap gap-5 justify-center">

                    </div> */}

                    <Carousel responsive={responsive} swipeable={false}
                        draggable={false}
                        showDots={true}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        containerClass="carousel-container"
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px">

                        {
                            upcoming.map(item => <Card cardData={item} />)
                        }
                    </Carousel>;
                </section>
            </div>
        </main >
    )
}

export default Home