import React, { useState, useEffect } from 'react'
import CardBox from '../components/CardBox';
import axios from 'axios';

const Populer = () => {
    const [sliderData, setSliderData] = useState([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US').then((res) => {
            setSliderData(res.data.results);
        })
    }, [])
    return (
        <main>

            <div className="container mx-auto ">
                <section className="populer  py-8 mt-16">
                    <div className="card-wrapper flex flex-wrap gap-5 justify-center">
                        {
                            sliderData.map(item => <CardBox cardData={item} />)
                        }
                    </div>




                </section>


            </div>
        </main>
    )
}

export default Populer