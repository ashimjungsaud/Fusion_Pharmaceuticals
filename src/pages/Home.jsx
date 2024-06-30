import React from 'react'
import Navbar from '../components/Navbar'
import { Banner } from '../components/Banner'
import { Test } from '../components/Test'
import Statistics from '../components/Statistics'
import { Services } from '../components/Services'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

export const Home = () => {
    return (
        <div className='Home'>
            <Navbar />
            <Banner />
            <AboutUs/>
            <Statistics />
            <Services />
            <Test />
            <Footer />
        </div>
    )
}
