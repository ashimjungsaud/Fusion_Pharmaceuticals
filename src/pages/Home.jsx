import React from 'react'
import Navbar from '../components/Navbar'
import { Banner } from '../components/Banner'
import Statistics from '../components/Statistics'
import Service from '../components/Service'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import Hero from '../components/Hero'


export const Home = () => {
    return (
        <div className='Home'>
            <Navbar />
            <Hero />
            <Banner />
            <AboutUs />
            <Service />
            <Statistics />
            <Footer />
        </div>
    )
}
