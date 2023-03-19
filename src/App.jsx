import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Populer from './pages/Populer'
import Upcoming from './pages/Upcoming'
import Trending from './pages/Trending'
import Movie from './pages/Movie'


const App = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route index element={<Home />} />
                <Route path='populer' element={<Populer />} />
                <Route path='upcoming' element={<Upcoming />} />
                <Route path='top_rated' element={<Trending />} />
                <Route path='movie/:id' element={<Movie />} />
            </Routes>

        </>
    )
}

export default App